let a = 20;
if(a > 50){
    // console.log(a, "is the geaster then 50");
}else{
    // console.log(a, "is the lass then 50");
}

//লিপ ইয়ার বার করার প্রোগ্রাম

let year = 2025;
if(year % 4 == 0 || year % 100 == 0 || year % 400 == 0){
    // console.log(year, "is the leep year");
}else{
    // console.log(year, "is the not leep year");
}

//তিন সংখ্যা এর মধ্যে বড় সংখ্যা বার করার প্রোগ্রাম 

let b = 60;
let c = 40;
let d = 50;
if(b > c && b > d){
    // console.log(b, "is the biggest number");
}else if(c > b && c > d){
    // console.log(c, "is the biggest number");
}else{
    // console.log(d, "is the biggest number")
}

//রেজাল্ট বার করার প্রোগ্রাম

let result = 77;
    if(result >= 80 && result <= 100){
        // console.log("You got A+");
    }else if(result >= 70 && result < 80){
        // console.log("You got A");
    }else if(result >= 60 && result < 70){
        // console.log("You got A-");
    }else if(result >= 50 && result < 60){
        // console.log("You got B");
    }else if(result >= 40 && result < 50){
        // console.log("You got C");
    }else{
        // console.log("Bad luck! You are faild");
    }

// দুই সংখ্যা কে স্বাইপ করার প্রোগ্রাম যেখানে টেম্প নামে ভেরিয়বল ব্যবহার করে করা হইছে

let x = 10;
let y = 20;
let temp = 0;   //Swapping value is added the extra variable
temp = x;
x = y;
y = temp
// console.log("X value is: ",x);
// console.log("Y value is: ",y);

// দুই সংখ্যা কে স্বাইপ করার প্রোগ্রাম যেখানে টেম্প নামে ভেরিয়বল বাদে করা হইছে

let m = 20;
let n = 10;
m = m + n;  // Swapping value is no added the extra variable
n = m - n;
m = m - n;
// console.log("M value is: ", m);
// console.log("N value is: ", n);

// Suppose a amount in 230000 taka so the distribution in 5 person first preson in 40% second person in 20% third person in 15% fourth person in 14% and the last person in 11% so, how many money in the five person taka.
// মনে কর তোমার কাছে একটা ব্যবস্যা আছে যা থেকে তুমি ২৩০০০০ টাকা লাভ করছ এখন তুমি ওই টাকা ৫ জন এর কাছে ভাগ করে দিতে হবে প্রথন জন পাবে ৪০% দ্বতিয় জন ২০% ৩য় জন ১৫% ৪র্থ জন ১৫% এবং ৫ম জন ১১% পাবে  

let totalAmount = 230000;
let firstPerson = totalAmount * 40 / 100;
// console.log("First Person Amount is: ",firstPerson);
let secondPerson = totalAmount * 20 / 100;
// console.log("Second Person Amount is: ", secondPerson);
let thirdPserson = totalAmount * 15 / 100;
// console.log("Third Person Amount is: ",thirdPserson);
let furthPerson = totalAmount * 14 / 100;
// console.log("Fourth Parson Amount is: ",furthPerson);
let fivthPerson = totalAmount * 11 / 100;
// console.log("Fivth Person Amount is: ",fivthPerson);

let sumValue = firstPerson + secondPerson + thirdPserson + furthPerson + fivthPerson;
// console.log("The sum of total 5 person amount: ",sumValue);

// Suppose one shirt price in 1650 TK and and happy new year discount in 35% so how many taka in the shirt in total price.

let shirtPrice = 1650;
let discountPrice = shirtPrice * 35 / 100;
let totalPrice = shirtPrice - discountPrice;
// console.log("Total Price in Shirt = ",totalPrice);

//Suppose you are buy a airport eairphone in new year crimony to spcific time and discound in 40% as the main price in 5000 TK how much in the main taka as the discound price.
//মনে কর তুমি একটা ইয়ারফোন যা তোমাকে নিউ ইয়ার এর জন্য ৪০% ডিসকাউন্দ দিচ্ছে ওই ইয়ারফোন এর দাম ৫০০০ টাকা তাহলে তুমি এখন তুই ৪০% বাদে ঐ ইয়ারফনের দাম বার কর।

let mainAirportTaka = 5000;
let discoundPriceTaka = mainAirportTaka * 40 / 100;
// console.log("Discound Price is: ",discoundPriceTaka);
let totalAirportTaka = mainAirportTaka - discoundPriceTaka;
// console.log("The total Price in Airport is: ",totalAirportTaka);

//Suppose you are buy a tractor and the discount price 6% how many price is buy the tractor total tractor price is 1200k
// মনে কর তুমি একটা ট্র্যাক্টর কিনতে যাবা আর ডিসকাউন্দ ৬% তাহলে এখন ওই ট্র্যাক্টর এর দাম কত হবে। ট্র্যাক্টর এর দাম ১২ লাখ টাকা ধরা হইছে।

let tractorPrice = 1200000;
let tractorDiscoundPrice = tractorPrice * 6 / 100;
console.log("Tractor Discound Price is: ",tractorDiscoundPrice);
let totalTractorPrice = tractorPrice - tractorDiscoundPrice;
console.log("Total Tractor Price is: ",totalTractorPrice);