var people = [
  {
    usermail: "koosvandermerwe@space48.com",
    userpassword: "codify",
  },
  {
    usermail: "koosvandermerwe@space48.com",
    userpassword: "academy",
  },
  {
    usermail: "koosvandermerwe@space48.com",
    userpassword: "forever",
  },
];

function getInfo() {
  var usermail = document.getElementById("usermail").value;
  var userpassword = document.getElementById("userpassword").value;
  console.log(
    `Your usermail is ${usermail} and your password is ${userpassword}`
  );
}
