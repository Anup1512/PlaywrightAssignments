/*//Example 1

let s = "Hello world"
let arr=s.split(" ")
console.log(arr[0])
console.log(arr[1])
console.log("The length of last word is " + arr[1].length)*/


//Example 2

/*let str = " fly me to the moon "
let arr1=str.trim().split(" ")

for(let index in arr1)
{
    console.log("arr1["+index+"] is "+ arr1[index])
}
let i = arr1.length
console.log("The length of last word is " + arr1[i-1].length)*/


//Example 3


function isanagram(input1, input2)
{
    x=input1.trim().toLowerCase().split('').sort()
    y=input2.trim().toLowerCase().split('').sort()
    for(let index in x,y)
{
    if(x[index]==y[index])
    {
        console.log(" yes!! They are anagram")
    }
    else{
        console.log(" No!!They are not anagram")
    }
}
}

isanagram(' Listen ', ' Slient ')