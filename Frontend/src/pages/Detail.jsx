import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import { wishlistFunc } from "../redux/slices/Slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToBasket } from "../redux/slices/Slice";
import { Helmet } from "react-helmet";
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading, error, wishlist, basket } = useSelector(
    (state) => state.pastries
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  const elem = data.find((detail) => detail.id == id);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="detail">
        <Grid container className="cont">
          <Grid xl={12} xs={12} md={12} sm={12} lg={12} className="card">
            <img src={elem.imgSrc} width="350px" alt="" />
            <p>{elem.name}</p>
            <p>${elem.price}</p>
            <div className="buttons">
              <button
                className="cart"
                onClick={() => {
                  dispatch(addToBasket(elem));
                  console.log("hey");
                  console.log(basket);
                }}
              >
                add to cart
              </button>
              <button onClick={() => dispatch(wishlistFunc(elem))}>
                {wishlist.find((wish) => wish.id == elem.id) ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Detail;
