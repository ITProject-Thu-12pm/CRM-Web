import React from "react";
import './ButtonStyles.css';

function LoadLogInPage() {
  return (
    <div className="container m-0">
      <div className="row">
        <div className="col-sm-8 gx-0">
          <img
            src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/mountain.jpg?raw=true"
            alt="moutain"
            className="img-responsive "
            style={{ width: 767, height: 1031 }}
          />
          {/* <p>Log in here!</p>
          <p>Log in here!</p>
          <p>Log in here!</p>
          <p>Log in here!</p>
          <p>Log in here!</p>
          <p>Log in here!</p>
          <p>Log in here!</p> */}
        </div>
        <hr className="d-sm-none" />
        
        <div className="col-sm-4 gx-5 pt-5 pl-3">
          <div
            className="title"
            style={{
              textAlign: "left",
              color: "#111111",
              fontSize: 49.9,
              fontFamily: "Poppins",
              fontWeight: "600",
            //   lineHeight: 64,
              wordWrap: "break-word"
            }}
          >
            Connecting You to What Matters Most
          </div>
          <br></br>
          <br></br>
          <LogInForm />
          {/* <p className="mx-4"> Log in here!</p> */}
          {/* <p>Log in here!</p>
          <p>Log in here!</p>
          <p>Log in here!</p> */}
          <br></br>
          <button type="button" class="btn btn-lighter-secondary w-100 rounded-5 py-2" style={{color: "white"}}>Log in</button>
          <br></br>
          <br></br>
          <button type="button" class="btn w-100 rounded-5 py-2">Forgot password?</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button type="button" class="btn rounded-5 py-2">Don't have an account?</button>
          <button type="button" class="btn btn-outline-secondary rounded-5 py-2">Sign up</button>
        </div>
      </div>
    </div>
  );
}

function LogInForm() {
  return (
    <form>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      {/* <form class="form-floating">
        <input
          type="email"
          class="form-control is-invalid"
          id="floatingInputInvalid"
          placeholder="name@example.com"
          value="test@example.com"
        />
        <label for="floatingInputInvalid">Invalid input</label>
      </form> */}
    </form>
  );
}

export default LoadLogInPage;
