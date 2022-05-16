
async function signupFormHandler(event) {
    event.preventDefault();

    // getting data from the form
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        }); 
    // check the response status
    if (response.ok) {
        console.log('success');

        // loginHandler();
        document.location.replace('/home-page');

      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler); 
