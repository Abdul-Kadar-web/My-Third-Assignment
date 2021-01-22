



     //kilometerToMeter

// function kilometerToMeter(kilometer) {
//     var meter = 1000 * kilometer;
//     return meter;
// }
// var meter = kilometerToMeter(10);
// console.log(meter);



//  budgetCalculator

// function budgetCalculator(watch, mobile, laptop){
//     var totalprice = 0;
//     if(watch >= 0 && mobile >= 0 && laptop >= 0){
//        var watchPrice = watch * 50;
//        var mobilePrice = mobile * 100;
//        var laptopPrice = laptop * 500;
//        totalprice = watchPrice + mobilePrice + laptopPrice;
//     }
//     else{
//         return('answer is negative')
//     }
//     return totalprice;
// }
    
// var numbers = budgetCalculator(20, 10, 5);
// console.log(numbers);




// hotelCost

// function hotelCost(rent){
//     var night = 0;
// if(rent<=10){
//     night = rent * 100;
// }
// else if(rent<=20){
//     var firstnight = 10 * 100;
//     var remaining = rent - 10;
//     var secondnight = remaining * 80;
//     night = firstnight + secondnight;
// }
// else{
//     var firstnight = 10 * 100;
//     var secondnight = 10 * 80;
//     var remaining = rent - 20;
//     var thirdnight = remaining * 50;
//     night = firstnight + secondnight + thirdnight;
// }
//   return night;
// }
// var total = hotelCost(25);

// console.log(total);


// megaFriend


function findLongestWord(str){
  var max = str[0];
for(var i = 0; i > str.length; i++){
    var element = str[i];
    if(element > max){
        max = element;
    }
    else{
      return("This is negative");
    }
}
  
    return max;
}
var str = ["Parvez", "Toky", "Jaif", "Akon", "Adib", "Miraz", "Parvej"];
var megaFriend = findLongestWord(str);
console.log(megaFriend);



