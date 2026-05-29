const leadForm = document.getElementById("leadForm");
const successMsg = document.getElementById("successMsg");
const themeToggle = document.getElementById("themeToggle");
const seatCount = document.getElementById("seatCount");

let seats = 20;

leadForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const parentName = document.getElementById("parentName").value.trim();
    const childName = document.getElementById("childName").value.trim();
    const program = document.getElementById("program").value;
    const visitDate = document.getElementById("visitDate").value;

    successMsg.textContent = `Thank you ${parentName}! Demo visit booked for ${childName} in ${program} on ${visitDate}.`;

    if (seats > 0) {
        seats--;
        seatCount.textContent = seats;
    }

    leadForm.reset();
});

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("campaignTheme", "dark");
    } else {
        localStorage.setItem("campaignTheme", "light");
    }
});

if (localStorage.getItem("campaignTheme") === "dark") {
    document.body.classList.add("dark-mode");
}