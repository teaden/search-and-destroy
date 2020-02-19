'use strict';

[0, 1, 2, 4, 5]


// Complete this algo
const binarySearch = (array, target) => {
	let midIndex = Math.floor(array.length / 2);
	while (midIndex !== 0 && midIndex !== array.length - 1) {
		if (target < array[midIndex]) {
			midIndex -= 1;
		}
		if (target > array[midIndex]) {
			midIndex += 1
		}
		if (target === array[midIndex]) {
			return true;
		}
	}
	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch