const form = document.getElementById("form");
const error = document.getElementById("error");

const loginUser = async (event) => {
  event.preventDefault();

  // Check if the request method is POST
  if (event.target.method === "post" || event.target.method === "POST") {
    // Extract form field values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Create an object with the form data
    const formData = {
      username: username,
      password: password,
    };

    const response = await fetch("http://localhost:2000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Convert the form data to JSON
    });

    // Access the status code and status text
    const statusCode = response.status;
    const statusText = response.statusText;

    console.log("Status Code:", statusCode);
    console.log("Status Text:", statusText);

    if (statusCode === 400) {
      const jsonResponse = await response.json();
      error.textContent = jsonResponse.message;
    } else if (statusCode === 401) {
      const jsonResponse = await response.json();
      error.textContent = jsonResponse.message;
    } else if (statusCode === 200) {
      window.location.href = "/dash.html";
    }
  }
};

form.addEventListener("submit", loginUser);
