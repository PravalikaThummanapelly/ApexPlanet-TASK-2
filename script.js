// Password toggle
function togglePassword(id) {
  let field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

// Register Validation
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  let p1 = document.getElementById("pass1").value;
  let p2 = document.getElementById("pass2").value;
  let msg = document.getElementById("msg");

  if (p1 !== p2) {
    e.preventDefault();
    msg.innerText = "Passwords do not match!";
  }
});

document.getElementById("username")?.addEventListener("blur", function() {
  let username = this.value;

  fetch("check.php?user=" + username)
    .then(res => res.text())
    .then(data => {
      document.getElementById("msg").innerText = data;
    });
});