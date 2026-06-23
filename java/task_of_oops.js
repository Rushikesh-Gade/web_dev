class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
     work() {
    console.log(`${this.name} is working...`);
  }

  showDetails() {
    console.log(`id: ${this.id}, Name: ${this.name}`);
  }

}

class Developer extends Employee {
    constructor(id, name, Language) {
        super(id, name);
        this.Language = Language;
    }
     writeCode() {
        console.log(`${this.name} writes code in ${this.Language}`);
     }
      work() {
        console.log(`${this.name} is developing software using ${this.Language}`);
     }
}

class FrontendDeveloper extends Developer {
    constructor(id, name, language, framework) {
        super(id, name, language);
        this.framework = framework;
    }
    buildUI() {
        console.log(`${this.name} builds UI using ${this.framework}`);
    }
    work() {
        console.log(`${this.name} is designing frontend with ${this.framework}`);
    }
}

class Manager extends Employee {
    constructor(id, name, teamSize) {
        super(id, name);
        this.teamSize = teamSize;
    }
    conductMeeting() {
        console.log(`${this.name} is conducting a meeting with a team of ${this.teamSize} members.`);
    }
    work() {
        console.log(`${this.name} is managing a team of ${this.teamSize}`);
    }
}

const E = new Employee(111, "ram");
const D = new Developer(222, "shaym", "JavaScript");
const F = new FrontendDeveloper(333, "Rishi", "C++", "DSA");
const M = new Manager(444, "Rohit", 10);

E.work();            
E.showDetails();     

F.work();         
F.writeCode();    
F.buildUI();      

M.work();             
M.conductMeeting();