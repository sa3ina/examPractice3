import React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import { wishlistFunc } from "../redux/slices/Slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Helmet } from "react-helmet";
const Wishlist = () => {
  const dispatch = useDispatch();
  const { data, loading, error, wishlist } = useSelector(
    (state) => state.pastries
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="wishlist">
        <Grid container className="cont">
          {wishlist &&
            wishlist.map((elem) => {
              return (
                <Grid xl={4} xs={12} md={4} sm={6} lg={4} className="card">
                  <img src={elem.imgSrc} width="350px" alt="" />
                  <p>{elem.name}</p>
                  <p>${elem.price}</p>
                  <div className="buttons">
                    <button className="cart">add to cart</button>
                    <button onClick={() => dispatch(wishlistFunc(elem))}>
                      <FavoriteIcon />
                    </button>
                  </div>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default Wishlist;
