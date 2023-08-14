// Array methods;
// 1. Find method;

const arrOfNums = [10,51,4,64,89,1]

function customFind(arr,func){
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            return arr[i]
        }
    }
}
customFind(arrOfNums,function(element){
    return element > 10
})

// 2. Map method

const arr1 = [1,2,3,4,5]

function customMap(arr,func){
    const newArr = [];
    
    for(let i = 0; i < arr.length; i++){
       
        newArr.push(func(arr[i], i))
        
       
    }
    return newArr
}

let clonedArr = customMap(arr1,function(element,i){
   
    return  element * 2
})

// console.log(clonedArr)

// 3. FindIndex method

function customfindIndex(arr,func){
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            return i
        }
    }
}
customfindIndex(arrOfNums,function(element){
    return element > 10
})

// 4. Reduce method

const nums = [1,2,3,4,5]


function customReduce(arr,func,randomVal = 1){
    for(let i = 0; i < arr.length; i++){
        randomVal =  func(randomVal, arr[i])
        
        
    }
    return randomVal
}

customReduce(nums,function(aggr,val){
     aggr.push(val)
     return aggr
}, [])