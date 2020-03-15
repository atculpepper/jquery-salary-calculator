$(document).ready(init);

const employees = [];

//create the events to listen for
function init() {
  console.log("Welcome to the salaryCalc!");
  $(".js-inputEmployeeData").on("submit", submitEmployeeData);
  //   $(".js-inputEmployeeData").on("click", clickEmployeeData);
}

function submitEmployeeData(event) {
  console.log("Submit: " + event);
  event.preventDefault();
  console.log("This does not reload!");
  const newEmployee = {
    firstName: $(".js-firstNameInput").val(),
    lastName: $(".js-lastNameInput").val(),
    ID: parseFloat($(".js-idInput").val()),
    Title: $(".js-titleInput").val(),
    AnnualSalary: parseFloat($(".js-annualSalaryInput").val())
  };
  employees.push(newEmployee);
  console.log("Employees in array: ", employees);
}

//function render() {}

// function clickEmployeeData() {
//   console.log("You clicked?");
// }
