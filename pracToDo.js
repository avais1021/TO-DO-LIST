
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
    })
    
}

const saveToDo = ()=>{
    const notes = document.querySelectorAll('.notes');
    const data = [];
    notes.forEach((notesVal)=>{
        console.log(notesVal.innerText);
        data.push(notesVal.innerText)
    })
    console.log(data);
    localStorage.setItem('notes' , JSON.stringify(data));
}   

(
    function(){
        const localData = JSON.parse(localStorage.getItem('notes'));
        localData.forEach((ldata)=>{
            addToDo(ldata)
            console.log(ldata)
        })
    }
)()

// ------------------------------------------new-practice----------------------------------------------------------------------------


const area = document.querySelector('.area');


area.addEventListener('keyup' ,  function(){
   
    saveSample();
})

const saveSample = ()=>{
    const data = [];
    data.push(area.value)
    // console.log(area.value);
    localStorage.setItem('area' , JSON.stringify(data))
    console.log(data)
}

(
    function(){
        const localvalarea = JSON.parse(localStorage.getItem('area'))
        area.value = localvalarea;
    }
)()

