function searchProduct(){
    const input = document.getElementById('filter').value.toUpperCase();
    // console.log(input)
    // const cardContainer = document.getElementById('card-lists')
    // console.log(cardContainer)
    const cards = document.getElementsByClassName('cards')
    // console.log(cards)
  

    for(let i = 0; i< cards.length; i++){
        let title = cards[i].querySelector(".card-body h5.card-title")

        // console.log(title)
        if(title.innerText.toUpperCase().indexOf(input) > -1){
            cards[i].style.display = "";
        }else{
            cards[i].style.display = "none"
        }
    }
}
// const select = document.getElementsByClassName('.select')
// const selecT = document.querySelector('.select').value
// console.log(select)

// function filter(){
//     console.log(select)
//     console.log(selecT)
// }

// const todoList = document.querySelector('.todo-list');
// const filterOption = document.querySelector('.filter-todo')
// filterOption.addEventListener('click', filterTodo)
// function filterTodo(e) {
  
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){

//         switch (e.target.value){
//             case "Binoda":
//                 todo.style.display = "flex";
//                 break;
//                 case "Tashqarida" :
//                     if(todo.classList.contains("Tashqarida")){
//                         todo.style.display = "flex";
//                     } else{
//                         todo.style.display = "none";
//                     }
//         }
//     })
// }
// const filterOption = document.querySelector('.filterOption')

// filterOption.addEventListener('click', filterProduct)

// function filterProduct(){
//     const cards = document.querySelector('.filterOption')
//     // const input = document.getElementById('cars').value.toUpperCase();
//     console.log(filterOption)
//     // console.log(input)
   
//     // const cards = document.querySelector('.cards')
   
    
//     for(let i = 0; i< cards.length; i++){

//         let name = cards[i].querySelector(".bg-danger  p.joyi")

//         console.log(name)
//         if(name.innerText.toUpperCase().indexOf(input) > -1){
//             cards[i].style.display = "";
//         }else{
//             cards[i].style.display = "none"
//         }
    
// }
// }
const categoryTitle = document.querySelectorAll('.todo-list');
const allCategoryPosts = document.querySelectorAll('.card-lists');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')
filterOption.addEventListener('click',filterSelect)
console.log(categoryTitle)

function filterSelect (e){
    const todos = document.querySelectorAll('.todo-list');
    // console.log(todos)
    console.log(e.target.value);
    // todos.forEach(function(todo) {
    //     switch(e.target.value){
    //         // case "Tashqarida":
    //         //     todo.style.display = "flex";
    //         //     break;
    //             case "binoda":
    //                 if(todo.classList.contains("binoda")) {
    //                     todo.style.display = "flex";
    //                 } else{
    //                     todo.style.display = "none"
    //                 }
    //                 case "tashqarida":
    //                     if(!todo.classList.contains("binoda")){
    //                         todo.style.display = "flex"
    //                     }
    //     }
    // })
//     console.log(todos)
 }

// for(let i = 0; i < categoryTitle.length; i++){
//     categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
// }

// function filterPosts(item){
//     changeActivePosition(item);
//     for(let i = 0; i < allCategoryPosts.length; i++){
//         if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
//             allCategoryPosts[i].style.display = "block";
//         } else {
//             allCategoryPosts[i].style.display = "none";
//         }
//     }
// }

// function changeActivePosition(activeItem){
//     for(let i = 0; i < categoryTitle.length; i++){
//         categoryTitle[i].classList.remove('active');
//     }
//     activeItem.classList.add('active');
// };





// function Place() {
//     const joyi = document.getElementById('joyi').value
//     console.log("111")
// }

// Place()

