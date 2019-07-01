import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

import ToggleableAddCard from './ToggleableAddCard';
import ListCardsContainer from './ListCardsContainer';

class ListWrapper extends React.Component {
  state = {
    title: this.props.list.title,
    editing: false,
    addCardFormOpen: false,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  handleAddCardClick = () => {
    this.setState({
      addCardFormOpen: true,
    });
  };

  handleOnClick = () => {
    this.setState({
      editing: true,
    });
  };

  handleAddFormClose = () => {
    this.setState({
      addCardFormOpen: false,
    });
  };

  handleOnChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleOnBlur = () => {
    const store = this.context.store;

    store.dispatch(
      actions.updateListTitle(this.props.list.id, this.state.title, () => {
        this.setState({
          editing: false,
        });
      }),
    );
  };

  render() {
    let classList = 'list-wrapper';

    if (this.state.addCardFormOpen) {
      classList += ' add-dropdown-active';
    }

    return (
      <div className={classList}>
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              {!this.state.editing ? (
                <p className="list-title" onClick={this.handleOnClick}>
                  {this.state.title}
                </p>
              ) : (
                <input
                  type="text"
                  className="list-title"
                  value={this.state.title}
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                />
              )}
            </div>
            <div className="add-dropdown add-top">
              <div className="card"></div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <ListCardsContainer listId={this.props.list.id} />
            <ToggleableAddCard
              onAddCardClick={this.handleAddCardClick}
              formOpen={this.state.addCardFormOpen}
              onAddFormClose={this.handleAddFormClose}
              listId={this.props.list.id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListWrapper;
