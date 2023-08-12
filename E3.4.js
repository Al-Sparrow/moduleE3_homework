let a, b;
begin = Number(prompt('Введите начальное число'))
end = Number(prompt('Введите конечное число'))
function logNumbers(begin, end) {
    let current = begin;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == end) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

logNumbers(begin, end);