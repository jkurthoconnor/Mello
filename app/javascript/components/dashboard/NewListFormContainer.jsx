import React from 'react';
import NewListForm from './NewListForm';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

class NewListFormContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    formOpened: false,
    title: '',
  }

  handleTitleClick = (e) => {
    e.stopPropagation();
    this.setState({
      formOpened: true,
    });
  }

  handleCloseClick = (e) => {
    e.stopPropagation();
    
    this.setState({
      formOpened: false,
    });
    
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmitClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    const store = this.context.store;

    store.dispatch(actions.createList(this.props.boardId, {title: this.state.title}, () => {
      this.setState({
        title: '',
        formOpened: false,
      })
    }));
  }

  render() {
    return (
      <NewListForm
        formOpened={this.state.formOpened}
        title={this.state.title}
        onTitleClick={this.handleTitleClick}
        onCloseClick={this.handleCloseClick}
        onTitleChange={this.handleTitleChange}
        onSubmitClick={this.handleSubmitClick}
      />
    )
  }
}

export default NewListFormContainer