#!/usr/bin/env python3

from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse as urlparse
import pywhatkit

class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Get the content length to read the form data
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        # Parse the form data
        parsed_data = urlparse.parse_qs(post_data.decode('utf-8'))
        
        # Extract the data
        name = parsed_data.get('contact_name', [''])[0]
        email = parsed_data.get('contact_email', [''])[0]
        message = parsed_data.get('contact_message', [''])[0]
        
        # Print the data to the console
        print("Full Name:", name)
        print("Email Address:", email)
        print("Message:", message)
        
        # Send an email using pywhatkit
        try:
            pywhatkit.send_hmail(
                "givethmovies@gmail.com", 
                "lwifyqphskzwrzqi", 
                "Title: test", 
                f"<h1>HELLO {name}</h1> <br> <p>{message}<p/>", 
                email
                )
            response_message = "Email sent successfully!"
        except Exception as e:
            response_message = f"Failed to send email: {e}"
        
        # Send a response
        self.send_response(200)
        self.end_headers()
        self.wfile.write(response_message.encode())

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Serving on port {port}...')
    httpd.serve_forever()

if __name__ == "__main__":
    run()


