const toCall = [
    { func: 'sum', args: [2, 3] },
    { func: 'multiply', args: [2, 3] },
    { func: 'subtract', args: [5, 2] },
    { func: 'divide', args: [6, 2] }
];

for (let i = 0; i < toCall.length; i++) {
    try {
        console.log(window[toCall[i].func]);
    } catch (e) {
        console.log(`Error calling ${toCall[i].func}: ${e.message}`);
    }
}

const sum = function (a, b) {
    return a + b;
};
const multiply = function (a, b) {
    return a * b;
};
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;


for (let i = 0; i < toCall.length; i++) {
    console.log(window[toCall[i].func]);

}
