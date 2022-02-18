import logo from "../../images/12 (1).jpg";
import { Select, MenuItem, Typography } from "@mui/material";

const Profile = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "50%", height: "100%" }}>
        <img src={logo} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div style={{ width: "50%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2">add you favorites</Typography>

          <Select
            width={"80%"}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>program</MenuItem>
          </Select>

          <Typography variant="body2">add Posts</Typography>
        </div>
      </div>
    </div>
  );
};

export default Profile;
