// alert("hello world")
/**adding script to dropdown menu and svg icon */

const drop = document.getElementById("main-drop")
const content = document.getElementById("content")

drop.addEventListener('click', () => {
    if(drop.style.display === 'show'){
        drop.style.display = 'block'
    } else {
        drop.style.display = 'show'
    }

})

// drop.addEventListener('click', () => {
// if(content.classList.contains("show")){
//     content.classList.remove("show")
        // content.classList.toggle('show')


// }else{
//     content.classList.add("show")
// }

// })


