import React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import { wishlistFunc } from "../redux/slices/Slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToBasket } from "../redux/slices/Slice";
import { increase } from "../redux/slices/Slice";
import { decrease } from "../redux/slices/Slice";
import { removeItem } from "../redux/slices/Slice";
import { Helmet } from "react-helmet";
const Basket = () => {
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
        <title>Basket</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="wishlist">
        <Grid container className="cont">
          {basket &&
            basket.map((elem) => {
              return (
                <Grid xl={4} xs={12} md={4} sm={6} lg={4} className="card">
                  <img src={elem.imgSrc} width="350px" alt="" />
                  <p>{elem.name}</p>
                  <p>${elem.price}</p> <p>quantity:{elem.quantity}</p>
                  <div className="buttons">
                    <button onClick={() => dispatch(wishlistFunc(elem))}>
                      {wishlist.find((wish) => wish.id == elem.id) ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </button>
                    <button
                      className="inc"
                      onClick={() => dispatch(increase(elem))}
                    >
                      +
                    </button>
                    <button
                      className="inc"
                      onClick={() => dispatch(decrease(elem))}
                    >
                      -
                    </button>
                    <button
                      className="inc delete"
                      onClick={() => dispatch(removeItem(elem))}
                    >
                      delete
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

export default Basket;
