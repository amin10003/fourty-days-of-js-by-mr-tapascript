console.log('Project: TODO!')




function addtask(){

    console.log('click To Add');


    const taskInput = document.getElementById('taskInput')
    const taskList = document.getElementById('taskList')

    const task = taskInput.value;
    

    if(task.trim() === "") return;

    const li = document.createElement('li')

    li.innerText = task


    
    const completeBtn = document.createElement('button')

    completeBtn.innerText = "✅"

    completeBtn.classList.add('layoutBtn')

     completeBtn.onclick = function(){
        li.classList.toggle('completed')
    }




    li.appendChild(completeBtn)

    const deletebtn = document.createElement('button')

   
    deletebtn.classList.add('btnhover')

    // console.log(deletebtn.className)


    deletebtn.onclick = function(){
        li.remove()
    }


    deletebtn.innerText = "❌"

    // deletebtn.style.margin = "4px"

    li.appendChild(deletebtn)




    taskList.appendChild(li)


    taskInput.value = '';

    


}


function filterTask(){
     const searchTask = document.getElementById('searchinput')

     const checkTask = searchTask.value;
     const items = document.querySelectorAll("#taskList li");

     items.forEach((el) => {
       el.style.display = el.innerText.toLowerCase().includes(checkTask.toLowerCase()) ? "block" : "none"
     })


     
}
