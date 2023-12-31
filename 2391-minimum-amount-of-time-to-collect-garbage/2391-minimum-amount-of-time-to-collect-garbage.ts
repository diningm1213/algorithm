const Gabage = {
    metal: 'M',
    paper: 'P',
    glass: 'G'
} as const;

type Gabage = typeof Gabage[keyof typeof Gabage];
type GarbageInfo = {count: number, lastIndex: number};

function garbageCollection(garbage: string[], travel: number[]): number {
    const accTravel = [travel[0]];
    let garbageInfo: { [key in Gabage]: GarbageInfo } = {
        M: { count: 0, lastIndex: -1 },
        P: { count: 0, lastIndex: -1 },
        G: { count: 0, lastIndex: -1 },
    };

    for (let i = 0; i < garbage.length; i++) {
        for (let j = 0; j < garbage[i].length; j++) {
            garbageInfo[garbage[i][j]].count++;
            garbageInfo[garbage[i][j]].lastIndex = i;
        }
        
        if (i >= 2) {
            accTravel.push(accTravel[i - 2] + travel[i - 1]);
        }
    }

    return Object.values(garbageInfo).reduce((acc, cur) => 
        acc + cur.count + (cur.lastIndex <= 0 ? 0 : accTravel[cur.lastIndex - 1])
    , 0);
};