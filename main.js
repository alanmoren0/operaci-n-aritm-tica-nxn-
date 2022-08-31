const input1=document.querySelector('#first-number');
const button=document.querySelector('.primary-button');
const h1resultado=document.querySelector('.h1resultado');


button.addEventListener('click',()=>{
    makeOperation();
})

function makeOperation(){
		h1resultado.textContent=eval(input1.value);
}