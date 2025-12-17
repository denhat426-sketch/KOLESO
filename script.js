function openCall() {
    document.getElementById("callModal").style.display = "flex";
  }
  function closeCall() {
    document.getElementById("callModal").style.display = "none";
  }
  function scrollToForm() {
    document.getElementById("booking").scrollIntoView({behavior:"smooth"});
  }
  function sendForm(e) {
    e.preventDefault();
    alert("So‘rov yuborildi! Tez orada bog‘lanamiz.");
  }
  