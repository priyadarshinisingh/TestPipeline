document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('helloBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      console.log('Hello World');
    });
  } else {
    // fallback for Node.js
    console.log('Hello World');
  }
});