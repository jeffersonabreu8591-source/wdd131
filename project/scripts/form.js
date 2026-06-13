const form =
    document.querySelector("#contact-form");

const welcomeMessage =
    document.querySelector("#welcome-message");

const savedName =
    localStorage.getItem("visitorName");

if (savedName) {

    welcomeMessage.textContent =
        `Welcome back, ${savedName}!`;
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const fullName =
        document.querySelector("#fullname").value;

    localStorage.setItem(
        "visitorName",
        fullName
    );

    welcomeMessage.textContent =
        `Thank you, ${fullName}! Your information has been saved.`;

    form.reset();
});