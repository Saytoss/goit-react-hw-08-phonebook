import React, { Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import routes from "../../routes";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import Spinner from "../../common/Spinner/Spinner";
import styles from "./Content.module.css";

function Content() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map((route) =>
            route.private ? (
              <PrivateRoute key={route.name} {...route} />
            ) : (
              <PublicRoute key={route.name} {...route} />
            )
          )}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default Content;
