import React from "react";
import navs from "./Navs";
import { Route } from "react-router-dom";
import App from "../../App";


const user = {
    username: "",
    role: "",
    isAuthenticated: false,
  };



const AllRoutes = () => {
  const routes = () => {
    return (
      <Route path={"/"} element={<App />}>
        {navs.map((nav, i) => {
          if (user.isAuthenticated) {
            if (nav.isVisibleAfterAuthentication) {
              if (user.role === nav.role || nav.role === "ALL") {
                console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (
              !nav.authenticationRequired &&
              nav.role === "ALL"
            ) {
              console.log(nav);
              console.log("else else if");
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    );
  };
  return routes();
}

export default AllRoutes;
