let numeroscaso1 = [1, 22, 5, 17, 10, 5, 40, 5];
let numeroscaso2 =[7, 41, 5, 7, 10, 13, 2];
let numeroscaso3 =[1, 22, 5, 14, 24, 31, 27, 15, 105];
let repetidos = function (nums) {
   

        for (let i = 0; i < nums.length; i++){
            let cont =0;
            for (let j = 0; j < nums.length; j++){
                if (nums[i]==nums[j]){
                    cont ++;
                }
            }
            if (cont!=1)
            console.log(`El numero ${nums[i]} se repite ${cont} veces `);
        }
    
    }


repetidos (numeroscaso1);