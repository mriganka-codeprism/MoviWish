import { Grid } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { favoriteAction } from "../store/FavoriteStore";
import CustomBox from "./CustomMovieItem";

const InfiniteScroll = ({ items }) => {
  const dispatch = useDispatch();
  const [maxItems, setMaxItems] = useState(10);

  const observer = useRef();
  const lastEl = (node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setMaxItems((state) => state + 9);
        if (items.length - maxItems < 9) dispatch(favoriteAction.incrementPage());
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <>
      <Grid container>
        {items.slice(0, maxItems).map((item, index) => {
          if (index + 1 === maxItems)
            return (
              <Grid
                item
                xs
                md={4}
                key={item.id}
                display="flex"
                justifyContent="center"
              >
                <div ref={lastEl}>
                  <CustomBox items={item}></CustomBox>
                </div>
              </Grid>
            );
          return (
            <Grid
              item
              key={item.id}
              xs
              md={4}
              display="flex"
              justifyContent="center"
            >
              <CustomBox items={item}></CustomBox>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default InfiniteScroll;