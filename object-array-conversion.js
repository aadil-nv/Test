// const output = {
//     a:[1,2,3,4],
//     b:[5,6,7,8],
//     c:[9,10,11,12]
// };
const input = [
    {a:1,b:5,c:9},
    {a:2,b:6,c:10},
    {a:3,b:7,c:11},
    {a:4,b:8,c:12}
];

    let output = {}
input.forEach(obj => {
    for (let key in obj) {
        if (!output[key]) output[key] = [];
        output[key].push(obj[key]);
    }
});
console.log(output)



// ====================================================