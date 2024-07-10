function solution(emergency) {
    const sortEmergency = [...emergency].sort((a, b) => b - a);
    return emergency.map(e => sortEmergency.indexOf(e) + 1);
}