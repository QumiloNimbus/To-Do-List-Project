// const { createElement } = require("react")

let input_task=document.getElementById("input-task")
const add_btn=document.getElementById("task-add-btn")
add_btn.addEventListener("click",()=>{
    addTask()
    input_task.value="";
})

function addTask(){
    let task_list=document.querySelector(".task-list")
    console.log("clicked")
    let task=document.createElement("div")
    let task_title=document.createElement("div");
    let task_btns=document.createElement("div");

    task.className="task";
    task_title.className="task-title"
    task_btns.className="task-btns"
    

    let title=document.createElement("h4")
    let edit_btn=document.createElement("button");
    let delete_btn=document.createElement("button");

    title.innerText=input_task.value;

    edit_btn.className="edit-btn";
    delete_btn.className="delete-btn";

    let edit_icon=document.createElement("i")
    let delete_icon=document.createElement("i")

    edit_icon.className="fa-solid fa-pen-to-square";
    delete_icon.className="fa-solid fa-trash";

    edit_btn.appendChild(edit_icon)
    delete_btn.appendChild(delete_icon)

    task_btns.append(edit_btn,delete_btn)
    task_title.appendChild(title)
    // task_title.appendChild(task_title)

    task.append(task_title,task_btns)

    task_list.appendChild(task)
}
//enter task
//when click add button get input value
//take value and add it to the list of tasks