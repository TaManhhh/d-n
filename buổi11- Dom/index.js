const btnAdd =document.getElementById("add btn")
const btnRemoveAll = document.getElementById("remove-btn")
const ul =document.getElementById("list-wrapper")
let index = 0;
function add(){
    index ++;
    const liTag =document.createElement("span")
    const liContent = document.createTextNode("Hello World"+ index)
    liTag.appendChild(liContent)
    //btn delete
    const btnRemove = document.createElement("button")
    const btnRemoveContent = document.createTextNode("Remove")
    // line wrapper
    const div = document.createElement ("li")
    btnRemove.onclick= function(){
        btnRemove.parentNode.remove()
    }
    btnRemove.appendChild(btnRemoveContent)
    div.appendChild(liTag)
    div.appendChild(btnRemove)
    FileList.appendChild(div)
}
function removeAll(){
    list.innerHTML-""
}
