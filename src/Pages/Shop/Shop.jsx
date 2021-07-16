import React, { Component } from 'react'
import SHOP_DATA from './SHOP_DATA'
import CollectionPreview from '../../Components/Collection/CollectionPreview';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() { 
        return (
            <div>
                {this.state.collections.map(({ id, ...otherCollection }) => <CollectionPreview key={id} {...otherCollection} />)}
            </div>
        );
    }
}
 
export default Shop;