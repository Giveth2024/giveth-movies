
        // Function to redirect back to the original page if the URL is stored

        function redirectToOriginalPage() {

            const originalPageUrl = localStorage.getItem('currentPageUrl');


            if (originalPageUrl) {

                // Redirect back to the original page

                window.location.href = originalPageUrl;


                // Optionally, clear the stored URL to prevent future redirects

                localStorage.removeItem('currentPageUrl');

            }

        }


        // Call the function when the page loads

        window.onload = redirectToOriginalPage;

        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        document.addEventListener('keydown', function (e) {
            if (
                e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') || 
                (e.ctrlKey && e.key === 'U')
            ) {
                e.preventDefault();
            }
        });

        (function() {
    let devtools = false;

// Here's the fixed and improved version of your checkDevTools function:

        // Function to check if devtools is open
        const checkDevTools = () => {
            const start = performance.now();
            debugger; // This triggers if the devtools is open
            const end = performance.now();

            if (end - start > 10) { // If time taken is abnormally high, devtools is likely open
                // Redirect to another page
                window.location.href = "https://www.google.com";
            }
        };

        // Continuously check for devtools
        setInterval(() => {
            checkDevTools();
        }, 500);

        // Continuously check for devtools
        const interval = setInterval(() => {
            checkDevTools();
            if (devtools) {
                alert("Developer tools detected! Redirecting...");
                // Close the current tab
                window.close(); 
                // Redirect to a safe page (optional)
                // window.location.href = "https://example.com";
                clearInterval(interval); // Stop checking
            }
        }, 1000);
    })();

    (function() {
        const blockDebugging = () => {
            if (window.console && console.log) {
                console.log = function() {
                    alert("Console debugging is disabled!");
                };
            }
        };
        setInterval(blockDebugging, 1000);
    })();


