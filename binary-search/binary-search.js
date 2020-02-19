'use strict';

[0, 1, 2, 4, 5]


// Complete this algo
const binarySearch = (array, target) => {
	let leftIndex = 0;
	let rightIndex = array.length - 1;
	while (leftIndex <= rightIndex) {
		let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

		if (target === array[middleIndex]) {
			return true;
		} else if (target < array[middleIndex]) {
			rightIndex = middleIndex - 1;
		} else {
			leftIndex = middleIndex + 1;
		}
	}
	return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch