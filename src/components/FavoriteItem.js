import { Box, Button, Divider, Typography } from "@mui/material";
import { favoriteAction } from "../store/FavoriteStore";
import { useDispatch } from "react-redux";
import { memo } from "react";

const FavoriteItem = ({ items }) => {
  const dispatch = useDispatch();

  const RemoveMovieHandler = () => {
    dispatch(favoriteAction.removeFavorite(items.id));
  };
  return (
    <Box
      sx={{
        width: 300,
        height: 400,
        background: `url(https://image.tmdb.org/t/p/w500/${items.poster_path})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          height: 1,
          transition: ".5s",
          opacity: 0,
          background: `rgba(77, 77, 77, .9)`,
          "&:hover": {
            opacity: 1,
            ".title": { paddingTop: "30%" },
            ".divider": { width: 0.5, transitionDelay: "0.2s" },
            ".button": {
              opacity: 1,
              mt: 3,
              transition: ".5s",
            },
          },
        }}
      >
        <Typography
          className="title"
          pl={2}
          pt={"50%"}
          variant="h6"
          fontSize={30}
          fontFamily="serif"
          color="white"
          sx={{ transition: ".5s" }}
        >
          {items.title}
          <Divider
            className="divider"
            sx={{
              transition: ".5s",
              width: 0,
              borderBottom: "solid 2px #fff",
            }}
          />
        </Typography>
        <Button
          onClick={RemoveMovieHandler}
          variant="outlined"
          className="button"
          sx={{
            borderColor: "white",
            color: "white",
            opacity: 0,
            ml: 2,
            mt: 20,
            "&:hover": {
              borderColor: "black",
              backgroundColor: "black",
            },
          }}
        >
          Remove from Wishlist
        </Button>
      </Box>
    </Box>
  );
};

export default memo(FavoriteItem);
