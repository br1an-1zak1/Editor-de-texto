const caixa = document.querySelector('#caixa');
const iconBold = document.querySelector('#bold');

let texto = '';

const digits = e => {
  const keyCode = e.keyCode;
  if (keyCode > 48 || keyCode == 32) {
    texto += e.key
    caixa.innerText = texto;
    console.log(e);
  }
}

window.addEventListener('keydown', digits);

iconBold.addEventListener('click', () => {
  caixa.innerHTML.bold();
})
