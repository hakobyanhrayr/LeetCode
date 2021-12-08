
//
// let twoSum = function (nums, target){
//     let a;
//     for(let i = 0; i < nums.length; i++){
//         if( nums[i] + nums[i + 1] === target){
//             a = target;
//             console.log(nums.indexOf(nums[i]), nums.indexOf(nums[i +1]));
//         }
//     }
//     return a;
// }
// let nums = [2,7,11,15];
// let target = 9;
// console.log(twoSum([15,8,7,2], 9));

// ===========

// function init() {     //Замыкания на практике
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//         console.log(name); // displayName() uses variable declared in the parent function
//     }
//     return displayName; // կամ return տեղը կանցգել ֆունկցիա displayName();
// }
// let a = init();
// a();

// ===================

// function makeAdder(x) {     //Замыкания на практике
//     return function(y) {
//         return x + y;
//     };
// };
//
// let  add5 = makeAdder(5);
// let add10 = makeAdder(10);
//
// console.log(add5(2));  // 7
// console.log(add10(2));

