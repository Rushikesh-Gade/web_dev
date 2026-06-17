const fruits = ["apple",
     "banana",
     "apple",
     "orange",
     "banana",
     "apple"];

const count = fruits.reduce((tot, fruit) => {
    if (tot[fruit]) {
        tot[fruit]++;
    } else {
        tot[fruit] = 1;
    }
    return tot;
}, 0);
console.log(count);
