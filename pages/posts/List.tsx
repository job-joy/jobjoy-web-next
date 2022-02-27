import React from "react";
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
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import Link from "next/link";
import axios from "axios";

const List = (props:any) => {
  console.log(props);

  return (
    <>
      {props.posts?.map((x:any) => (
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardMedia
            component="img"
            height="100px"
            image={x.image}
            alt="green iguana"
          />
          <CardContent>
            <Tooltip title={x.user.email}>
              <Typography gutterBottom variant="h5" component="div">
                {x.user.name}
              </Typography>
            </Tooltip>
            <Typography variant="body2" color="text.secondary">
              {x.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Save</Button>
            <IconButton aria-label="add to favorites">
              {/* <FavoriteIcon /> */}
            </IconButton>
            <IconButton aria-label="add to favorites">
              <Link
                href={`/comment/${x._id}`}
                // query={x}
                // style={{ textDecoration: "none" }}
              >
                {/* <CreateNewFolderIcon style={{ color: "gray" }} /> */}
              </Link>
            </IconButton>
          </CardActions>
          {/* <Stack direction="row" style={{ flexWrap: "wrap" }}>
            {x.tags.map((x) => (
              <Chip label={x} style={{ margin: 5 }} />
            ))}
          </Stack> */}
        </Card>
      ))}
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
export default List;
