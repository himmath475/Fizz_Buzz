function fizzBuzz(arr){
    for(let i=0; i<arr.length; i++){
        if(isNaN(arr[i])){
            console.log('Invalid Item');
            continue;
        }
        if(arr[i]%15===0){
            console.log("FizzBuzz");
            continue;
        }
        if(arr[i]%5===0){
            console.log("Buzz");
            continue;
        }
        if(arr[i]%3===0){
            console.log("Fizz");
            continue;
        }
        if(arr[i]%5!==0){
            console.log(`Divided ${arr[i]} by 3`);
        }
        if(arr[i]%3!==0){
            console.log(`Divided ${arr[i]} by 5`);
        }
    }

}
fizzBuzz([1, 3, 5 , , 15, 'A', 23])
