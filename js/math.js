export function limit(num, min, max) {
    if (num > max) {
        return max;
    }

    if (num < min) {
        return min;
    }

    return num;
}

export function map(num, fromBegin, fromEnd, toBegin, toEnd) {
    const factor = (toEnd - toBegin) / (fromEnd - fromBegin);
    return ((num - fromBegin) * factor) + toBegin;
}

export function random(min = 0, max = 1) {
    const range = max - min;
    return Math.round((Math.random() * range) + min);
}