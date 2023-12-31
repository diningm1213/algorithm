function garbageCollection(garbage: string[], travel: number[]): number {
  let collectingGlass = false, collectingMetal = false, collectingPaper = false;
  let totalTravelTime = 0;
  let truckTimes = 0;

  // 뒤에서부터 collecting을 검사
  // 매번 G, M, P를 검사할 필요없이 그냥 length를 더해준다..
  for (let i = garbage.length -1; i >= 0; i--) {
    const currGarbage = garbage[i];

    if (!collectingGlass && currGarbage.match(/G/g)) {
      collectingGlass = true;
      truckTimes++;
    }
    if (!collectingMetal && currGarbage.match(/M/g)) {
      collectingMetal = true;
      truckTimes++;
    }
    if (!collectingPaper && currGarbage.match(/P/g)) {
      collectingPaper = true;
      truckTimes++;
    }

    const truckTravelTime = (travel[i - 1] ?? 0) * truckTimes;
    totalTravelTime += currGarbage.length + truckTravelTime;
  }

  return totalTravelTime;
};