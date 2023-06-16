function bubbleSort(arr) {

  for (let outer = arr.length - 1; outer >= 0; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      let first = arr[inner];
      let next = arr[inner + 1];
      if (first > next) {
        const tupperware = next;
        arr[inner + 1] = first;
        arr[inner] = tupperware;
      }
    }
  }
  return arr;
}
module.exports = bubbleSort;
