#!/usr/bin/env python3

from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse as urlparse
import pywhatkit #type: ignore

class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Get the content length to read the form data
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        # Parse the form data
        parsed_data = urlparse.parse_qs(post_data.decode('utf-8'))
        
        # Extract the data
        name = parsed_data.get('contact_name', [''])[0]
        subject = parsed_data.get('contact_subject', [''])[0]
        email = parsed_data.get('contact_email', [''])[0]
        message = parsed_data.get('contact_message', [''])[0]
        
        # Print the data to the console
        print("Full Name:", name)
        print("Subject:", subject)
        print("Email Address:", email)
        print("Message:", message)
        
        # Send an email using pywhatkit
        try:
            pywhatkit.send_hmail(
                "givethmovies@gmail.com", 
                "lwifyqphskzwrzqi", 
                subject, 
                f"<h1>Name: {name}</h1> <br> <p>{message}<p/>", 
                email
                )
            response_message = "Email sent successfully!"
        except Exception as e:
            response_message = f"Failed to send email: {e}"
        
        # If email is sent successfully, redirect to the contact page
        self.send_response(302)  # 302 Redirect
        self.send_header('Location', 'http://127.0.0.1:5500/Other_WebPages/Contact.html')
        self.end_headers()
        self.wfile.write(response_message.encode())

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Serving on port {port}...')
    httpd.serve_forever()

if __name__ == "__main__":
    run()


