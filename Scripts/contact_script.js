button = document.getElementById("contact_button");

function contactFunction()
{
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name.trim() === "")
    {
        window.alert("Name Field is Empty!! Try Entering your name...")
    }
    if(subject.trim() === "")
    {
        window.alert("Subject Field is Empty!! Try Entering your name...")
    }
    else if(email.trim() === "")
    {
        window.alert("Email Field is Empty!! Try Entering your name...")
    }
    else if(message.trim() === "Enter your message here...")
    {
        window.alert("Message Field must be changed!! Try Entering your name...")
    }
    else
    {
        console.log(name, email, message);
        window.alert("Message has been sent successfully, Thanks for using Giveth Movies.")
    }

    
}