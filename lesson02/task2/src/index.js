import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const rootElement = document.querySelector('#root');

const style = {
  color: "red",
  fontWeight: 700
};

const element = (
  <main className="page">
    <form className="login-form">
      <h1 className="form-title">Profile</h1>
      <div className="form-control">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" className="form-input" name="name" type="text" defaultValue={"anonymous"} />
      </div>
      <div className="form-control">
        <label htmlFor="age" className="form-label">Age</label>
        <input id="age" className="form-input" name="age" defaultValue={17} type="number" />
        <span style={style}>To young</span>
      </div>
      <button className="submit-button" type="submit">Submit</button>
    </form>
  </main>
);

ReactDOM.render(element, rootElement);
