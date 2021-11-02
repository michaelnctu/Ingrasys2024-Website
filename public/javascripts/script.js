/* Sending Email from Contact Section */
(function () {
  emailjs.init("user_XXXXXXXXXXX");
})();

function sendmail() {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;

  var contactParams = {
    from_name: fullName,
    from_email: userEmail,
    message: userMessage
  };

  emailjs.send('Outlook', 'template_9f5jcg7', contactParams).then(function (res) {
    console.log("success", res.status)


  })
}