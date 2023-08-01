// --------------- OOP ---------------

// Constructing a class : constructor & methods
class Developer{
    constructor(name = "Anonymous Developer", salary=80000, yearsOfExperience=0){
        this.name=name;
        this.salary=salary;
        this.yearsOfExperience = yearsOfExperience;
        this.languages = [];
        this.braincell = 100;
    }

    displayInfo(){ // function inside a class: method
        console.log(`-------- Developer: ${this.name} ---------`);
        console.log(`Salary: ${this.salary}`);
        console.log(`yearsOfExperience: ${this.yearsOfExperience}`);
        console.log(`languages: ${this.languages}`);
        console.log(`braincell: ${this.braincell}`);
    }

    debug(){
        console.log(`${this.name} is debugging...... neverending......`);
        this.braincell-=1;
        this.salary++;
        return this; // to return the instance itself (have all the methods in Developer class)
    }
}

// inheriting a class 
class SeniorDeveloper extends Developer{
    constructor(){
        super("Anonymous senior developer", 150000, 5);
        this.hasLife = true;
    }

    displayInfo(){
        super.displayInfo();
        console.log(`Life: ${this.hasLife}`);
    }

    debug(){
        super.debug();
        super.debug();
        super.debug();
        return this;
    }
}

// test case
const dev1 = new Developer();
dev1.displayInfo();

const dev2 = new Developer("Pepper", 10000000);
dev2.displayInfo();
dev2.debug().debug();
dev2.displayInfo();

const dev3 = new SeniorDeveloper();
dev3.debug().displayInfo();
// console.log(dev3.hasLife);