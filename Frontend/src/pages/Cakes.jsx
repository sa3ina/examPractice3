import React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import { wishlistFunc } from "../redux/slices/Slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToBasket } from "../redux/slices/Slice";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Cakes = () => {
  const dispatch = useDispatch();
  const { data, loading, error, wishlist, basket } = useSelector(
    (state) => state.pastries
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cakes</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="cakes">
        <Grid container className="cont">
          {data &&
            data.map((elem) => {
              return (
                <Grid xl={4} xs={12} md={4} sm={6} lg={4} className="card">
                  <img src={elem.imgSrc} width="350px" alt="" />
                  <Link to={`/${elem.id}`} className="link">
                    <p>{elem.name}</p>
                  </Link>
                  <p>${elem.price}</p>
                  <div className="buttons">
                    <button
                      className="cart"
                      onClick={() => {
                        dispatch(addToBasket(elem));
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
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default Cakes;
