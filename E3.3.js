let a, b;
a = Number(prompt('Введите первое число'))
b = Number(prompt('Введите второе число'))
function getSumFunction(a) {
    return function(b) {
        return a + b
    }
};

const sumFunction = getSumFunction(a);

const sum = sumFunction(b)

console.log(sum); // 5