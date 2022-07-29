
// //algo two sums

// var twoSum = function(nums, target) {

//     for(i = 0 ; i< nums.length ; i++){
//         for(let j = i+1; j < nums.length ; j ++){
//             if(nums[i] + nums[j] == target){
//                 return [i,j]
           
            
//             }
//         }
//     } 

// };
// nums = [2,7,11,15];
// target = 9

// console.log(twoSum(nums,target));


// algo anagrame

var anagram = function ( s,t){

    let order1 = s.split("").sort( ).join("");

    let order2 = t.split("").sort( ).join("");

    if(order1 == order2){
        return true;
    }
    else{
        return false;
    }
};

s = 'rac'
t= 'car'
console.log(anagram(s,t));








