document.addEventListener("DOMContentLoaded", function (e){
    console.log(e)
});

function handleClickEvent(event){
    let element = document.getElementsByClassName("top-header-container")

    element[0].style.backgroundImage =
        `linear-gradient(rgb(0, 0, 0.527), rgba(0, 0, 0, 0.5)),
        url('https://media.istockphoto.com/photos/golden-sunset-picture-id1326868358?k=20&m=1326868358&s=612x612&w=0&h=SPPzj-0uUL9l5px3lTiF6acVx1ejFVaqmy6uEKCkYpA=')`
}

function showModal(){
    let containerElement = document.getElementsByClassName("container")
    let modalContainer = document.createElement("container")

    let closeButton = document.createElement("button")
    closeButton.innerText = "X"
    closeButton.style.border = "1px solid black"
    closeButton.style.outline = "unset"
    closeButton.style.borderRadius = "50%"
    closeButton.style.padding = "2% 3.5%"
    closeButton.style.backgroundColor = "white"
    closeButton.style.float = "right"
    closeButton.style.fontWeight = "bold"

    closeButton.addEventListener("click", function (e){
        modalContainer.style.display = "none"
    })

    modalContainer.appendChild(closeButton)

    modalContainer.className = "show_modal"
    containerElement[0].appendChild(modalContainer)

}

function handleInputChange(event){
    console.log(event)
}


// let pseudoDocument = {
//     events: {},
//     addEventListener: function (event, aFunction){
//         if(event === 'DOMContentLoaded'){
//             aFunction(this.events)
//         }
//     },
// }
//
// pseudoDocument.addEventListener('DOMContentLoaded', function (event){console.log(event)})

