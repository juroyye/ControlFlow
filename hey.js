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


function formatter(namesArr, gradesArr){


        for(let i = 0; i < namesArr.length; i++){
                console.log(`${namesArr[i]} received a grade of ${gradesArr[i]}`)
        }
}



formatter(["John", "Jane", "Emily"], [90, 85, 92])