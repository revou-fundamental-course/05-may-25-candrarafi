(function () {
  const quotes = [
    {
      image: "https://storage.googleapis.com/a1aa/image/0182e687-3785-4437-f780-5bb8f0b67995.jpg",
      alt: "Travel scene with mountains and sun",
      quote: '"Liburan jadi menyenangkan bersama Travel Agentku."',
      author: "Florence Hughes",
      about: "Ibu Rumah Tangga, 28",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/b1686937-9e7d-41a6-28fd-db75394a5a0b.jpg",
      alt: "Beach with palm trees and sunset",
      quote:
        '"Perjalanan yang tak terlupakan dengan bantuan Travel Agent terbaik."',
      author: "John Doe",
      about: "Traveler, 35",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/afb3edfa-339c-4684-6052-6035a2e1aa7f.jpg",
      alt: "City skyline with famous landmarks",
      quote: '"Mudah dan nyaman merencanakan liburan impian saya."',
      author: "Siti Aminah",
     about: "Freelancer, 29",
     avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/797d2141-6acd-4145-cff5-7bf2a22b6d56.jpg",
      alt: "Mountain lake with clear water",
      quote: '"Travel Agent yang selalu mengerti kebutuhan saya."',
      author: "Michael Tan",
      about: "Businessman, 42",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
  ];
  let currentIndex = 0;
  const imageEl = document.getElementById("quote-image");
  const quoteTextEl = document.getElementById("quote-text");
  const authorEl = document.getElementById("quote-author");

  function updateQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    const current = quotes[currentIndex];

    imageEl.src = current.image;
    imageEl.alt = current.alt;
    quoteTextEl.textContent = current.quote;

    const authorContainer = document.getElementById("quote-author");

  const authorImg = authorContainer.querySelector("img");
  authorImg.src = current.avatar;
  authorImg.alt = `${current.author} avatar`;

  // Update nama dan deskripsi
  const authorText = authorContainer.querySelector("div");
  authorText.innerHTML = `
    ${current.author} <br />
    <span class="about">${current.about}</span>
  `;
  }
  setInterval(updateQuote, 3000);

  document.querySelector(".contact-us").addEventListener("click", function () {
  const formSection = document.getElementById("contact-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
});

  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const interestSelect = document.getElementById("interest");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const interestError = document.getElementById("interestError");
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  form.addEventListener("submit", function (e) {
    let valid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required.";
      nameInput.classList.add("error");
      valid = false;
    } else {
      nameError.textContent = "";
      nameInput.classList.remove("error");
    }

    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required.";
      emailInput.classList.add("error");
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.classList.add("error");
      valid = false;
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("error");
    }

    if (!interestSelect.value) {
      interestError.textContent = "Please select an option.";
      interestSelect.classList.add("error");
      valid = false;
    } else {
      interestError.textContent = "";
      interestSelect.classList.remove("error");
    }

    if (!valid) {
    e.preventDefault();
  } else {
    e.preventDefault(); // hindari reload jika belum ada backend
    window.alert("Pesan berhasil dikirim!");
    form.reset(); // reset isi form
  }
  });
})();
