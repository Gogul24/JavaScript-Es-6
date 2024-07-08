const arr = ['apple','orange','pineapple'];
[arr[1] , arr[2]] = [arr[2],arr[1]];
console.log(arr);

const [a1,...a2] = arr;
console.log(a1,a2);