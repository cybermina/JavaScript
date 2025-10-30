//1-mashq
let number = +prompt("Son kiriting:");
if (number > 0) alert("Musbat");
else if (number < 0) alert("Manfiy");
else alert("Nol");
//2-mashq
let a = +prompt("1-son:");
let b = +prompt("2-son:");
if (a > b) alert(a + " katta");
else if (b > a) alert(b + " katta");
else alert("Sonlar teng");
//3- mashq
let x = +prompt("Son kiriting:");
if (x === 0) alert("Nol");
else alert("Nol emas");
//4-mashq
let s1 = +prompt("1-son:");
let s2 = +prompt("2-son:");
if (s1 === s2) alert("Sonlar teng");
else alert("Teng emas");
//5-mahsq
let num = +prompt("Son kiriting:");
if (num % 3 === 0 && num % 5 === 0) alert("FizzBuzz");
else if (num % 3 === 0) alert("Fizz");
else if (num % 5 === 0) alert("Buzz");
else alert("Hech biri emas");
//6-mashq
let age = +prompt("Yoshingizni kiriting:");
if (age >= 18) alert("Guvohnoma olasiz");
else alert("Hali yoshsiz");
//7-mashq
let day = +prompt("1 dan 7 gacha son kiriting:");
if (day === 1) alert("Dushanba");
else if (day === 2) alert("Seshanba");
else if (day === 3) alert("Chorshanba");
else if (day === 4) alert("Payshanba");
else if (day === 5) alert("Juma");
else if (day === 6) alert("Shanba");
else if (day === 7) alert("Yakshanba");
else alert("1 dan 7 gacha kiriting");
//8-mashq
let n = +prompt("3 xonali son kiriting:");
let oxirgi = n % 10;
if (oxirgi % 2 === 0) alert("Oxirgi raqam juft");
else alert("Oxirgi raqam toq");
//9-mashq
let Number = +prompt("Butun son kiriting:");
if (Number > 0) a = a + 1;
else Number = Number - 2;
alert("Natija: " + Number);
//10-mashq
let m = +prompt("1-son:");
let y = +prompt("2-son:");
let z = +prompt("3-son:");
let count = 0;

if (x > 0) count++;
if (y > 0) count++;
if (z > 0) count++;

alert("Musbat sonlar soni: " + count);
