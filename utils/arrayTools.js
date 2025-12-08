function sortBy(array, key, ascending = true) {
  return [...array].sort((a, b) => {
    const valueA = typeof a === "object" ? a[key] : a;
    const valueB = typeof b === "object" ? b[key] : b;

    if (ascending) {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
}

export default { sortBy };
