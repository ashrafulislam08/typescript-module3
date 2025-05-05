// oop - inheritance

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfHours: number) {
        console.log(`${this.name} will sleep for ${numberOfHours} hours`)
    }
}


class Student extends Parent {

    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}
class Teacher extends Parent {
    
    destination: string;

    constructor(name: string, age: number, address: string, destination: string) {
        super(name, age, address)
        this.destination = destination;
    }

    takeClass(numOfClass: number) {
        console.log(`${this.name} will take ${numOfClass} classes`)
    }
}


const student1 = new Student("Ashraufl", 32, "Andargalli")
student1.getSleep(12)
console.log(student1)

const teacher1 = new Teacher("Abdul Salam", 35, "Narsingdi", "English")
teacher1.takeClass(5)
const teacher2 = new Teacher("HM Nayem", 35, "Narsingdi", "Professor")
teacher2.takeClass(5)
teacher2.getSleep(7)


