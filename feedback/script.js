const complaintForm = document.getElementById("complaint-form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

complaintForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const complaint = e.target.elements.complaint.value;
  if (complaint.trim() !== "") {
    // submit the complaint to the server
    // assuming success
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
    complaintForm.reset();
  } else {
    successMessage.style.display = "none";
    errorMessage.style.display = "block";
  }
});
