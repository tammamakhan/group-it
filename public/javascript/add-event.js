async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#event-name-input').value;
    const description = document.querySelector('#event-description-input').value;
    const street_address = document.querySelector('#inputAddress').value;
    const city = document.querySelector('#inputCity').value;
    const state = document.querySelector('#inputState').value;
    const zip_code = document.querySelector('#inputZip').value;
    const start = document.querySelector('#inputStart').value;
    const end = document.querySelector('#inputEnd').value;
  
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        street_address,
        city,
        state,
        zip_code,
        start,
        end
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/home-page');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-event-form').addEventListener('submit', newFormHandler);
