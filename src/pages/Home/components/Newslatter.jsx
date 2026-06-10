import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
function Newslatter() {
  return (
    <div className="newslatter">
      <div className="container">
        <div className="text">
          <h2>SING UP FOR THE NEWSLETTER</h2>
          <p>Subscribe for the latest stories and promotions</p>
        </div>

        <div className="form">
          <input
            className="form-input"
            placeholder="enter your e-mail address"
          />
          <div className="icon">
            {" "}
            <EmailOutlinedIcon
              sx={{ width: "21px", height: "16.5px", color: "#ffffff" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
