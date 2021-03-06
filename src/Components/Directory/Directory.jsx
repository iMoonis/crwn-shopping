import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../Redux/Directory/directorySelector';

import MenuItem from '../MenuItem/MenuItem'
import './directory.scss'

const Directory = ({sections}) => {
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
 
export default connect(mapStateToProps)(Directory);