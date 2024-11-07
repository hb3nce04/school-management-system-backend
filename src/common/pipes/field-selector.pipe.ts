import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  ParseArrayPipe,
} from '@nestjs/common';
import { PrismaService } from '../modules/prisma/prisma.service';
import { getDMMF } from '@prisma/internals';
import { join } from 'path';

const datamodelPath = join(__dirname, '../../../prisma/schema.prisma');

@Injectable()
export class FieldSelectorPipe extends ParseArrayPipe {
  constructor(private readonly modelName: string) {
    super({ items: String, separator: ',', optional: true });
  }

  async transform(value: any, metadata: any) {
    const transformedValue = await super.transform(value, metadata);
    console.log(transformedValue);
    if (!Array.isArray(transformedValue) || !transformedValue.length) {
      return false;
    }

    const modelAttributes = await this.getModelAttributes(this.modelName);
    const selectedFields = modelAttributes.filter((x) =>
      transformedValue.includes(x),
    );

    if (selectedFields.length === 0) {
      throw new BadRequestException('No valid fields selected');
    }
    console.log(selectedFields);

    return selectedFields;
  }

  private async getModelAttributes(datamodel: string): Promise<string[]> {
    const dmmf = await getDMMF({ datamodelPath });
    const model = dmmf.datamodel.models.find(
      (model) => model.name === datamodel,
    );
    if (!model) {
      throw new InternalServerErrorException(`Model ${datamodel} not found`);
    }
    return model.fields.map((field) => field.name);
  }
}
