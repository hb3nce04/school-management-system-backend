import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    bFirstName: 'James',
    bLastName: 'Smith',
    mFirstName: 'Mary',
    mLastName: 'Johnson',
    gender: 'MALE',
    eduId: 123,
    birthCountry: 'United States',
    birthCity: 'New York',
    birthDate: new Date('1990-01-01'),
    isActive: true,
    isArchived: false,
    userOrAuthId: 1,
    description: 'A friendly user.',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
