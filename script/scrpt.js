let cont = document.getElementById('container');
let menu_show =  document.getElementById('menu');
let closer = document.getElementById('closer');
let side = document.body.firstElementChild.firstElementChild.lastElementChild;
let pluse = document.getElementById('pluse');
let numbers = pluse.nextElementSibling;
let subtraction = numbers.nextElementSibling;
let sub_btn = document.getElementById('sub-btn');
let counter = document.getElementById('counter');
let ch_selector = document.getElementById('chrrt_select');
let chart = document.getElementById('chart');
let p_select = document.getElementById('p-select');
let count = document.getElementById('count');
let final_price = document.getElementById('final');
let show_chart = document.getElementById('show_chart')
let chart_remover = document.getElementById('remover');
menu_show.addEventListener('click', ()=>{
    side.classList.toggle('canvas_active');
});
pluse.addEventListener('click', ()=>{
    let x = Number(numbers.innerHTML);
    numbers.innerText = x+=1;
});
subtraction.addEventListener('click', ()=>{
    if (!(numbers.innerHTML <= 0)) {
        let d = Number(numbers.innerHTML);
        numbers.innerText = d-=1;
    };
});
cont.addEventListener('click', ()=>{
    side.classList.remove('canvas_active');
    chart.style.display = 'none';
});
sub_btn.addEventListener('click', ()=>{
    counter.innerText = numbers.innerText;
    counter.style = 'display: block;';
    if (Number(numbers.innerText) == 0) {
        counter.style = 'display: none;';
    };
    count.innerText = numbers.innerText;
    final_price.innerText = Number(count.innerText)*125.00;
});
window.addEventListener('load', ()=>{
    counter.innerText = '0';
});
ch_selector.addEventListener('click', ()=>{
    if (numbers.innerText !== '0') {
        chart.style = 'display: block;';
    };
});
chart_remover.addEventListener('click', ()=>{
    count.innerText = '0';
    final_price.innerText = '0';
    counter.innerText = '0';
});