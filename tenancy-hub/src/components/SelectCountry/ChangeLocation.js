import React, { useEffect, useState } from "react";
import { getCurrencyType } from "../../Services/CreateShoputil";
import { connect } from "react-redux";
import { getProducts, getCurrencyId } from "../../actions/productAction";
import "./changelocation.css";

const ChangeLocation = ({ currencyId, getCurrencyId, getProducts }) => {
  const [currency, setCurrency] = useState([]);
  const [location, setLocation] = useState({});
  useEffect(() => {
    getCurrencyType(setCurrency);
    localStorage.setItem("currencyId", currencyId);
    // eslint-disable-next-line
  }, []);

  const onChanges = (e) => {
    setLocation({
      ...location,
      locationId: e.target.value,
    });
    getCurrencyId(e.target.value);
    getProducts(e.target.value);

    console.log(location);
  };

  return (
    <div>
      <select
        className="location"
        //   value={shopcreated.shopId}
        onChange={onChanges}
        name="locationId"
        //   {!riderAvailable ? disabled: null}
      >
        <option value="1 ">Select country</option>
        {currency.map((s) => (
          <option key={s.id} value={s.id}>
            {s.countryName}
            {/* Nigeria */}
          </option>
        ))}
      </select>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currencyId: state.product.currencyId,
});

export default connect(mapStateToProps, { getProducts, getCurrencyId })(
  ChangeLocation
);
