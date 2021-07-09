const poem =
  "And then the day came, when the risk to remain tight in a bud was more painful than the risk it took to blossom. --- By Anais Nin --- ";

let index = 0;

function writeText() {
  document.body.innerText = poem.slice(0, index);

  index++;

  if (index > poem.length) {
    index = 0;
  }
}

setInterval(writeText, 100);
