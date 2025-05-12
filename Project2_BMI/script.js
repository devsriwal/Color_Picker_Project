const form=document.getElementById('bmi-form').addEventListener("submit",function(e){
  e.preventDefault();

  const heightCM= parseFloat(document.getElementById("height").value);
   const widthKG= parseFloat(document.getElementById("weight").value);

   if(isNaN(heightCM) || isNaN(widthKG) || heightCM<=0 || widthKG<=0){
    alert("Please enter positive and valid height and width");
    return;
   }

   const heightM=heightCM/100;
   const bmi= widthKG/ (heightM*heightM);

   let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Show result
  alert(`Your BMI is ${bmi.toFixed(2)} (${category})`);


})