//AMALIY
//1-mashq
let son = prompt("4 xonali son kiriting:");
let kopaytma = 1;
for(let i = 0; i < son.length; i++) {
    kopaytma *= Number(son[i]);
}
console.log("Raqamlar ko‘paytmasi:", kopaytma);
//2-mashq
for(let i = 1; i <= 10; i++) {
    let qator = "";
    for(let j = 1; j <= 10; j++) {
        qator += (i * j) + "\t";
    }
    console.log(qator);
}
//3-mashq
for(let i = 1; i <= 10; i++) {
    if(i === 9) continue; 
    if(i % 2 === 0) continue; 
    console.log(i);
}
//4-mashq
let word = "JavaScript";
for(let i = 0; i < word.length; i++) {
    console.log(i, word[i]);
}


//HOMEWORK
//1-mashq
let n = Number(prompt("n ni kiriting:"));
for(let i = 1; i < n; i += 2) {
    console.log(i);
}

//2-mashq
let l = Number(prompt("l ni kiriting:"));
let sum = 0;
for(let i = 2; i <= l; i += 2) {
    sum += i;
}
console.log("Yig‘indi:", sum);

//3-mashq
let raqam = prompt("Raqam kiriting:");
let teskari = "";
for(let i = raqam.length - 1; i >= 0; i--) {
    teskari += raqam[i];
}
console.log("Teskari:", teskari);

//4-mashq
let a = Number(prompt("a ni kiriting:"));
let umnojeniy = 1;
for(let i = 1; i <= a; i += 2) {
    kopaytma *= i;
}
console.log("Ko‘paytma:", kopaytma);

//5-mashq
for(let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//6-mashq
let str = "Hello World";
let harflarSoni = 0;

for(let i = 0; i < str.length; i++) {
    if(str[i] !== " ") harflarSoni++;
}
console.log("Harflar soni:", harflarSoni);

//7-mashq
let sta = "Hello World";
let teskar = "";

for(let i = str.length - 1; i >= 0; i--) {
    teskar += sta[i];
}
console.log("Teskari satr:", teskar);

//8-mashq
for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0) continue;
    console.log(i);
}

//9-mashq
let number = prompt("Son kiriting:");
console.log("Son uzunligi:", number.length);

//10-mashq
for(let i = 97; i <= 122; i++) { // ASCII kodlar 97 = a, 122 = z
    console.log(i - 96, String.fromCharCode(i));
}


//ADDITIONAL
//1-mashq
let i = Number(prompt("Birinchi son:"));
let b = Number(prompt("Ikkinchi son:"));
if((i / b) > 0) {
    console.log("Musbat");
} else {
    console.log("Manfiy");
}

//2-mashq
let s = Number(prompt("Son kiriting:"));
if(s > 100) {
    console.log("100 dan katta");
} else {
    console.log("100 dan kichik yoki teng");
}

//3-mashq
let kozYaxshi = true;
let guvohnoma = true;

if(kozYaxshi && guvohnoma) {
    console.log("Ishga qabul qilindingiz");
} else {
    console.log("Kira olmadingiz");
}

//4-mashq
let svetafor = "yashil";
let tratuardaOdamBor = true;

if(svetafor === "qizil") {
    console.log("To’xtang");
} else if(svetafor === "yashil" && tratuardaOdamBor) {
    console.log("Odamni o’tkazib keyin yuring");
} else if(svetafor === "yashil" && !tratuardaOdamBor) {
    console.log("Yuring");
}

//5-mashq
let ball = Number(prompt("Ballni kiriting:"));
if(ball < 60) {
    console.log("Yiqildingiz");
} else if(ball < 70) {
    console.log("Super kontrakt");
} else if(ball < 80) {
    console.log("Kontrakt");
} else if(ball <= 100) {
    console.log("Budjet");
}

