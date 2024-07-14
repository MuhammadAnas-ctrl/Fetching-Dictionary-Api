// const url = "https://api.dictionaryapi.dev/api/v2/entries/en/random";
// async function Api() {
//   const responce = await fetch(url);
//   const data = await responce.json();
//   console.log(data.word);
//   //   source.src = data.audio;
// }
// Api();

const source = document.getElementsByName("source");
const audio = document.getElementById("NAME");
const input = document.getElementById("input");
const errorr = document.getElementById("Error");
const define = document.getElementById("define");
const h3 = document.getElementById("h3");
const ERR = document.getElementById("ERROR");
const h4 = document.getElementById("h4");
const h5 = document.getElementById("h5");
const h2 = document.getElementById("h2");
const span = document.getElementById("span");

async function data() {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
  const responce = await fetch(url);
  const data = await responce.json();

  audio.src = data.at().phonetics.at().audio;
  audio.style.display = "block";

  span.innerHTML =
    "Definition : " + data.at().meanings.at().definitions.at().definition;
  span.style.display = "block";

  h3.innerHTML =
    "Example : " + data.at().meanings.at().definitions.at().example;
  h3.style.display = "block";

  h4.innerHTML = "Synonyms : " + data.at().meanings.at().synonyms.at();
  h4.style.display = "block";

  h5.innerHTML = "Antonyms : " + data.at().meanings.at().antonyms.at();
  h5.style.display = "block";

  h2.innerHTML = "Word : " + data.at().word;
  h2.style.display = "block";

  if ((h3.innerHTML = "undefined")) {
    h3.innerHTML = "Example : " + "Cant Fetch Data";
  }
  if((h4.innerHTML = "undefined")) {
    h4.innerHTML = "Synonyms : " + "Cant Fetch Data";
  }
  if ((h5.innerHTML = "undefined")) {
    h5.innerHTML = "Antonyms : " + "Cant Fetch Data";
  }
}

