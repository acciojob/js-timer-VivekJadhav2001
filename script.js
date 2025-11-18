// write js code here if required
const p = document.querySelector('p');

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateTimer() {
    const d = new Date();
    const day = pad(d.getDate());
    const month = pad(d.getMonth() + 1);
    const year = d.getFullYear();
    const hours = pad(d.getHours());
    const mins = pad(d.getMinutes());
    const secs = pad(d.getSeconds());

    p.textContent = `${day}/${month}/${year}, ${hours}:${mins}:${secs}`;
  }

  // initialize and update every second
  if (p) {
    updateTimer();
    setInterval(updateTimer, 1000);
  } else {
    console.warn('No <p> tag found in the document.');
  }
