/**
 * Add index to array.
 *
 * @param iterable - The iterable object.
 * @returns - A new object where each previous item now has an id attached.
 */
function getIndex<T>(iterable: T[]): { id: number; data: T }[] {
  return iterable.map((item, index) => ({
    id: index,
    data: item,
  }))
}

export { getIndex } // eslint-disable-line import/prefer-default-export
