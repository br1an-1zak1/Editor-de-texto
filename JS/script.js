"use strict";
const $ = (value) => document.querySelector(value);


const objLiterals = {
  noteBlock: $(".note"),
  // smText: $("#lowerText"),
  // lgText: $("#upperText"),
  bold: $("#bold"),
  italic: $("#italic"),
  underline: $("#underline"),
  // color: $("#textColor"),
}
const msg = "Você ultrapassou minhas expectativas!";
let count = 0;

function handleEdition(type){
  objLiterals[type].addEventListener("click", () =>{
    document.execCommand(type, true, null)
  })
}

objLiterals.noteBlock.addEventListener("click", () => $("#texto").focus())

handleEdition("bold");

handleEdition("italic");

handleEdition("underline");


// objLiterals.lgText.addEventListener("click", () => {
//   if (count < 10) {
//     document.execCommand("increaseFontSize", false, null);
//     count++;
//     console.log(count);
//   } else alert(msg);
// });

// objLiterals.bold.addEventListener("click", () => {
//   document.execCommand("bold", false, null);
// });

// objLiterals.italic.addEventListener("click", () => {
//   document.execCommand('italic', false, null);
// })

// objLiterals.underline.addEventListener('click', () => {
//   document.execCommand('underline', false, null);
// })

// const mutationObserver = new MutationObserver((mutation)=>{

//   console.log(mutation);

// });

//utilizar Mutation Observer?? execCommand is deprecated, não funciona no chrome
// objLiterals.smText.addEventListener("click", () => {
//   if (count > -4) {
//     console.log(document.execCommand("decreaseFontSize", true, null));
//     count--;
//   } else alert(msg);
// });

