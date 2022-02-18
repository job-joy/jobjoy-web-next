import { Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import DraftsIcon from "@mui/icons-material/Drafts";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <div
        style={{
          bottom: 0,
          width: "100%",
          background: `linear-gradient(90deg, rgba(47,87,147,1) 0%, rgba(208,138,137,1) 43%, rgba(110,102,139,1) 91%)`,
          height: 200,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "23%",
            height: "80%",
          }}
        >
          <Typography variant="h5">LOCATION</Typography>
          <Typography variant="overline">Some Where in Iran</Typography>
          <Typography variant="overline">lorem</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "33%",
            height: "80%",
          }}
        >
          <Typography variant="h5">ABOUT</Typography>
          <Typography
            variant="overline"
            style={{ display: "flex", flexWrap: "wrap", height: "80px" }}
          >
            this is sample page created to demonstrate converting bootstrap
            theme to react
          </Typography>
        </div>
      </div>
      {/* <div
        style={{
          background: "#1A252F",
          bottom: 0,
          width: "99%",
          height: 20,
          position: "static",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "60%",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TwitterIcon
            style={{ color: "#ffff", fontSize: 17, cursor: "pointer" }}
          />
          <DraftsIcon
            style={{ color: "#ffff", fontSize: 17, cursor: "pointer" }}
          />
          <LinkedInIcon
            style={{ color: "#ffff", fontSize: 17, cursor: "pointer" }}
          />
          <GitHubIcon
            style={{ color: "#ffff", fontSize: 17, cursor: "pointer" }}
          />
        </div>
      </div> */}
    </>
  );
};
export default Footer;
