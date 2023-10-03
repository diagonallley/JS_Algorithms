class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `This is your full name: ${this.firstName} ${this.lastName}`;
    }


    static enrollStu() {
        return "";
    }

}

let firstStudent = new Student("Eric", "Ipp");

console.log(firstStudent.fullName())

Student.enrollStu(); // calling a class method 