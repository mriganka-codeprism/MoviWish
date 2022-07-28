import { AppBar, Toolbar, Typography, Tabs, Tab, Chip } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const favorite_items = useSelector((state) => state.favorite.favorites);
  const navigate = useNavigate();

  const TabChangeHandler = (e, newVal) => {
    setValue(newVal);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        mb: 2,
        backgroundColor: `rgba(10, 25, 41, 0.7)`,
        backdropFilter: `blur(20px)`,
      }}
    >
      <Toolbar sx={{ flexDirection: "column", p: 1 }}>
        <Typography fontWeight={"bold"} variant="h4" color={"error.dark"}>
          MoviWish
        </Typography>
        <Tabs value={value} onChange={TabChangeHandler} textColor='inherit'>
          <Tab label="Home" onClick={() => navigate("/")} disableRipple/>
          <Tab
            label="WishList"
            onClick={() => navigate("/wishlist")}
            icon={favorite_items.length > 0 ? <Chip label={favorite_items.length} sx={{backgroundColor: `rgba(255,255,255,0.16)`}} size="small"/>: null}
            iconPosition="end"
            disableRipple
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
