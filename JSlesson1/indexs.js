//1-mashq
var soat = prompt("Soatni kiriting: ");
var daqiqa = soat * 60;
alert("Daqiqalqr soni: " + daqiqa)
//2-mashq
var ism = prompt("Ismingizni kiriting:");
var yosh = prompt("Yoshingizni kiriting:");
alert("Salom, " + ism + "! Sizning yoshingiz: " + yosh);
//3-mashq
var name = "Pororo";
var age = 18;
var talaba = true;
console.log("name turi:", typeof name);
console.log("age turi:", typeof age);
console.log("talaba turi:", typeof talaba);
//4-mashq
var son1 = prompt("1-sonni kiriting:");
var son2 = prompt("2-sonni kiriting:");
var yigindi = Number(son1) + Number(son2);
alert("Yig‘indi: " + yigindi);
//5-mashq
var a = prompt("1-sonni kiriting:");
var b = prompt("2-sonni kiriting:");
var c = prompt("3-sonni kiriting:");
var orta = (Number(a) + Number(b) + Number(c)) / 3;
console.log("O‘rta arifmetik:", orta);
//6-mashq
var s1 = prompt("1-son:");
var s2 = prompt("2-son:");
console.log("Ko‘paytma:", s1 * s2);

// 7-mashq
var n1 = prompt("1-son:");
var n2 = prompt("2-son:");
console.log("Bo‘linma:", n1 / n2);
//8-mashq
var x1 = prompt("1-son:");
var x2 = prompt("2-son:");
var kvadratYigindi = x1**2 + x2**2;
console.log("Kvadratlar yig‘indisi:", kvadratYigindi);
//9-mashq
var y1 = prompt("1-son:");
var y2 = prompt("2-son:");
var kubFarqi = y1**3 - y2**3;
console.log("Kublar farqi:", kubFarqi);
//10-mashq
var z1 = prompt("1-son:");
var z2 = prompt("2-son:");
var kubKopaytma = (z1**3) * (z2**3);
console.log("Kublar ko‘paytmasi:", kubKopaytma);

