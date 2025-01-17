const button = document.getElementById('changeColorButton');
button.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightcoral';
  alert('Background color changed!');
});
