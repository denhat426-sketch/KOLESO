function openCall() {
    document.getElementById("callModal").style.display = "flex";
  }
  
  function closeCall() {
    document.getElementById("callModal").style.display = "none";
  }
  
  function scrollToForm() {
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
  }
  
  const BOT_TOKEN = "8407833063:AAFxav88_1G9S8_2var3Knfx1wG3eG5PH_s";
  const CHAT_ID = "8090040629";
  
  function sendForm(e) {
    e.preventDefault();
  
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const carModel = document.querySelector('input[name="carModel"]').value;
    const carNumber = document.querySelector('input[name="carNumber"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const time = document.querySelector('input[name="time"]').value;
  
    let services = [];
    document.querySelectorAll('input[name="service[]"]:checked')
      .forEach(item => services.push(item.value));
  
    if (services.length === 0) {
      alert("Kamida bitta xizmat tanlang!");
      return;
    }
  
    const text = `🛞 Yangi yozilish (KOLESO)
  
  👤 Ism: ${name}
  📞 Telefon: ${phone}
  🚗 Mashina: ${carModel}
  🔢 Raqami: ${carNumber}
  🔧 Xizmatlar: ${services.join(", ")}
  📅 Sana: ${date}
  ⏰ Vaqt: ${time}`;
  
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text
      })
    })
    .then(() => {
      alert("✅ Yuborildi! Tez orada bog‘lanamiz.");
      document.querySelector("form").reset();
    })
    .catch(() => {
      alert("❌ Xatolik! Qayta urinib ko‘ring.");
    });
  }
  

