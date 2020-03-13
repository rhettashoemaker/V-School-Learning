const employees = [];

function Employee (name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
    }   
    return Employee
}

employees.push(new Employee("Jim Halpert", "Paper Salesman", "$60,000"));
employees.push(new Employee("Dwight Schrute", "Paper Salesman", "$70,000"));
employees.push(new Employee("Pam Beesly", "Receptionist", "$50,000", "Part Time"));

console.log(Employee.printEmployeeForm);