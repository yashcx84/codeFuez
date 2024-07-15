import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";
function Error() {
  return (
    <>
      <div className="error-container">
        <div className="row">
          <h1>404 ☹</h1>
          <h2>Sorry! Page Not Found</h2>
          <p>
            It looks like the page you are looking for doesn't exist or has been
            moved.{" "}
            <span>
              Please check the URL for errors, or return to the{" "}
              <Link to="/">homepage</Link>. If you believe this is an error,
              feel free to contact our support team.
            </span>
          </p>
          <p></p>
          <div className="button-container">
            <Link to="/" className="btn">
              Return To Home
            </Link>
            <Link to="/contact" className="btn">
              Contact Bug
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
