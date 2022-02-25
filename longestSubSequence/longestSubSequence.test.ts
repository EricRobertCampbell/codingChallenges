import { longestSubSequence } from "./longestSubSequence";

describe("The longestSubSequence function", () => {
	it("Should work on a single element", () => {
		expect(longestSubSequence([1])).toBe(1);
	});

	it("Should work if there is only one sequence, in the correct order", () => {
		expect(longestSubSequence([1, 2, 3])).toBe(3);
	});

	it("Should work if there is only one sequence, but it is not in the correct order", () => {
		expect(longestSubSequence([3, 1, 2])).toBe(3);
	});

	it("Should work if there are duplicates", () => {
		expect(longestSubSequence([2, 3, 1, 2])).toBe(3);
	});

	it("Should work if there are multiple subsequences of the same length", () => {
		expect(longestSubSequence([1, 2, 5, 4])).toBe(2);
	});

	it("Should work on the first provided example", () => {
		expect(longestSubSequence([1, 9, 87, 3, 10, 4, 20, 2, 45])).toBe(4);
	});

	it("Should work on the second provided example", () => {
		expect(
			longestSubSequence([36, 41, 56, 35, 91, 33, 34, 92, 43, 37, 42])
		).toBe(5);
	});
});
