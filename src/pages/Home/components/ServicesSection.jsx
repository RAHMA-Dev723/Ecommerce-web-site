import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Typography from "@mui/material/Typography";

function ServicesSection() {
  return (
    <div className="ServicesSection">
      <div className="container">
        <div className="features">
          {/* feature 1 */}
          <div className="feature">
            <LocalShippingOutlinedIcon
              sx={{
                color: "var(--icon-color)",
                fontSize: "30px",
                position: "absolute",
                top: "-25px",
                left: "-40px",
              }}
            />
            <Typography className="feature-text">FREE SHIPPING</Typography>
          </div>
          {/* freature 2 */}
          <div className="feature">
            <AssignmentReturnOutlinedIcon
              sx={{ color: "var(--icon-color)", fontSize: "26px" }}
            />
            <Typography className="feature-text">100% MONEY BACK </Typography>
          </div>
          {/* feature 3 */}
          <div className="feature">
            <HeadsetMicOutlinedIcon
              sx={{ color: "var(--icon-color)", fontSize: "26px" }}
            />
            <Typography className="feature-text"> SUPPORT 24/7 </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
