-- 코드를 입력하세요
SELECT INGREDIENT_TYPE, SUM(TOTAL_ORDER) AS TOTAL_ORDER
FROM FIRST_HALF AS F_HALF
    INNER JOIN ICECREAM_INFO AS INFO
    ON F_HALF.FLAVOR = INFO.FLAVOR
GROUP BY INFO.INGREDIENT_TYPE
ORDER BY 2

