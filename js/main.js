let numeros = [3 , 5, 7, 1, 6];

console.log(mayor(numeros));

function mayor(nums) {
    let max = nums[0];
    for (let i=0; i < nums.length; i++) {
        if (nums[i]> max) {
            max = nums[i];
        }
    }
    return max;
}