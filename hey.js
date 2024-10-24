// function calculateTotal(billAmount, tipPercentage){
//         let x = (tipPercentage / 100) * billAmount;
//         let y = billAmount + x;
//         console.log(`The bill total is ${y}.`)
// }       

//     calculateTotal(50, 15)

// function rectArea(width, height){
//         let x = width * height 
//         console.log(x)
// }    

// rectArea(5, 10)


// function bmiCalc(weight, height){
//     let bmi = weight / (height**2)

//     if (bmi < 18.5){
//         console.log(`You too skinny with a weight under 18.5 at ${bmi}.`)
//     }  else if (bmi >= 24.9 && bmi > 18.5) {
//         console.log("You're a normal weight")
//     } else {
//         console.log("You fat goblin")
//     }

//     console.log(bmi)
// }

// bmiCalc(68, 1.75)


// function calculateGrade(grades){

//         let total = 0;

//         for (let i = 0; i < grades.length; i++){
//             total += grades[i];
//         }

//         const avg = total / grades.length;
//         console.log(avg)
// }

// calculateGrade([87,96,92,89,90,100])

// function stringy(strings){

//     for(let i = 0; i < strings.length; i++){
//         console.log(strings[i])
//     }
// }

// stringy([2, 4, 6, 3, 5])


// function maxMin(grades){

//     let max = grades[0];

//     let min = grades[0];


//     for(let i = 1; i < grades.length; i++) {
        
//         if (max < grades[i]){
//             max = grades[i]
//         }

//         if (min > grades[i]){
//             min = grades[i]
//         }
//     } 

//     console.log(max)
//     console.log(min)
// }

// maxMin([10,5,3,7,5,9,4,2])







// function rearrange(arr){


//     // return even numbers
//         for(let i = 0; i < arr.length; i++){

//             let decider = arr[i] % 2

//             if(decider == 0){
                

                

//             } else  {

//                 console.log("odd")

//             }

//         }
// }

// rearrange([]);



// let arr = [12,35,100,70,34,1]; 

// function findSecondLargest(nums){

//    let sortedArr = nums.sort((a,b)=> b - a)

//    let largest = sortedArr[0]
//    console.log(largest)
   
// }

// (findSecondLargest(arr))

// Program to countdown till 1


function counter(count) {

   
   console.log(count);

 
   if(count > 1) {

       
       count = count - 1;

       
       counter(count);
   } else {

       return;

   };
};

counter(100)

// // access function
// counter(5);

// function print(n)
// {
//    if(n > 0)
//    {
//       print(n-1);
//       console.log(n)
//    } 
   
// }

// print(100)