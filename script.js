// Form validation

// Function to check if the form is valid

const form = document.querySelector("form");
if(form){
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value==="" || email.value === "" || message.value === "") {
      alert("Please enter all fields");
    } if(name.value.length < 5){
      alert("Name must be at least 5 characters long");
    }
    else {
      alert("Message sent!");
      email.value = "";
      message.value = "";
    }
  });
}
