import React, { lazy, Fragment, Suspense } from "react";
import NavBar from "./components/NavBar/NavigationBar";
import { Route, Switch } from "react-router-dom";
// import Login from "./Pages/Login-Modal/Login";
// import SignUp from "./Pages/SignUp/SignUp";
import Homepage from "./Pages/Homepage";
// import MerchantDashboard from "./Pages/Dashboard/Merchant-Dashboard";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Products from "./Pages/Products";
import { store, persistor } from "./Store";

import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PrivateRoute from "./components/routing/PrivateRoute";
import setAuthToken from "./utils/SetAuthToken";
import RegisterCustomer from "./Pages/Customer-Register/RegisterCustomer";
import "./App.css";

const Login = lazy(() => import("./Pages/Login-Modal/Login"));
const SignUp = lazy(() => import("./Pages/SignUp/SignUp"));
const AddFormProduct = lazy(() =>
  import("./Pages/AddProductForm/AddFormProduct")
);
const Carts = lazy(() => import("./Pages/Cart/Carts"));
const VerifyMercchant = lazy(() =>
  import("./Pages/VerifyAccount/Verify-Merchant")
);
const PaymentPage = lazy(() => import("./Pages/Cart/Carts"));
const Checkout = lazy(() => import("./Pages/Checkout/Checkout"));
const PayWithRaveBtn = lazy(() =>
  import("./components/RaveGateway/PayWithRaveBtn")
);
const CreateShop = lazy(() => import("./Pages/CreateShop/CreateShop"));
const MerchantDashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const MerchantShop = lazy(() => import("./Pages/Merchant-Stores/MerchantShop"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Fragment>
          <NavBar />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/Login" component={Login} />
              <Route path="/admin" component={MerchantDashboard} />
              <Route path="/online-store/:storeName" component={Products} />
              <Route path="/merchant-corner" component={Homepage} />
              <Route path="/cart" component={Carts} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/selectshop" component={MerchantShop} />
              <Route path="/registration-fee" component={PaymentPage} />
              <Route path="/payment" component={PayWithRaveBtn} />
              <Route path="/verify-merchant" component={VerifyMercchant} />
              <Route path="/add-product" component={AddFormProduct} />
              <Route path="/create-shop" component={CreateShop} />
              {/* <Route path="/admin" component={MerchantDashboard} /> */}
              <Route path="/register" component={SignUp} />
              <Route path="/register-customer" component={RegisterCustomer} />
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
          <ToastContainer />
        </Fragment>
      </PersistGate>
    </Provider>
  );
};

export default App;
