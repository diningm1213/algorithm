export const formatKebabCase = (str: string, excludeList: string[]) => {
    const excludeSet = new Set(excludeList);
    let hasExclude = false;
    let kebabCase: string[] = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // exclude 문자가 여러개 나오는 경우를 처리하기 위해 hasExclude 변수를 사용
        if (excludeSet.has(char)) {
            hasExclude = true;
        } else {
            if (hasExclude) {
                kebabCase.push('-');
                hasExclude = false;
            }
            kebabCase.push(char);
        }
    }

    return kebabCase.join('').toLowerCase();
};
