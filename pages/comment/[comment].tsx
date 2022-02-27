import React from "react";
import axios from "axios";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";

const Comment = (props:any) => {
  console.log('props: ', props);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <Card sx={{ maxWidth: "100%", margin: 5 }}>
            <CardMedia
              component="img"
              height="100px"
              alt="green iguana"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Tooltip title="test">
                <Typography gutterBottom variant="h5" component="div">
                  {/* {state.state.user.name} */}
                </Typography>
              </Tooltip>
              <Typography variant="body2" color="text.secondary">
                {/* {state.state.title} */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Save</Button>

              <IconButton aria-label="add to favorites"></IconButton>
            </CardActions>
          </Card>
        </div>
        <div style={{ width: "50%" }}>
          <Card sx={{ maxWidth: "100%", margin: 5 }}>
            <CardContent>
              <Tooltip title="test">
                <Typography gutterBottom variant="h5" component="div">
                  Add your comment
                </Typography>
              </Tooltip>
              <Typography variant="body2" color="text.secondary">
                <textarea
                  // type="textarea"
                  style={{ outline: "none" }}
                  // rows="4"
                  // cols="95"
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Send</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3001/posts");
  return {
    props: {
      posts: response.data,
    },
  };
}

export default Comment;
