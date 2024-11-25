// Function to check Local Storage and handle redirection
function checkLocalStorage() {
    // Check if Local Storage is empty
    if (localStorage.length === 0) {
        // Store the current page URL in Local Storage
        localStorage.setItem('currentPageUrl', window.location.href); // Get the current page URL

        // Redirect the user to ../index.html
        window.location.href = '../index.html';
    }
}

// Call the function to check Local Storage
checkLocalStorage();