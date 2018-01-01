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