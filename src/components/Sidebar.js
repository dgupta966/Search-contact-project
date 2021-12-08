import React from "react";

const SideBar = () => {
  return (
    <div className="side">
      <h3>Audience</h3>
      <strong>
        <label>Includes Tags :</label>
      </strong>
      <ul>
        <li style={{ borderRadius: "6px" }}>Greetings</li>
        <li style={{ borderRadius: "6px" }}>Greetings</li>
        <li style={{ borderRadius: "6px" }}>Greetings</li>
        <li style={{ borderRadius: "6px" }}>Greetings</li>
      </ul>
      <strong>
        <br />
        <label>Exclude Tags :</label>
      </strong>
      <ul>
        <li style={{ borderRadius: "6px" }}>Greetings</li>
        <li style={{ borderRadius: "6px" }}>Greetings</li>
        <li style={{ borderRadius: "6px" }}>Greetings</li>
        <li style={{ borderRadius: "6px" }}>Greetings</li>
      </ul>
      <strong>
        <br />
        <div>
          <label>Message Sent:</label>
        </div>
      </strong>

      <br />

      <span
        className="min"
        style={{
          backgroundColor: "#80808026",
          padding: "10px",
          borderRadius: "5px",
          margin: "10px"
        }}
      >
        Min
      </span>
      <span
        className="max"
        style={{
          backgroundColor: "#80808026",
          padding: "10px",
          borderRadius: "5px",
          margin: "10px"
        }}
      >
        Max
      </span>

      <br />
      <br />
      <strong>
        <div>
          <label>Message Received:</label>
        </div>
      </strong>
      <br />
      <span
        className="min"
        style={{
          backgroundColor: "#80808026",
          padding: "10px",
          borderRadius: "5px",
          margin: "10px"
        }}
      >
        Min
      </span>
      <span
        className="max"
        style={{
          backgroundColor: "#80808026",
          padding: "10px",
          borderRadius: "5px",
          margin: "10px"
        }}
      >
        Max
      </span>
      <button
        style={{
          backgroundColor: "#00A36C",
          marginTop: "50px",
          padding: "5px",
          width: "80%",
          borderRadius: "10px"
        }}
      >
        Save Filters
      </button>
    </div>
  );
};

export default SideBar;
