const itemInput = document.querySelector('#itemInput');
const toDoBox = document.querySelector('#to_do_box');

itemInput.addEventListener("keyup", function (event) {
    // console.log(event);
    if (event.key == 'Enter') {
        // console.log(itemInput.value);
        addToDo(itemInput.value);
        itemInput.value = '';
        saveToDo();
    }
})

const addToDo = (data) => {
    const liTag = document.createElement('li');
    liTag.innerHTML = `
    <p class="task">${data}</p> <span class="close">&#10006</span>
    `;
    toDoBox.appendChild(liTag);
    saveToDo();
    liTag.addEventListener('click', function () {
        liTag.classList.toggle('done');
    
    })

    liTag.querySelector('.close').addEventListener('click', function () {
        liTag.remove();
        saveToDo();
    })





    // console.log(liTag);

}

const saveToDo = () => {
    pTag = document.querySelectorAll('.task');
    const data = [];
    pTag.forEach(function (tasktext) {
        data.push(tasktext.innerText);
    })
    // console.log(tasktext.innerText);
    console.log(data)
    // localStorage.setItem("pTag" , JSON.stringify(data) )
    localStorage.setItem("pTag", JSON.stringify(data));
}



// document.querySelectorAll('.close').forEach((list)=>{
//     console.log(list)
//    })

(
    function () {
        const lsTag = JSON.parse(localStorage.getItem("pTag"));
        lsTag.forEach((ele) => {
            addToDo(ele)
        })
    }
)();