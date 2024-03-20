const inputbox=document.getElementById('input-box')
const listcontainer=document.getElementById('list-container')


function adtask(){

    if(inputbox.value ===''){
        alert('enter ypour box' )
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputbox.value
        listcontainer.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputbox.value=''
    savedata()
}
listcontainer.addEventListener('click',function(e){
if(e.target.tagName === 'LI'){
e.target.classList.toggle('chacked')
savedata()

}
else if(e.target.tagName=== 'SPAN'){
    e.target.parentElement.remove();
    savedata()
}

})
function savedata(){
    localStorage.setItem('data',listcontainer.innerHTML)
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem('data')
}
showtask()