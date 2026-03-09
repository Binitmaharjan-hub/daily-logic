let arr=[10, 45, 23, 89, 67, 89, 12];
let largest=-Infinity;
let secondLargest=-Infinity;

for(i of arr){
    if(i>largest){
        secondLargest=largest;
        largest=i;
    }else if(i<largest && i>secondLargest){
        secondLargest=i;
    }
}
console.log(secondLargest);

let removeDuplicate=new Set(arr);
console.log(removeDuplicate);

let greater=arr.filter(num=>num>40);
console.log(greater);

const arr2=[
 { name: "Ram", age: 22 },
 { name: "Sita", age: 17 },
 { name: "Hari", age: 25 },
 { name: "Gita", age: 16 }
];

let adults=arr2.filter(Adult=>Adult.age>18)
console.log(adults);

let ages=arr2.map(old=>old.age)
let oldest=Math.max(...ages);
console.log(oldest);

let averageAge=arr2.reduce((acc,avg)=>acc+avg.age,0)/arr2.length;
console.log(averageAge);

const reverse=(str)=>{
    let result=""
    for(i=str.length-1;i>=0;i--){
        result+=str[i]
    }
    return result
}
console.log(reverse("I love js"))