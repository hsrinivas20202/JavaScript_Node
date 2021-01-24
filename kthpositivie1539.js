var findKthPositive = function(nums,k){
missingValues = [];
    for(i=1;i<2000;i++){
        if(!nums.includes(i)){
            missingValues.push(i)
        }

    }
    console.log(missingValues);
    console.log('kth value',missingValues[k-1]);
} 

findKthPositive([5,6,7],1);