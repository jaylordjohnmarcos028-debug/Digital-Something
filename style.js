const form = document.getElementById("card-form");
const preview = {
  name: document.getElementById("preview-name"),
  title: document.getElementById("preview-title"),
  email: document.getElementById("preview-email"),
  phone: document.getElementById("preview-phone"),
  website: document.getElementById("preview-website"),
  social: document.getElementById("preview-social"),
  photo: document.getElementById("preview-photo"),
  card: document.getElementById("card-preview")
};

// Update preview on input
form.addEventListener("input", () => {
  preview.name.textContent = document.getElementById("fullName").value || "Your Name";
  preview.title.textContent = document.getElementById("jobTitle").value;
  preview.email.textContent = document.getElementById("email").value;
  preview.phone.textContent = document.getElementById("phone").value;
  preview.website.textContent = document.getElementById("website").value;
  preview.social.textContent = document.getElementById("social").value;

  preview.card.style.backgroundColor = document.getElementById("themeColor").value;
  preview.card.style.fontFamily = document.getElementById("fontStyle").value;
});

// Handle photo upload
document.getElementById("photo").addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.photo.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
