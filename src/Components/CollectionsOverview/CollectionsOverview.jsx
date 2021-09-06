import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from "../../Redux/Shop/shopSelector";
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import "./CollectionsOverview.scss";

const CollectionsOverview = ({collections}) => {
    return (
      <div className="collections-overview">
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
}

const mapStatetoProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
 
export default connect(mapStatetoProps)(CollectionsOverview);