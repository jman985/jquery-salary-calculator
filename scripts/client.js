console.log('JS ready');

$(document).ready( onReady );

let employeeArray=[];

function onReady() {
    console.log( 'JQ ready' );

$( '#btn-submit' ).on( 'click', handleAddClick );

}

function handleAddClick( event ) {
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
};
