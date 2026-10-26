export function romanToInteger(str) {
    let result = 0;

    const rNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < str.length; ++i) {
        let cur = rNumbers[str[i]];

        if (i + 1 < str.length && cur < rNumbers[str[i + 1]]) {
            result -= cur;
        } else {
            result += cur;
        }
    }

    return result;
}