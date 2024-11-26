document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const messageDiv = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !email) {
            // Show error message
            messageDiv.textContent = "Please fill in your name and email.";
            messageDiv.className = "message error";
            messageDiv.style.display = "block";
        } else {
            // Show success message
            messageDiv.textContent =
                "Thank you for your interest in our workshop. We will send you a confirmation mail if your name is added to the guest list.";
            messageDiv.className = "message success";
            messageDiv.style.display = "block";
        }
    });
});
