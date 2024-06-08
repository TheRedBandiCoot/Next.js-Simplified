import React from "react";

export default function LoginForm() {
  return (
    <>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}
