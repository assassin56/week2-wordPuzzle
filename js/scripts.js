$(document).ready(function() {
  //on click function
  $("form").submit(function(event) {
    event.preventDefault();
    console.log("form submited");

    const number = $("#input1").val();
    let numbersArray = [];
    let primeArray = [];
    let counter = 0;
    let currentNumber;
    if (number === 1) {
      numbersArray.push(1);
    } else if (number === "2") {
      numbersArray.push(1, 2);
    } else {
      while (counter < number) {
        counter++;
        numbersArray.push(counter);
      }
      primeArray.push(numbersArray.shift())
      counter = 2;
      // while (counter < 11) {
      //   for (let i = 1; i < numbersArray.length; i++) {
      //     const element = array[i];
          
      //   }
      // }
      console.log(
        `numbersArray = ${numbersArray} primeArray= ${primeArray} currentNumber ${currentNumber}`
      );
    }
  });
});
