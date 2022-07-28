import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FavoriteItem from './FavoriteItem'

export const Favorites = () => {
  const favorite_items = useSelector((state) => state.favorite.favorites);
  return (
    <>
      <Grid container spacing={2}>
        {favorite_items.map((item) => {
          return <Grid
            item
            xs
            md={4}
            key={item.id}
            display="flex"
            justifyContent="center"
          >
            <FavoriteItem items={item} />
          </Grid>;
        })}
      </Grid>
    </>
  );
};

export default Favorites;
