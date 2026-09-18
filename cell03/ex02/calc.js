setInterval(function () {
     alert("Please, use me...");
   }, 30000);
   
   const calculate = () => {
     const num1 = parseFloat(document.getElementById("num1").value);
     const num2 = parseFloat(document.getElementById("num2").value);
     const operator = document.getElementById("operator").value;
     let ans = 0;
     if (isNaN(num1) || isNaN(num2)) {
       console.log("Error :(");
       alert("Error :(");
       return;
     }
     if ((operator === "/" || operator === "%") && num2 === 0) {
          console.log("It’s over 9000!");
          alert("It’s over 9000!");
          return;
     }
     if (num1 < 0 || num2 < 0) {
       console.log("Error :(");
       alert("Error :(");
       return;
     } else if (operator == "+") {
       ans = num1 + num2;
     } else if (operator == "-") {
       ans = num1 - num2;
     } else if (operator == "*") {
       ans = num1 * num2;
     } else if (operator == "/") {
       ans = num1 / num2;
     } else if (operator == "%") {
       ans = num1 % num2;
     }
     
       console.log(ans);
       alert(ans);
   };