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
    if (typeof data === 'object') {
        if (data.linethrough == "Yes") {
            liTag.classList.add("done")
        }
        liTag.innerHTML = `
    <p class="task">${data.Task}</p> <span class="close">&#10006</span>
    `;
    } else {
        liTag.innerHTML = `
        <p class="task">${data}</p> <span class="close">&#10006</span>
        `;
        saveToDo();
    }


    toDoBox.appendChild(liTag);
    liTag.addEventListener('click', function () {
        liTag.classList.toggle('done');
        if (liTag.classList.contains("done")) {
            // liTag.classList.add('done');
            var getTask = liTag.firstElementChild.innerHTML
            var getdata = JSON.parse(localStorage.getItem("pTag"));
            getdata.forEach(function (ele) {
                if (ele.Task == getTask) {
                    ele.linethrough = "Yes"
                }
            })
            localStorage.setItem("pTag", JSON.stringify(getdata));
        } else {
            // liTag.classList.remove('done');
            var getTask = liTag.firstElementChild.innerHTML
            var getdata = JSON.parse(localStorage.getItem("pTag"));
            getdata.forEach(function (ele) {
                if (ele.Task == getTask) {
                    ele.linethrough = "No"
                }
            })
            localStorage.setItem("pTag", JSON.stringify(getdata));
        }
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
        data.push({ Task: tasktext.innerText, linethrough: "No" });
    })
    // console.log(tasktext.innerText);
    console.log(data)
    // localStorage.setItem("pTag" , JSON.stringify(data) )
    localStorage.setItem("pTag", JSON.stringify(data));
}


(
    function () {
            const lsTag = JSON.parse(localStorage.getItem("pTag"));
        lsTag.forEach((ele) => {
            addToDo(ele)
        })
    }
)();