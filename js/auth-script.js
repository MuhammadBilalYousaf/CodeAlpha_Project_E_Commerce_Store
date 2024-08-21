// auth-script.js

document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            // Store the user data in localStorage
            const user = {
                name: name,
                email: email,
                password: password
            };

            // Save the user data to localStorage (using email as a key)
            localStorage.setItem(email, JSON.stringify(user));

            alert('Sign Up Successful');
            window.location.href = 'signin.html'; // Redirect to sign in page after sign up
        });
    }

    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('signinEmail').value;
            const password = document.getElementById('signinPassword').value;

            // Retrieve the user data from localStorage using the email
            const user = JSON.parse(localStorage.getItem(email));

            // Check if user exists and the password matches
            if (user && user.password === password) {
                alert('Sign In Successful');
                window.location.href = 'index.html'; // Redirect to home page after sign in
            } else {
                alert('Invalid email or password.');
            }
        });
    }
});
