// const selectedText = document.querySelector('#note');
const caixa = document.querySelector('#caixa');
const iconBold = document.querySelector('#bold');

// selectedText.value = "<strong>teste</strong>";

//posição do texto selecionado
// window.addEventListener('select', () => {
  
//   const ini = selectedText.selectionStart;
//   const fim = selectedText.selectionEnd;
//   console.log(ini);
//   console.log(fim);

// })

let texto = '';

function digits(e){
  const keyCode = e.keyCode;
  if (keyCode > 48 || keyCode == 32){
    texto += e.key
    caixa.innerText = texto;
    console.log(e);
  }
}

window.addEventListener('keydown', digits);

iconBold.addEventListener('click', ()=>{
  caixa.innerHTML.bold();
})


// console.log(Array.isArray(arrayListas));32