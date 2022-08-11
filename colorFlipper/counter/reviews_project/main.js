const reviews=[
   { 
       id: 1,
    name: "susan smith",
    job: "web-developer",
    img: "images.png",
    text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi, incidunt quidem odit commodi eaque dicta facilis ad dolore, iste nisi? Ab dolorem, aliquid odit debitis molestiae cum porro perferendis."
}, 
{ 
    id: 2,
 name: "ana johnson",
 job: "web-designer",
 img: "images.png",
 text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi, incidunt quidem odit commodi eaque dicta facilis ad dolore, iste nisi? Ab dolorem, aliquid odit debitis molestiae cum porro perferendis."
},  
{ 
    id: 3,
 name: "stuart little",
 job: "App-designer",
 img: "images.png",
 text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi, incidunt quidem odit commodi eaque dicta facilis ad dolore, iste nisi? Ab dolorem, aliquid odit debitis molestiae cum porro perferendis."
},      
];
// select items

const img=document.querySelector('.person-img');

const author=document.getElementById('author');

const job=document.getElementById('job');

const info=document.getElementById('info');


const prevBtn=document.querySelector('.prev-btn')

const nextBtn=document.querySelector('.next-btn')
const randomBtn=document.querySelector('.random-btn')


// set starting irtem

let currentItem=0;

// load initial item

window.addEventListener('DOMContentLoaded',function(){
showPerson()
});

// show person base on item

function showPerson(){
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

// show next person

nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson();
})

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem=reviews.length-1;
    }
    showPerson();
})


randomBtn.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*reviews.length)
    showPerson();
})
