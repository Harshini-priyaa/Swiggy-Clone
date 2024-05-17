// src/components/SignInForm.js
import React, { useState } from 'react';

const SignInForm = ({ closeModal, openModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-in logic here
    closeModal();
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <p>
        New user? <a href="#" onClick={() => openModal(true)}>Register</a>
      </p>
    </div>
  );
};

export default SignInForm;
