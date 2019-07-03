import React from "react";
import PropTypes from "prop-types";
import CardModal from "./CardModal";

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const store = this.context.store;
    const card = store
      .getState()
      .cards.find(card => card.id === +this.props.match.params.id);
    return <CardModal card={card} />;
  }
}

export default CardContainer;
