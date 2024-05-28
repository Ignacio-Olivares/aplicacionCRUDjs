//Crear la lista que gestionara las tareas
const taskList = [];


const ENABLE_BUTTON_STYLE= "";
const DISABLED_BUTTON_STYLE="";


//crear clase
class Task{
    constructor(name, descripction) {
        this.name = name;
        this.descripction = descripction;
        this.completed = false;
    }

    toggleCompletion(){
        this.completed = !this.completed;
    }
}

function addTask(e) {
    e.preventDefault()
    let name = document.getElementById("task_name").value;
    let descripction = document.getElementById("task_description").value;
    console.log(name, descripction);
    //crear objeto tarea
    const task= new Task(name,descripction);
    //agregar tarea a la lista
    taskList.push(task);
    alert("la tarea fue agregada con exito");
    console.log(taskList);
    showTasks();
}
const showTasks = () => {
    const tableTask = document.getElementById("table_task_body");
    //borrar contenido body
    tableTask.innerHTML = "";
    taskList.forEach((task,index) =>{
        const row= document.createElement("tr")
        row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.descripction}</td>
        <td> <a href="#" onclick="deleteTask(${index})" >eliminar</a> |
            <a href="#" onclick="" >editar</a> |
        </td>
        `;
        tableTask.appendChild(row);
    });
}

const deleteTask = (index) => {
    //validar que el indice es valido
    if (index >=0 && index < taskList.length){
        //eliminar tarea de la lista por indice
        taskList.splice(index,1);
        alert(`Eliminado`);
        showTasks();
    }
}

const editTask = (index) =>{
    //cambiar las acciones y estilos de los botones
    let AddTaskButton = document.getElementById("add_task_button");
    AddTaskButton.setAttribute("disabled","");
    let UpdateTaskButton =document.getElementById("update_task_button");
    UpdateTaskButton.removeAttribute("disabled");
    UpdateTaskButton.setAttribute("class",ENABLE_BUTTON_STYLE);
}

const updatetask = (index) =>{
    //Asignar los valores a los cuadros de texto y actualizarlos en los de la lista
    //cambiar el estilo de los botones y comportamiento de los botones
    //informar que todo fue exitoso
}