function solution(survey, choices) {
    const scoreMap = {
        RT: 0,
        CF: 0,
        JM: 0,
        AN: 0,
    };
    
    survey.forEach((s, i) => {
        switch (s) {
            case "RT":
            case "CF":
            case "JM":
            case "AN":
                scoreMap[s] -= choices[i] - 4;
                break; 
            case "TR":
            case "FC": 
            case "MJ":
            case "NA":
                scoreMap[s[1]+s[0]] += choices[i] - 4;
                break;
        }
    });
    
    return `${scoreMap['RT'] >= 0 ? 'R' : 'T'}${scoreMap['CF'] >= 0 ? 'C' : 'F'}${scoreMap['JM'] >= 0 ? 'J' : 'M'}${scoreMap['AN'] >= 0 ? 'A' : 'N'}`;
}