import "./style.css";
import "./API/API.ts";
import "./form.ts";
import { getWords } from "./API/API.ts";

const listRender = document.querySelector<HTMLDivElement>("#render");

getWords();

type Word = {
  eng: string;
  ukr: string;
};

export function reranderIntarface(words: Word[]) {
  const wordsMarkup = words
    ?.map(
      (word: Word) =>
        `
         <li class="item"> 
          <p class="text eng">${word.eng}</p>
          <p class="text ukr">${word.ukr}</p>
        </li>`
    )
    .join("");

  if (listRender) {
    listRender.innerHTML = wordsMarkup;
  }
}
