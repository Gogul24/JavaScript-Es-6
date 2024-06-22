function filter(numbers,callBack){
    let result =[];
    for(let number of numbers){
        if(callBack(number)){
            result.push(number)
        }
    }
    return result;
    }

    let numbers = [10,20,33,30,21,27]
    let Odd = filter(numbers,function(number){
        return number%2
    })

    console.log(Odd);