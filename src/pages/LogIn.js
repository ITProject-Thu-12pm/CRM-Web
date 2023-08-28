import React from "react";

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
              textAlign: "center",
              color: "#111111",
              fontSize: 56,
              fontFamily: "Poppins",
              fontWeight: "600",
            //   lineHeight: 64,
              wordWrap: "break-word"
            }}
          >
            Connecting You to What Matters Most
          </div>
          <LogInForm />
          {/* <p className="mx-4"> Log in here!</p> */}
          {/* <p>Log in here!</p>
          <p>Log in here!</p>
          <p>Log in here!</p> */}
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
