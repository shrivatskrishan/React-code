import React from 'react';

const SubmitFormData = () => {
  
  async function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }),
  });

  const text = await response.text();
  alert(text);
}

  return (
    <div>
     <form onSubmit={submitForm}  action={window.location.href} method="POST">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Submit</button>

     </form>
    </div>
  );
}
export default SubmitFormData;