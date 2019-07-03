import React from "react";
import PropTypes from "prop-types";
import * as actions from "../../actions/BoardActions";
import { Link } from "react-router-dom";
import moment from "moment";

class ListCard extends React.Component {
  hasDescription() {
    const desc = this.props.card.description;
    return desc && desc.trim() !== "";
  }

  hasComments() {
    const count = this.props.card.comments_count;
    return count > 0;
  }

  dueDate() {
    const card = this.props.card;
    const dateClass = this.getDateClass(card);
    return card.due_date ? (
      <i className={"clock-icon sm-icon " + dateClass}>
        {moment(this.props.card.due_date).format("MMM D")}
      </i>
    ) : null;
  }

  getDateClass(card) {
    if (card.completed) {
      return "completed";
    } else if (moment(card.due_date).isBetween(moment().subtract(2, "days"))) {
      return "due-soon";
    } else if (moment().isAfter(card.due_date)) {
      return "overdue";
    } else {
      return "";
    }
  }

  render() {
    const labels = this.props.card.labels.map(label => {
      const classes = `card-label ${label} colorblindable`;

      return <div className={classes}></div>;
    });
    return (
      <Link to={`/cards/${this.props.card.id}`}>
        <div className="card-background">
          <div className="card ">
            <i className="edit-toggle edit-icon sm-icon"></i>
            <div className="card-info">
              {labels}
              <p>{this.props.card.title}</p>
            </div>
            <div className="card-icons">
              {this.dueDate()}

              {this.hasDescription() ? (
                <i className="description-icon sm-icon"></i>
              ) : null}

              {this.hasComments() ? (
                <i className="comment-icon sm-icon"></i>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ListCard;
