document.addEventListener('contextmenu', e => e.preventDefault());

fetch('backend/get_label.php')
  .then(res => res.text())
  .then(text => {
    document.getElementById('labelArea').innerText = text;
  });