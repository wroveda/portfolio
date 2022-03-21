(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("v50WOOEq1saHMKP1l");
})();
   
let positiveMessage;
window.onload = function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;

        let msg = document.getElementById("sent-msg");
        positiveMessage = msg.innerHTML;
        emailjs.sendForm("service_isv65ks", "contact_form", this)
            .then(function() {
                msg.innerHTML = positiveMessage;
                msg.display.color = "#588157";
            }, function(error) {
                msg.innerHTML = "Error!";
                msg.display.color = "red";
            });

       msg.style.display = "block"; 
    });
}
