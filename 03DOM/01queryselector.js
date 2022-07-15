const para = document.querySelector('p');
console.log(para);

const err_para = document.querySelector('.error');
console.log(err_para);

const err_div = document.querySelector('div.error');
console.log(err_div);

const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[2]);

paras.forEach(para =>{
    console.log(para);
});