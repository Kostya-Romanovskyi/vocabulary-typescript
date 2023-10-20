import axios from "axios";
import { reranderIntarface } from "../main";

const MAIN_URL = "https://vocabulary-back.onrender.com";
// const MAIN_URL = "http://localhost:3000";

interface Words {
  eng: string;
  ukr: string;
}

export async function getWords() {
  try {
    const response = await axios.get(`${MAIN_URL}/api/words`);
    // const response = await axios.get(
    //   `${MAIN_URL}/api/words?limit=10&page=${page}`
    // );
    console.log(response);
    reranderIntarface(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function writeDownWord(words: Words) {
  try {
    await axios.post(`${MAIN_URL}/api/words`, words).then(function (response) {
      console.log(response);
      getWords();
    });
  } catch (error) {
    console.log(error);
  }
}
