class Car {
    constructor(carName, carYear, transmission) {
        this.carName = carName;
        this.carYear = carYear;
        this.transmission = transmission;
    }

    getCarInfo() {
        return `
Nomi = ${this.carName}
Yili = ${this.carYear}
Korobka = ${this.transmission}
`;
    }
}


const kia = new Car("Kia K5", 2022, "Avtomat");
const chevrolet = new Car("Chevrolet Malibu", 2021, "Avtomat");
const hyundai = new Car("Hyundai Sonata", 2023, "Avtomat");
const zeekr = new Car("Zeekr 001", 2024, "Avtomat");
const byd = new Car("BYD Seal", 2023, "Avtomat");


console.log(kia.getCarInfo());
console.log(chevrolet.getCarInfo());
console.log(hyundai.getCarInfo());
console.log(zeekr.getCarInfo());
console.log(byd.getCarInfo());
