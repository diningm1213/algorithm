import { test, expect } from "vitest";
import findSmallestSetOfVertices from './1557-minimum-number-of-vertices-to-reach-all-nodes'

test('n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]', () => {
    expect(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]])).toEqual([0,3]);
});

test('n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]', () => {
    expect(findSmallestSetOfVertices(5, [[0,1],[2,1],[3,1],[1,4],[2,4]])).toEqual([0,2,3]);
});