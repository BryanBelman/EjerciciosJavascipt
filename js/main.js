let numeros = [3 , 5, 7, 1, 6];

console.log(menor(numeros));

function menor(nums) {
    let min = nums[0];
    for (let i=0; i < nums.length; i++) {
        if (nums[i]< min) {
            min = nums[i];
        }
    }
    return min;
}