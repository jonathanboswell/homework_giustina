document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
  console.log("Switched to gray");
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  console.log("Switched to white");
}
