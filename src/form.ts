const inputEnglish = document.querySelector<HTMLInputElement>(".english");
const mainUkrainian = document.querySelector(".ukrainian") as HTMLInputElement;
const button = document.querySelector(".button") as HTMLInputElement;

import { writeDownWord } from "./API/API";

interface Words {
  eng: string;
  ukr: string;
}

button?.addEventListener("click", getInputData);

function getInputData(e: MouseEvent): void {
  e.preventDefault();

  if (inputEnglish!.value === "" || mainUkrainian!.value === "") {
    return;
  }

  const result: Words = { eng: inputEnglish!.value, ukr: mainUkrainian!.value };

  writeDownWord(result);

  inputEnglish!.value = "";
  mainUkrainian!.value = "";

  console.log(result);
}
