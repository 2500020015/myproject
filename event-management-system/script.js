let registrations =
  JSON.parse(localStorage.getItem("registrations")) || [];

function selectEvent(eventName) {
  document.getElementById("event").value = eventName;
  document.getElementById("register").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const registration = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    event: document.getElementById("event").value
  };

  registrations.push(registration);
  localStorage.setItem("registrations", JSON.stringify(registrations));

  document.getElementById("message").textContent =
    "Registration successful!";

  this.reset();
  displayRegistrations();
});

function displayRegistrations() {
  const list = document.getElementById("registrationList");
  list.innerHTML = "";

  registrations.forEach((registration, index) => {
    const div = document.createElement("div");
    div.className = "registration";

    div.innerHTML = `
      <strong>${index + 1}. ${registration.name}</strong>
      <p>Email: ${registration.email}</p>
      <p>Phone: ${registration.phone}</p>
      <p>Event: ${registration.event}</p>
    `;

    list.appendChild(div);
  });

  document.getElementById("totalRegistrations").textContent =
    registrations.length;
}

displayRegistrations();
