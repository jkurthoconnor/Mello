import React from 'react';

const NewListForm = (props) => {
  let classes = "new-list";

  if (props.formOpened) {
    classes = classes + ' selected';
  }
  return (
    <div
      id="new-list"
      className={classes}
      onClick={props.onTitleClick}
    >
      <span>Add a list...</span>
      <input
        type="text" 
        placeholder="Add a list..."
        value={props.title}
        onChange={props.onTitleChange}
      />
      <div>
        <input
          type="submit"
          className="button"
          value="Save"
          onClick={props.onSubmitClick}
        />
        <i
          className="x-icon icon"
          onClick={props.onCloseClick}
        ></i>
      </div>
    </div>
  )
}

export default NewListForm
