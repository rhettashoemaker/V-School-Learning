const employees = [];

function Employee (name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);

    }   
}

const jimHalpert = new Employee("Jim Halpert", "Paper Salesman", "$60,000")
//console.log("Name: " + jimHalpert.name + ", Job Title: " + jimHalpert.jobTitle + ", Salary: " + jimHalpert.salary + ", Status: " + jimHalpert.status);
employees.push(jimHalpert);

const dwightSchrute = new Employee("Dwight Schrute", "Paper Salesman", "$70,000");
//console.log("Name: " + dwightSchrute.name + ", Job Title: " + dwightSchrute.jobTitle + ", Salary: " + dwightSchrute.salary + ", Status: " + dwightSchrute.status);
employees.push(dwightSchrute);

const pamBeesly = new Employee("Pam Beesly", "Receptionist", "$50,000", "Part Time");
//console.log("Name: " + pamBeesly.name + ", Job Title: " + pamBeesly.jobTitle + ", Salary: " + pamBeesly.salary + ", Status: " + pamBeesly.status);
employees.push(pamBeesly);

console.log(employees);