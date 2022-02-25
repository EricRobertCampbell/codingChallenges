/**
 * Finds the length of the longest subsequence of consecutive integers in the list
 */
export function longestSubSequence(list: Array<number>): number {
	let lengths: Array<number> = [];

	let currentLength: number;
	list.filter((num, index, allNums) => allNums.indexOf(num) === index)
		.sort((a, b) => a - b)
		.forEach((num, index, allNums) => {
			if (index === 0) {
				currentLength = 1;
			}
			if (index === allNums.length - 1) {
				lengths.push(currentLength);
			}
			if (allNums[index + 1] === num + 1) {
				currentLength++;
			} else {
				lengths.push(currentLength);
				currentLength = 1;
			}
		});
	return Math.max(...lengths);
}
