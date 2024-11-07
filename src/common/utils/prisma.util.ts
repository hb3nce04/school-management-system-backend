/**
 *
 * @param fields (optional): An array of strings representing the field names to be selected. If this parameter is not provided or is undefined, the function will return undefined, which means all fields will be selected by default in Prisma queries.
 * @returns A Record<string, boolean> object where each key is a field name from the input array, and the value is true. This object can be used as the select option in Prisma queries.
If the fields parameter is not provided or is undefined, the function returns undefined, indicating that all fields should be selected.
 */
export function convertFieldsToPrismaSelect(
  fields?: string[],
): Record<string, boolean> {
  if (!fields) {
    return undefined; // Return undefined to select all fields (Prisma API)
  }
  const selectObject: Record<string, boolean> = {};
  for (let i = 0; i < fields.length; ++i) {
    selectObject[fields[i]] = true;
  }
  return selectObject;
}
