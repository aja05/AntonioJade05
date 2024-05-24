document.addEventListener('DOMContentLoaded', function() {
    const hobbiesList = document.getElementById('hobbies-list');
    
    hobbiesList.addEventListener('click', function(e) {
      const target = e.target;
      const imgSrc = target.getAttribute('data-img');
      
      if (imgSrc) {
        const existingImg = target.querySelector('img');
        
        if (existingImg) {
          existingImg.style.display = existingImg.style.display === 'none' ? 'block' : 'none'; // Toggle image display
        } else {
          const img = document.createElement('img');
          img.src = imgSrc;
          target.appendChild(img); // Append new image to the clicked li element
        }
      }
    });
  });
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    fetch("https://formspree.io/antoniojade337@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        this.reset();
      } else {
        alert("Message failed to send.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
  });
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ito ay para hindi i-submit ang form nang traditional na paraan
    alert('Submitted.'); // Ipapakita ang notification message
  });
  document.addEventListener('DOMContentLoaded', () => {
      const text = "This is my Official Website";
      let index = 0;

      function typeText() {
          if (index < text.length) {
              document.getElementById('home').innerHTML += text.charAt(index);
              index++;
              setTimeout(typeText, 100);
          }
      }

      typeText();
  });
    