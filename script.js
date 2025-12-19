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
  const BOT_TOKEN = "8407833063:AAFxav88_1G9S8_2var3Knfx1wG3eG5PH_s";
const CHAT_ID = "8090040629";

function sendForm(e) {
  e.preventDefault(); // sahifa yangilanmasin

  const name = document.querySelector('input[name="name"]').value;
  const phone = document.querySelector('input[name="phone"]').value;

  let services = [];
  document.querySelectorAll('input[name="service[]"]:checked')
    .forEach(item => services.push(item.value));

  if (services.length === 0) {
    alert("Kamida bitta xizmat tanlang");
    return;
  }

  const text =
    `🛞 Yangi yozilish (KOLESO)\n\n` +
    `👤 Ism: ${name}\n` +
    `📞 Telefon: ${phone}\n` +
    `🔧 Xizmatlar: ${services.join(", ")}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  })
  .then(() => {
    alert("Yuborildi! Tez orada bog‘lanamiz.");
  })
  .catch(() => {
    alert("Xatolik! Qayta urinib ko‘ring.");
  });
}
