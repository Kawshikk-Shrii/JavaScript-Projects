const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("add-task");
addBtn.addEventListener('click' , addTask);
taskInput.addEventListener('keypress',(e) =>{
  if(e.key === 'Enter') addTask();
});
function addTask(){
if(taskInput.value === "") return alert("Enter valid Input") ;
  addList(taskInput.value);
  taskInput.value ="";
}
function addList(task){
  const listElement = document.createElement("li");
  
  listElement.innerHTML = `<p>${task}</p><div class="edit"><div class="status">Pending</div><button class="done">Done</button><button class="remove">Remove</button></div>`;
  taskList.appendChild(listElement);
}
taskList.addEventListener('click',(e) =>{
  if(e.target.classList.contains('done')){
    e.target.innerText = e.target.innerText === 'Done' ? 'Undo' : 'Done';
    
    e.target.closest('li').div.status.classList.toggle("completed");
  }
  if(e.target.classList.contains('remove')){
    e.target.closest('li').remove();
  }
})