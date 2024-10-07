function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let BMI = weight/(height / 100)^2;
  if (BMI < 18.5) {
    console.log('Your BMI is ${BMI} and you are Underweight');
  } 
  else if (BMI >= 18.5 && BMI < 25) {
    console.log('Your BMI is ${BMI} and you are in Healthy Weight');
  }
  else if (BMI >= 25 && BMI <= 29.9) {
    console.log('Your BMI is ${BMI} and you are Overweight');
  }
  else {
    console.log('Your BMI is ${BMI} and you are Above Obesity');
  }
  
  if (age >= 19 && age <= 24) {
    console.log('Based on your BMI: ${BMI}, you are ' (BMI <= 19 && BMI >= 24) ? "Healthy" : "Not Healthy");
  } 
  else if (age >= 25 && age <= 34) {
    console.log('Based on your BMI: ${BMI}, you are ' (BMI <= 20 && BMI >= 25) ? "Healthy" : "Not Healthy");
  }
  else if (age >= 35 && age <= 44) {
    console.log('Based on your BMI: ${BMI}, you are ' (BMI <= 21 && BMI >= 26) ? "Healthy" : "Not Healthy");
  }
  else if (age >= 45 && age <= 54) {
    console.log('Based on your BMI: ${BMI}, you are ' (BMI <= 22 && BMI >= 27) ? "Healthy" : "Not Healthy");
  }
  else if (age >= 55 && age <= 64) {
    console.log('Based on your BMI: ${BMI}, you are ' (BMI <= 23 && BMI >= 28) ? "Healthy" : "Not Healthy");
  }
  else {
    console.log('Based on your BMI: ${BMI}, you are ' (BMI <= 24 && BMI >= 29) ? "Healthy" : "Not Healthy");
  }    
}
