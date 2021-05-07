import React, { useEffect } from "react";
import { toast } from "react-toastify";
// import { Skeleton } from "antd";
import Skeleton from "react-loading-skeleton";
import ProductCard from "../components/Productcard/ProductCard";
import { connect } from "react-redux";
import { addToCart, getItems, getProducts } from "../actions/productAction";
import { BackTop } from "antd";
import "antd/dist/antd.css";
import Banner from "../components/Carousell/Banner";

const Products = ({
  product: { items, loading, currencyId },
  match,
  addToCart,
  getItems,
  getProducts,
}) => {
  // const [currencyId, setCurrencyId] = useState("");
  const notify = () =>
    toast.success("Added to cart !", {
      position: "top-right",
      autoClose: 2000,
    });

  const onClickToCart = (item) => {
    addToCart(item);
    notify();
  };
  const {
    params: { storeName },
  } = match;

  useEffect(() => {
    if (localStorage.token && localStorage.userType === "MERCHANT") {
      getItems(storeName);
    } else {
      // setCurrencyId(localStorage.currencyId);
      // if (!localStorage.currencyId || localStorage.currencyId === null) {
      // localStorage.setItem("currencyId", 1);
      getProducts(currencyId);
      // } else {
      //   localStorage.setItem("currencyId", currencyId);
      //   getProducts(currencyId);
      // }
    }

    //eslint-disable-next-line
  }, []);

  // if (items !== null && loading) {
  //   return (

  //   );
  // }

  return (
    <>
      <div className="h-25">
        <Banner />
      </div>
      {items !== null && loading ? (
        <div className="container mt-5">
          {[...new Array(15)].map((_, index) => (
            <Skeleton
              className="col-lg-2 col-sm col-md-3 m-2"
              key={index}
              width={300}
              height={200}
            />
          ))}
        </div>
      ) : items.length > 0 ? (
        <div className="container-fluid mt-5" style={{ marginBottom: "100px" }}>
          <div className="row">
            {items.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onClickToCart={onClickToCart}
              />
            ))}
          </div>
          <BackTop />
        </div>
      ) : (
        <div className="order-empty">
          <div className="mt-5">
            <h6>No item in store</h6>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { addToCart, getProducts, getItems })(
  Products
);
