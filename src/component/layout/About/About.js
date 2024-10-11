import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxg9wfCF34-GN532ldjf-7VG3zD1TK3hfrw&s"
              alt="Founder"
            />
            <Typography>Kinar Sardhara</Typography>
            <Link
              to="https://instagram.com/kinar.sardhara"
              target="blank"
              style={{ marginTop: "2px", textDecoration: "none" }}
            >
              Visit Instagram
            </Link>

            {/* <span>
              This is a sample wesbite made by @kinarsardhara. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span> */}
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <Link
              to="https://www.linkedin.com/in/kinarsardhara222/"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </Link>

            <Link to="https://instagram.com/kinar.sardhara" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
