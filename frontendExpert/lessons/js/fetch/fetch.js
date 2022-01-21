const button = document.querySelector('button');

button.addEventListener('click', handleClick);

function handleClick() {
  const url = new URL('https://www.algoexpert.io/api/hello-world');
  url.searchParams.set('firstName', document.getElementById('first').value);
  url.searchParams.set('lastName', document.getElementById('last').value);

  fetch(url)
    .then(res => res.text())
    .then(text => {
      const output = document.getElementById('output');
      output.textContent = text;
    });
}