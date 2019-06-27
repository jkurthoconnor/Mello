import React from 'react';

class NewListFormContainer extends React.Component {
  state = {
    opened: false;
  }

  handleTitleChange() {
    this.setState({
      opened: true;
    })
  }

  render() {
    return (
      <NewListForm
        onTitleChange={handleTitleChange}
      />
    )
  }
}