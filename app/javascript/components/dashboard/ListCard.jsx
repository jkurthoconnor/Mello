import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

class ListCard extends React.Component {

  handleModalOpen() {

  }

  render() {
    return (
    <Link to={`/cards/${this.props.card.id}`}>
      <div className="card-background">
        <div className="card " onClick={}>
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            <p>{this.props.card.title}</p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon overdue-recent">{this.props.card.due_date}</i>
            <i className="description-icon sm-icon"></i>
            <i className="comment-icon sm-icon"></i>
          </div>
        </div>
      </div>
    </Link>
    );
  }
}

export default ListCard;
