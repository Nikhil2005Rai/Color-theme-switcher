const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")



buttons.forEach((button) =>{
    // console.log(button)
    button.addEventListener('click', function(event){
        // console.log(event)
        // console.log(event.target)
        const color = button.id
        // console.log(color)
        body.style.backgroundColor = `${color}`
    })
})



