"use strict";
const $ = value => document.querySelector(value);


const objLiterals = {
  noteBlock: $(".note"),
  bold: $("#bold"),
  italic: $("#italic"),
  underline: $("#underline"),
  color: $("#textColor"),
}
const msg = "Você ultrapassou minhas expectativas!";
let count = 0;

const handleEdition = type => {
  objLiterals[type].addEventListener("click", () => {
    document.execCommand(type, true, null)
  })
}

objLiterals.noteBlock.addEventListener("click", () => $("#texto").focus())

handleEdition("bold");

handleEdition("italic");

handleEdition("underline");
