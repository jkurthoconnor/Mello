import React from "react";
import PropTypes from "prop-types";
import CardModal from "./CardModal";
import * as actions from "../../actions/BoardActions";

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  handleUpdateCard = attributes => {
    const store = this.context.store;
    const card = store
      .getState()
      .cards.find(card => card.id === +this.props.match.params.id);

    store.dispatch(actions.updateCard(card.id, attributes));
  };

  handleGetCard = () => {
    const store = this.context.store;
    return store
      .getState()
      .cards.find(card => card.id === +this.props.match.params.id);
  };

  render() {
    const store = this.context.store;
    const card = this.handleGetCard();
    const list = store.getState().lists.find(list => list.id === card.list_id);
    console.log(card);

    return (
      <CardModal
        card={card}
        list={list}
        boardId={list.board_id}
        onUpdateCard={this.handleUpdateCard}
        onGetCard={this.handleGetCard}
      />
    );
  }
}

export default CardContainer;
