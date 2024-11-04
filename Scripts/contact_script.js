function sendEmail(event)
{
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const body = document.getElementById("message").value;
    const template_id = "template_l81a3mn"
    const user_id = "nxb5l3iv33FESHn_q"
    const service_id = "default_service"
    
    if(name.trim() === "")
    {
        window.alert("Name Field is Empty!! Try Entering your name...")
        window.location.href = "../Other_Webpages/Contact.html"
    }
    if(subject.trim() === "")
    {
        window.alert("Subject Field is Empty!! Try Entering your name...")
        window.location.href = "../Other_Webpages/Contact.html"
    }
    else if(email.trim() === "")
    {
        window.alert("Email Field is Empty!! Try Entering your name...")
        window.location.href = "../Other_Webpages/Contact.html"
    }
    else if(body.trim() === "Enter your message here...")
    {
        window.alert("Message Field must be changed!! Try Entering your name...")
        window.location.href = "../Other_Webpages/Contact.html"
    }
    else
    {
            // console.log(name, email, message);
            window.alert("Sending Message, Please Wait!!!")
            // Prevent the default form submission
            event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.init(user_id)
        // EmailJS parameters
        const templateParams = {
            from_name: name,
            subject: subject,
            from_email: email,
            email_id : email,
            message: message,
        };

        // Use EmailJS to send the email
        emailjs.send(service_id, template_id, templateParams, user_id)
        .then(function(response) {
            // console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully! Thanks for using Giveth Movies.');
            document.getElementById('contact-form').reset(); // Reset the form
        }, function(error) {
            // console.error('FAILED...', error);
            alert('Failed to send email. Please try again later.');
        });
    }
}

// Attach the sendEmail function to the form submit event
// document.getElementById('contact-form').addEventListener('submit', sendEmail);
footer_text = document.querySelector(`.text`);

education_element = document.createElement("p");
education_element.id = "educ_id";
education_element.textContent = "This website is for Educational Purposes Only";
education_element.style.fontSize = "12.5px";
education_element.style.marginTop = "5px"
footer_text.appendChild(education_element);