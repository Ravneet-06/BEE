const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;
    let feedback = document.getElementById("feedback").value.trim();

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("courseError").innerHTML = "";
    document.getElementById("feedbackError").innerHTML = "";

    let valid = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Enter name";
        valid = false;
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Enter email";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    if (course == "") {
        document.getElementById("courseError").innerHTML = "Select course";
        valid = false;
    }

    if (feedback == "") {
        document.getElementById("feedbackError").innerHTML = "Enter feedback";
        valid = false;
    }

    if (valid) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("course", course);
        localStorage.setItem("feedback", feedback);

        sessionStorage.setItem("user", name);

        showData();
        form.reset();
    }
});

function showData() {

    let name = localStorage.getItem("name");
    let email = localStorage.getItem("email");
    let course = localStorage.getItem("course");
    let feedback = localStorage.getItem("feedback");
    let user = sessionStorage.getItem("user");

    document.getElementById("sessionUser").innerHTML =
        user ? "Current Session User: " + user : "";

    if (name) {
        document.getElementById("display").innerHTML = `
            <b>Name:</b> ${name}<br><br>
            <b>Email:</b> ${email}<br><br>
            <b>Course:</b> ${course}<br><br>
            <b>Feedback:</b> ${feedback}
        `;
    } else {
        document.getElementById("display").innerHTML = "No feedback stored.";
    }
}

document.getElementById("deleteBtn").onclick = function () {
    localStorage.clear();
    sessionStorage.clear();
    showData();
};

// Remove errors automatically
["name", "email", "feedback"].forEach(id => {
    document.getElementById(id).oninput = () =>
        document.getElementById(id + "Error").innerHTML = "";
});

document.getElementById("course").onchange = () =>
    document.getElementById("courseError").innerHTML = "";

showData();