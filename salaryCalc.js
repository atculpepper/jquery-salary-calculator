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
  render();
}
//make everything show up in the table on the DOM
function render() {
  $(".js-table-body").empty();
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    //TODO: make this add employeeData to DOM
    const individualEmployee = employees[i];

    $(".js-table-body").append(`
  <tr>
  <td>${individualEmployee.firstName}</td>
  <td>${individualEmployee.lastName}</td>
  <td>${individualEmployee.ID}</td>
  <td>${individualEmployee.Title}</td>
  <td>$${individualEmployee.AnnualSalary}</td>
  </tr>`);
  }
  //add all annualSalaries
}

//function render() {}

// function clickEmployeeData() {
//   console.log("You clicked?");
// }
