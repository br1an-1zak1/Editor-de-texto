"use strict";
const $ = (value) => document.querySelector(value);

const handleFocus = () => $('#texto').focus();

const objLiterals = {
  noteBlock: $(".note"),
  text: $("#note"),
  smText: $("#lowerText"),
  lgText: $("#upperText"),
  bold: $("#bold"),
  italic: $("#italic"),
  underline: $("#underline"),
  color: $("#textColor"),
}
const msg = "Você ultrapassou minhas expectativas! 🎉";

let count = 0;

objLiterals.noteBlock.addEventListener("click", () => handleFocus())

objLiterals.smText.addEventListener("click", () => {
  if (count > -4) {
    document.execCommand("decreaseFontSize", false, null);
    count--;
  } else alert(msg);
});

objLiterals.lgText.addEventListener("click", () => {
  if (count < 10) {
    document.execCommand("increaseFontSize", false, null);
    count++;
    console.log(count);
  } else alert(msg);
});

objLiterals.bold.addEventListener("click", () => {
  document.execCommand("bold", false, null);
});

objLiterals.italic.addEventListener("click", () => {
  document.execCommand('italic', false, null);
})

objLiterals.underline.addEventListener('click', () => {
  document.execCommand('underline', false, null);
})