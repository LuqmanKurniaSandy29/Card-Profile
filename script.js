const textElement = document.getElementById("typing-text");
const text = "Luqman Kurnia Sandy";
let index = 0;
let isAdding = true;

function typeEffect() {
  textElement.textContent = text.substring(0, index);

  if (isAdding) {
    if (index < text.length) {
      index++;
    } else {
      isAdding = false;
      setTimeout(typeEffect, 2000); // Pause before deleting
      return;
    }
  } else {
    if (index > 0) {
      index--;
    } else {
      isAdding = true;
    }
  }

  setTimeout(typeEffect, isAdding ? 200 : 100); // Speed of typing/deleting
}

typeEffect();

document.getElementById('facebook-icon').addEventListener('click', function() {
    window.open('https://www.facebook.com/luqman.kurniasandy', '_blank');
});
  
document.getElementById('instagram-icon').addEventListener('click', function() {
    window.open('https://www.instagram.com/luqman_kurniasandy', '_blank');
});
  
document.getElementById('linkedin-icon').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/luqman-kurnia-sandy', '_blank');
});
  
document.getElementById('github-icon').addEventListener('click', function() {
    window.open('https://github.com/LuqmanKurniaSandy29', '_blank');
});
  
document.getElementById('contact-button').addEventListener('click', function() {
    window.location.href = 'mailto:luqmankurniasandy@gmail.com';
});
  