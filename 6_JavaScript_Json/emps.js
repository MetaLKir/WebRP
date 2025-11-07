class Employee {
    #id;
    #name;
    #title;
    #salary;
    #titles = ['programmer', 'devops', 'manager', 'engineer', 'cleaner'];

    constructor(id, name, title, salary) {
        this.#id = id;
        this.setName(name);
        this.setTitle(title);
        this.setSalary(salary);

    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getTitle() {
        return this.#title;
    }

    getSalary() {
        return this.#salary;
    }

    setName(name) {
        if (name && typeof name === 'string') {
            this.#name = name;
        }
    }

    setTitle(title) {
        if (title && this.#titles.includes(title)) {
            this.#title = title;
        }
    }

    setSalary(salary) {
        if (typeof salary === 'number' && salary > 6000) {
            this.#salary = salary;
        }
    }

    toString() {
        return `Employee { id: ${this.#id}, name: ${this.#title}, salary: ${this.#salary}`;
    }
}

class Company {
    #employees = [];

    hireEmployee(employee) {
        if (!this.#employees.some(function (e) {
            return e.getId() === employee.id;
        }))
            this.#employees.push(employee);
    }

    fireEmployee(id) {
        let index = this.#employees.findIndex(e => e.getId() === id);
        return index > -1 ? this.#employees.splice(index, 1) : null;
    }

    getAllEmployees() {
        return [...this.#employees];
    }

    getEmployee(id) {
        return this.#employees.find(e => e.getId() === id);
    }

    getTotalSalary() {
        return this.#employees.reduce((sum, e) => sum + e.getSalary(), 0);
    }

    getCompanySize() {
        return this.#employees.length;
    }

    getEmployeeMinSalary() {
        let minSalary = Math.min(...this.#employees.map(
            employee => employee.getSalary()
        ));
        return this.#employees.filter(e => e.getSalary() === minSalary);
    }

    // getEmployeeMinSalary(){
    //     let minSalary = Math.min(...this.#employees.map(
    //         function (employee) {return employee.getSalary();}
    //     ));
    // return this.#employees.filter(e=>e.getSalary()===minSalary);
    // }

    getEmployeeWithSalaryGreaterThan(salary) {
        return this.#employees.filter(e => e.getSalary() > salary);
    }
}

let company = new Company();
company.hireEmployee(new Employee(1, "name1", "devops", 40_000));
company.hireEmployee(new Employee(2, "name2", "engineer", 20_000));
company.hireEmployee(new Employee(3, "name3", "cleaner", 8_000));
company.hireEmployee(new Employee(4, "name4", "manager", 30_000));
company.hireEmployee(new Employee(5, "name5", "programmer", 35_000));

console.log(company.getAllEmployees().map(e => e.toString()));
console.log("Company size: ", company.getCompanySize());
console.log("Total salary: ", company.getTotalSalary());
console.log(company.getEmployeeMinSalary().map(e => e.toString()));
console.log(company.getEmployeeWithSalaryGreaterThan(25_000).map(e => e.toString()));
console.log(company.fireEmployee(1).map(e => e.toString()));
console.log("Company size: ", company.getCompanySize());