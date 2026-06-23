class employee {
    Properties(id, name) {
        this.id = id;
        this.name = name;
    }
     work() {
    console.log(`${this.name} is working...`);
  }

  showDetails() {
    console.log(`ID: ${this.id}, Name: ${this.name}`);
  }

}

class Developer extends employee {
    Properties(id, name, Language) {
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
    Properties(id, name, language, framework) {
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

class manager extends employee {
    Properties(id, name, teamSize) {
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

const employee = new employee(111, "ram");
const Developer = new Developer(222, "shaym", "JavaScript");
const FrontendDeveloper = new FrontendDeveloper(333, "Rishi", "C++", "DSA");
const manager = new manager(444, "Rohit", 10);

