function getFibonacciNumbers(number) {
    let prev = 0;
    let next = 1;
    let result = 0;
    let temp = 0;

    for(let i = 0; i < number; i++) {
        temp = next;
        next = prev + next;
        prev = temp;
        result += ',' + prev;
    }
    return result;
}

