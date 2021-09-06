import React from "react";
import { Route } from "react-router";

import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/CollectionPage";

const Shop = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
