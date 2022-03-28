"use strict";

const frm = document.querySelector(".frm");
const listContainer = document.querySelector(".lists");
const todo = document.querySelector(".add-todo");
const todoText = document.querySelector(".task-text");
let todoBlock = document.querySelectorAll('.list');
const check = document.querySelector(".check-icon");
const cross = document.querySelector(".cross-icon");
const all = document.querySelector(".all");
const completed = document.querySelector(".completed");
const incompleted = document.querySelector(".incompleted");
const restart = document.querySelector(".restart");
let done = document.querySelectorAll('.done');
const pro = document.querySelector('.pro');

let x =0;

const animate = function(){
  // pro.setAttribute(innerWidth,`${}`)
  pro.style.width = (done.length/x)*100 + '%';
}

frm.addEventListener("submit", function (e) {
  e.preventDefault();
  if(!todo.value) return;
  x++;
  const html = 
  `<div class="list l${x}">
    <p class="task-text tt${x}">${todo.value}</p>
    <div class="list-icons">
      <img class="check-icon hidden check${x}" src="check.svg" alt="task done" />
      <img class="cross-icon cross${x}" src="cross.svg" alt="task incomplete" />
    </div>
  </div>`;
  listContainer.insertAdjacentHTML('afterbegin',html);
  todoBlock = document.querySelectorAll('.list');

  todo.value = "";
  animate();
});

// todoBlock.forEach(function(block,i){
//   block.childNodes[1].addEventListener('click',function(){
//     document.querySelector(`.tt${todoBlock.length - i}`).classList.toggle('done');
//     document.querySelector(`.check${todoBlock.length - i}`).classList.toggle('hidden');
//     document.querySelector(`.cross${todoBlock.length - i}`).classList.toggle('hidden');
//   })
//   block.childNodes[3].addEventListener('click',function(){
//     block.remove();
//   })
// })

listContainer.addEventListener('click',function(e){
  // console.log(e.target);
  if(e.target.classList.contains('task-text')){
    let y = e.target.classList[1].slice(-1);
    e.target.classList.toggle('done');
    // check.classList.toggle('hidden');
    document.querySelector(`.check${y}`).classList.toggle('hidden');
    // cross.classList.toggle('hidden');
    document.querySelector(`.cross${y}`).classList.toggle('hidden');
    animate();
  }
  if(e.target.classList.contains('check-icon')||e.target.classList.contains('cross-icon')){
    let y = e.target.classList[1].slice(-1);
    // console.log(y);
    // document.querySelector(`.l${y}`).classList.add('hidden');
    todoBlock[todoBlock.length-y].remove();
    x--;
  }
  todoBlock = document.querySelectorAll('.list');
  done = document.querySelectorAll('.done');
  animate();

})

completed.addEventListener('click',function(e){
  e.preventDefault();
  // todoBlock = "";
  // todoBlock = [];
  // done.forEach(function(d,i){
  //   todoBlock.push(d.parentElement);
  // })
  todoBlock.forEach(function(block,i){
    if(!block.children[0].classList.contains('done')){
      block.classList.add('hidden');
    }
    else{
      block.classList.remove('hidden');
    }
  })
  todoBlock = document.querySelectorAll('.list');

})

incompleted.addEventListener('click',function(e){
  e.preventDefault();
  // todoBlock = "";
  // todoBlock = [];
  // done.forEach(function(d,i){
  //   todoBlock.push(d.parentElement);
  // })
  todoBlock.forEach(function(block,i){
    if(block.children[0].classList.contains('done')){
      block.classList.add('hidden');
    }
    else{
      block.classList.remove('hidden');
    }
  })
  todoBlock = document.querySelectorAll('.list');

})
restart.addEventListener('click',function(e){
  e.preventDefault();
  todoBlock.forEach(bl => bl?.remove())
  todoBlock = document.querySelectorAll('.list');
  x=0;
  pro.style.width = '0%';

})

all.addEventListener('click',function(e){
  e.preventDefault();
  todoBlock.forEach(block=>block.classList.remove('hidden'))
  todoBlock = document.querySelectorAll('.list');
})

