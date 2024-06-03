function solution(arr1, arr2) {
    const len = arr1.length - arr2.length;
    
    if (len) {
        return len > 0 ? 1 : -1;
    }
    
    const difference = arr1.reduce((acc, cur) => acc + cur, 0) - 
          arr2.reduce((acc, cur) => acc + cur, 0);
    
    return difference ? difference > 0 ? 1 : -1 : 0;
}