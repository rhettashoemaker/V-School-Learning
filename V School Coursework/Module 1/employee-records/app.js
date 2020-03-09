const employees = [];

function Employee (name, jobTitle, salary, status) {
    this.name = document.forms.elements("name").value;
    this.jobTitle = document.getElementById("jobTitle").value;
    this.salary = document.getElementById("salary").value;
    this.status = document.getElementById("status").value;      
}

var jimHalpert = new Employee("Jim Halpert", "Paper Salesman", "$60,000", "Full Time");
var dwightSchrute = new Employee("Dwight Schrute", "Paper Salesman", "$70,000", "Full Time");
var pamBeesly = new Employee("Pam Beesly", "Receptionist", "$50,000", "Full Time")

submitButton.onclick = function() {
    employees.push("new Employee")
    for (let i = 0; i < employees.lengthl; i++)
    console.log(employees)
    console.log("Name: " + Employee[i].name + ", Job Title: " + Employee[i].jobTitle + ", Salary: " + Employee[i].salary + ", Status: " + Employee[i].status);
}