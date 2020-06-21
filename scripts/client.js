console.log('JS ready');

$(document).ready( onReady );

let employeeArray=[];

function onReady() {
    console.log( 'JQ ready' );

    $( '#btn-submit' ).on( 'click', handleAddClick );

    $('#out-employees').on('click','.btn-delete',deleteEmployee)
}

function handleAddClick(event) {
    console.log( 'Add button was clicked with the event:', event );
  
    event.preventDefault();

    let firstName=$('#in-firstName').val();
    let lastName=$('#in-lastName').val();
    let id=$('#in-id').val();
    let title=$('#in-title').val();
    let salary=$('#in-salary').val();

    addEmployee(firstName,lastName,id,title,salary);
};

function addEmployee(firstName,lastName,id,title,salary){
    let object = {firstName,lastName,id,title,salary}

    employeeArray.push(object);

    $('#in-firstName').val('');
    $('#in-lastName').val('');
    $('#in-id').val('');
    $('#in-title').val('');
    $('#in-salary').val('');

    displayEmployee(employeeArray);
};

function displayEmployee(employeesToDisplay){
    $('#out-employees').empty();

    for ( let employee of employeesToDisplay ) {
        let p = `<p>
                    First Name: ${employee.firstName} &nbsp;
                    Last Name: ${employee.lastName} &nbsp;
                    ID: ${employee.id} &nbsp;
                    Title: ${employee.title} &nbsp;
                    Annual Salary: $${employee.salary} 

                    <button class="btn-delete">Delete</button>
                 </p>`;
        $('#out-employees').append(p);
      }
      calculateMonthlySalary();
}

function deleteEmployee(event){
    console.log('Delete clicked');
    event.preventDefault();

    let container = $(this).parent();

    employeeArray.splice(container.data('deleteid'), 1); 
     $(this).closest('p').remove();
    
     calculateMonthlySalary();
}


function calculateMonthlySalary() {
    monthlySalary = 0;
    let salaryTotal = 0;

    for (let i = 0; i < employeeArray.length; i++) {
        let employee = employeeArray[i];
        salaryTotal += parseInt(employee.salary);
    }

monthlySalary = salaryTotal/12;
    monthlySalary = salaryTotal/12;
    $('#monthly-salary').empty();
    $('#monthly-salary').append('<h2>Monthly Salary: $' + monthlySalary.toFixed(2) + '</h2>');
    if(monthlySalary > 20000) {
        $('#monthly-salary').append('<h2 id="warning">WARNING<h2>');
    }

}