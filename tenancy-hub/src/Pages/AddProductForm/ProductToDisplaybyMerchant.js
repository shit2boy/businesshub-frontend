import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import FormInput from "../../components/Form-input/form-input.component";
// import SelectInput from "../../components/Select-form-Input/SelectInput";
// import { Link } from "react-router-dom";

const ProductToDisplaybyMerchant = () => {
  useEffect(() => {
    setItemToDisplay([]);
  }, []);

  const [itemToDisplay, setItemToDisplay] = useState([]);
  // const [itemToDisplay, setItemToDisplay] = useState([])

  //   const onFilter = (e) => {
  //     const filter = itemToDisplay.filter((item) => {
  //     //   console.log(item["name"]);
  //     //   console.log(e.target.value);
  //       return (
  //         item["name"].toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
  //       );
  //     });
  //     setText(filter);
  //     if (e.target.value === "") setText(repos);
  //   };

  return (
    <div className="product-form">
      <div className="text-center">
        <h5>Products available to display to your customer</h5>
      </div>
      <form>
        <FormInput
          style={{ width: "40%" }}
          type="search"
          label="Filter Product"
          placeholder="Filter product..."
        />
      </form>
      <Table hover borderless responsive>
        <thead>
          <tr>
            <th>Items</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {itemToDisplay.map((t, index) => (
            <tr key={index}>
              <td>
                <img
                  src={t.image}
                  className="img-fluid"
                  alt="item"
                  width="100px"
                />
              </td>
              <td>{t.title} name</td>
              {/* <td>
                {" "}
                <span onClick={() => decreaseCart(t)} className="pointer">
                  {" "}
                  &#10094;{" "}
                </span>
                {t.quantity}{" "}
                <span onClick={() => addToCart(t)} className="pointer">
                  {" "}
                  &#10095;
                </span>
              </td> */}
              <td>&#8358; {t.price}price </td>
              <td>
                <select
                  //   value=
                  //   onChange={handleChange}
                  name="shopId"
                >
                  <option value="SELECT STORE">SELECT STORE</option>
                  <option value="edit">Edit</option>
                  <option value="Delete">
                    Delete{" "}
                    <i
                      className="fas fa-trash fa-lg p-2"
                      style={{ color: "black" }}
                    ></i>
                  </option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductToDisplaybyMerchant;
