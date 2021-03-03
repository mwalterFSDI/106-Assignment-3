var isItImportant=false;
var isDetailsVisible=true;

function toggleDetailsVisability(){
    // hide/show the capture
    // $("capture").hide();
    // $("capture").show();
    if(isDetailsVisible){
        $("#capture").hide();
        isDetailsVisible=false;
    }
    else{
        $("#capture").show();
        isDetailsVisible=true;
    }

}

function toggleimportant(){
    console.log("Icon clicked");

    if(!isItImportant){
        $("#iImportant").removeClass('far').addClass('fas');
        isItImportant=true;
    }else{
        isItImportant=false;
        $("#iImportant").removeClass('fas').addClass('far');
    }
}

function saveTask(){
    console.log("Save clicked");

    var title= $("#txtTitle").val();
    var date= $("#txtDate").val();
    var status= $("#selStatus").val();
    var location= $("#txtLocation").val();
    var color= $("#txtColor").val();
    var desc= $("#txtDesc").val();

    //console.log(title, date, status, location, color, desc);//

    var myTask = new Task(0, title, isItImportant, date, status, location, color, desc);

    console.log(myTask);
    // save to server

    // display task
    displayTask(myTask);
}

function displayTask(task) {
    // create the syntax
    var syntax=
    `<div>
        <h4>${task.title}</h4>
        <p>${task.description}</p>
        <lable>${task.dueDate}</lable>
        <i class="far fa-star"</i>
        <i class="fas fa-trash-alt"></i>
    </div>`;
    
    // append the syntax to existing html
    $("#tasks-list").append(syntax);
}

/** Homework class 2
   * get the values from the input fields and put them into variables
   */

function init(){
    console.log("Task Manager");

    $('#txtColor').spectrum({
        type: "component"
      });

    //Events
    $("#iImportant").click(toggleimportant);
    $("#btnSave").click(saveTask);
    $("#btnDetails").click(toggleDetailsVisability);
}


window.onload=init;

/*
Task
- Id
- Title
- Date
- Important
- Description
- Status
- Location
- Color
*/
