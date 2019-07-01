import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

class ToggleableAddCard extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  state = {
    title: '',
  };

  handleOnChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleCardAddClick = e => {
    e.preventDefault();

    const store = this.context.store;
    store.dispatch(
      actions.createCard(this.props.listId, {title: this.state.title}, () => {
        this.setState({
          title: '',
        });
        this.props.onAddFormClose();
      }),
    );
  };

  render() {
    let classList = 'add-dropdown add-bottom';

    if (this.props.formOpen) {
      classList += ' active-card';
    }

    return (
      <React.Fragment>
        <div className={classList}>
          <div className="card">
            <div className="card-info"></div>
            <textarea
              name="add-card"
              onChange={this.handleOnChange}
              value={this.state.title}
            ></textarea>
            <div className="members"></div>
          </div>
          <a className="button" onClick={this.handleCardAddClick}>
            Add
          </a>
          <i className="x-icon icon" onClick={this.props.onAddFormClose}></i>
          <div className="add-options">
            <span>...</span>
          </div>
        </div>

        <div
          className="add-card-toggle"
          data-position="bottom"
          onClick={this.props.onAddCardClick}
        >
          Add a card...
        </div>
      </React.Fragment>
    );
  }
}

export default ToggleableAddCard;
