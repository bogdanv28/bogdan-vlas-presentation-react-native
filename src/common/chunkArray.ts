export const chunkArray = <T>(array: Array<T>, chunks: number): Array<Array<T>> => {
  return Array.from({ length: Math.ceil(array.length / chunks) }, (_, index) =>
    array.slice(index * chunks, index * chunks + chunks)
  );
};
