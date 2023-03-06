
const inputnotes = document.querySelector('.inputnotes');
const orderList = document.querySelector('.orderList');

inputnotes.addEventListener('keyup' , function(event){
    if(event.key == 'Enter') {
        addToDo(inputnotes.value);
        inputnotes.value = '';
        saveToDo();
    }
})

const addToDo = (inputData)=> {
   const liTag = document.createElement('li');
    liTag.innerHTML=   `
        <p class='notes'>${inputData}</p> <span class='close'>&#10006</span>
    `
    orderList.appendChild(liTag);
    console.log(liTag);

    liTag.addEventListener("click" , function(){
        liTag.classList.toggle('done');
    })

    liTag.querySelector('.close').addEventListener('click' , function(){
        liTag.remove();
        saveToDo()
    })
    
}

const saveToDo = () =>{
        const notes = document.querySelectorAll('.notes');
        const data = [];
        notes.forEach((val)=>{
            data.push(val.innerText)
            // console.log(val.innerText)
        })
        // localStorage.setItem('notes' , JSON.stringify(data))
        localStorage.setItem("notes", JSON.stringify(data));
        console.log(data); 
}

(
    function(){
        const localData = JSON.parse(localStorage.getItem('notes'));
        localData.forEach((ldata)=>{
            addToDo(ldata);
        })
    }
)()



