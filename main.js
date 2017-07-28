
// console.log("Hello and Welcome to the best Website");
//
//
// function checkout (item1, item2, coupon, salesTax) {
//   var subTotal = item1 + item2;
//   var couponValue = subTotal * coupon;
//   var salesTaxValue = subTotal * salesTax;
//   var grandTotal = subTotal + salesTaxValue - couponValue;
//   return grandTotal;
// }
// console.log(checkout(25, 27, .14, 0.0725));
//
//
//
// var elevatorLine = [];
//
// function pressFloorNumber (num) {
//   elevatorLine.push(num);
//   console.log('Position ' + elevatorLine.length + '.')
// }
//
// function goToNextFloor (){
//   console.log(elevatorLine);
//   elevatorLine.splice(0,1);
// }
//
// function currentLine (){
//     console.log('The line is currently:')
//     for(i=0; i < elevatorLine.length; i++){
//       console.log(' Floor ' + elevatorLine[i] +',')
//     }
// }
//
// var test = jQuery('.fantasy-paragrapgh');
// test.text('Cats are Better');

function myGreeting() {
  console.log('hello');
  var userName = $("#username").val();
  console.log(userName);
  var userAge = $("#number").val();
  console.log(userAge);
  $("#green-heading").text("Welcome, " + userName);
}

function setup(){
  console.log("page is ready");
  $('#submitButton').click(myGreeting)

}

$(document).ready(setup);
