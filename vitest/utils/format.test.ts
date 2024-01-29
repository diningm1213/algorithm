import { expect, test } from "vitest";
import { formatKebabCase } from "./format";

test('change leetcode problem title to kebab case format', () => {
    expect(formatKebabCase('1557. Minimum Number of Vertices to Reach All Nodes', ['.', ' ']))
        .toBe('1557-minimum-number-of-vertices-to-reach-all-nodes');
});
