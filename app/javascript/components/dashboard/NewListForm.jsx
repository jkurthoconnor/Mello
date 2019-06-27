import React from 'react';
import PropTypes from 'prop-types';

const NewListForm = (props) => {
  let classes = "new-list"

  if (props.opened) {
    classes = classes + ' selected'
  }
  return (
        <div id="new-list" className={classes} onClick={props.onTitleChange}><span>Add a list...</span>
            <input type="text" placeholder="Add a list..." />
            <div>
                <input type="submit" className="button" value="Save" /><i className="x-icon icon"></i>
            </div>
        </div>
  )
}

export default NewListForm