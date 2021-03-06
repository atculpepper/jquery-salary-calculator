$(document).ready(init);

const employees = [];

//create the events to listen for
function init() {
  console.log("Welcome to the salaryCalc!");
  $(".js-inputEmployeeData").on("submit", submitEmployeeData);
  $(".js-table-body").on("click", ".js-btn-delete", deleteEmployee);
  //   $(".js-inputEmployeeData").on("click", clickEmployeeData);
}

function deleteEmployee(event) {
  console.log("I am trying to delete", event);
  console.log("I am trying to delete", this);

  const employeeIndex = $(this).data("index");
  console.log("testing logging out index:", employeeIndex);

  //create a function to adjust monthlySalary since I didn't remove it from array

  employees.splice(employeeIndex, 1);

  $(".js-totalMonthly").css("background-color", "white");

  render();
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
    annualSalary: parseFloat($(".js-annualSalaryInput").val())
  };
  employees.push(newEmployee);
  console.log("Employees in array: ", employees);
  //clear out the values
  $(".js-firstNameInput").val("");
  $(".js-lastNameInput").val("");
  $(".js-idInput").val("");
  $(".js-titleInput").val("");
  $(".js-annualSalaryInput").val("");
  render();
}
//make everything show up in the table on the DOM
function render() {
  $(".js-table-body").empty();
  let totalSalary = 0;
  let monthlySalary = 0;

  for (let i = 0; i < employees.length; i++) {
    //TODO: make this add employeeData to DOM
    const individualEmployee = employees[i];
    monthlySalary = (totalSalary += individualEmployee.annualSalary) / 12;
    if (monthlySalary > 20000.0) {
      $(".js-totalMonthly").css("background-color", "red");
    }

    $(".js-table-body").append(`
  <tr>
  <td>${individualEmployee.firstName}</td>
  <td>${individualEmployee.lastName}</td>
  <td>${individualEmployee.ID}</td>
  <td>${individualEmployee.Title}</td>
  <td>$${individualEmployee.annualSalary}</td>
  <td><button class = "js-btn-delete"data-index =${i} ">Delete</button></td>
  </tr>`);
  }
  //add all annualSalaries

  $(".js-totalMonthly").text(Math.floor(monthlySalary * 100) / 100);
}

//function render() {}

// function clickEmployeeData() {
//   console.log("You clicked?");
// }
