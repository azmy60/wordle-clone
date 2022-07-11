export function createEmptyMatrix(row: number, column: number) {
  return Array(row)
    .fill(null)
    .map(() => Array(column).fill(""));
}

// from https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig
// @ts-ignore: implicitly has an 'any' type
function clone(items) {
  // @ts-ignore: implicitly has an 'any' type
  return items.map((item) => (Array.isArray(item) ? clone(item) : item));
}

export const cloneMatrix = clone;
