import os
from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse as urlparse
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        parsed_data = urlparse.parse_qs(post_data.decode('utf-8'))

        name = parsed_data.get('contact_name', [''])[0]
        subject = parsed_data.get('contact_subject', [''])[0]
        email = parsed_data.get('contact_email', [''])[0]
        message = parsed_data.get('contact_message', [''])[0]

        print("Full Name:", name)
        print("Subject:", subject)
        print("Email Address:", email)
        print("Message:", message)

        try:
            self.send_email(name, subject, email, message)
            response_message = "Email sent successfully!"
        except Exception as e:
            response_message = f"Failed to send email: {e}"

        self.send_response(302)
        self.send_header('Location', 'http://127.0.0.1:5500/Other_WebPages/Contact.html')
        self.end_headers()
        self.wfile.write(response_message.encode())

    def send_email(self, name, subject, email, message):
        sender = "givethmovies@gmail.com"
        password = "lwifyqphskzwrzqi"  # Be sure to store this securely
        recipient = email

        # Create the email
        msg = MIMEMultipart()
        msg['From'] = sender
        msg['To'] = recipient
        msg['Subject'] = subject

        body = f"<h1>Name: {name}</h1> <br> <p>{message}</p>"
        msg.attach(MIMEText(body, 'html'))

        # Send the email
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(sender, password)
            server.send_message(msg)

def run(server_class=HTTPServer, handler_class=RequestHandler):
    port = int(os.environ.get('PORT', 8080))
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Serving on port {port}...')
    httpd.serve_forever()

if __name__ == "__main__":
    run()
