

const edit_task_title=document.getElementById('edit-task-title')
const edit_task_id=document.getElementById('edit-task-id')
const edit_task_completed=document.getElementById('task-completed-checkbox')
const loading_tasks_heading=document.getElementById('loading-tasks-heading')


let input_task=document.getElementById("input-task")
const add_btn=document.getElementById("task-add-btn")


//To add tasks to the list
add_btn.addEventListener("click",()=>{
    addTask()
    input_task.value="";
})

//updating the specific task details and closing the edit pop up
let edit_done_button=document.querySelector(".edit-done-button")
let edit_background=document.querySelector(".edit-background")

edit_done_button.addEventListener("click",async (event)=>{
    event.preventDefault()
    //getting values
    const name=edit_task_title.value
    const taskID=edit_task_id.innerText
    const completed=edit_task_completed.checked
    //updating
    await axios.put(`/api/v1/tasks/${taskID}`,{name,completed})
    //closing popup
    edit_background.style.display="none";

    showTasks()

})



//edit window appear when clicked on edit button
let edit_buttons=document.querySelectorAll(".edit-btn")
let delete_buttons=document.querySelectorAll(".delete-btn")

document.addEventListener("click",async (event)=>{
    //what happens when clicked on edit button
    if(event.target.closest('button.edit-btn')){
        
        edit_background.style.display="flex";
        const edit_btn=event.target.closest('button.edit-btn')
        //getting the task id from the dataset of the button
        const taskID=edit_btn.dataset.id
        //gets data of specific task and 
        const {data:{task:{name,completed}}} = await axios.get(`/api/v1/tasks/${taskID}`)
        

        //puts the respective values on the edit popup
        edit_task_title.value=name;
        edit_task_id.innerText=taskID;
        edit_task_completed.checked=completed;

    }
    //what happens when clicked on delete button
    if(event.target.closest('button.delete-btn')){
        const delete_btn=event.target.closest('button.delete-btn');
        //gets the id of the respective task
        const taskID=delete_btn.dataset.id;
        //and deletes it from the database
        await axios.delete(`/api/v1/tasks/${taskID}`);
        await showTasks();
    }
})




//function to add a task
async function addTask(){
    //checking if input is empty or not
    let empty_error=document.getElementById("empty-error")
    if(input_task.value===""){
        
        empty_error.style.display="block";
        return;
    }
    empty_error.style.display="none";

    const input_task_element=document.getElementById('input-task')
    //gets value from the input
    const name=input_task_element.value;
    //posts it to the database
    await axios.post('/api/v1/tasks',{name,completed:false})
    await showTasks();
}

//function to display all the tasks
async function showTasks(){
    loading_tasks_heading.style.display="block"
    //get the tasks from the database
    const {data:{tasks}}=await axios.get("/api/v1/tasks")
    
    const  allTasks= tasks.map(task=>{
        const {_id,name,completed}=task;
        //creates html for every single task
        const taskDOM=`<div class="task">
                    <div class="task-title">
                        <h4 class="title-heading ${completed?'task-completed':''}">${name}</h4>
                    </div>
                    
                    <div class="task-btns">
                        <button class="edit-btn" data-id="${_id}"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="delete-btn" data-id="${_id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    
                </div>`
                return taskDOM
        
    })
    .join('')//joins html of every single task in the list
    let task_list=document.querySelector(".task-list")
    loading_tasks_heading.style.display="none";
    //and adds the html to the task list
    task_list.innerHTML=allTasks
}

showTasks();