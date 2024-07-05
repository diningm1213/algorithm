function solution(myString, pat) {
    const last = myString.lastIndexOf(pat);
    return myString.slice(0, last + pat.length);
}