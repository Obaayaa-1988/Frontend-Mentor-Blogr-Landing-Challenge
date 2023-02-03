// alert("hello world")
/**adding script to dropdown menu and svg icon */

const drop = document.getElementById("main-drop")
const content = document.getElementById("content")

// drop.addEventListener('click', () => {
//     content.classList.toggle('show')

// })
drop.addEventListener('click', () => {
if(content.classList.contains("show")){
    content.classList.remove("show")

}else{
    content.classList.add("show")
}

})


