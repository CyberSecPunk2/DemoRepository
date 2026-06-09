
document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
'click',
function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute('href')
)
.scrollIntoView({
behavior:'smooth'
});

});

});

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target
.classList
.add('active');

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll('.reveal')
.forEach(el=>{

revealObserver.observe(el);

});

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter=>{

let count=0;

const target =
+counter.dataset.target;

const update=()=>{

count += target/80;

if(count < target){

counter.innerText =
Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

});

const text =
"Cyber Security • Automation • Research • Innovation";

let i=0;

const typing =
document.querySelector('.typing');

function type(){

if(i < text.length){

typing.innerHTML +=
text.charAt(i);

i++;

setTimeout(type,50);

}

}

type();

const hero =
document.querySelector('.hero');

document.addEventListener(
'mousemove',
(e)=>{

const x=
(e.clientX/window.innerWidth-.5)*15;

const y=
(e.clientY/window.innerHeight-.5)*15;

hero.style.transform=
`translate(${x}px,${y}px)`;

});
