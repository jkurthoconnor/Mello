import React from "react";
import PropTypes from "prop-types";
import CardModal from "./CardModal";
import * as actions from "../../actions/BoardActions";

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    let store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleFetchCard = id => {
    this.context.store.dispatch(actions.fetchCard(id))
  }

  handleCreateComment = (id, comment) => {
    this.context.store.dispatch(actions.createComment(id, comment))
  }

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
    const comments = store.getState().comments.filter(comment => comment.card_id === card.id)

    return (
      <CardModal
        card={card}
        comments={comments}
        list={list}
        boardId={list.board_id}
        onUpdateCard={this.handleUpdateCard}
        onGetCard={this.handleGetCard}
        onFetchCard={this.handleFetchCard}
        onCreateComment={this.handleCreateComment}
      />
    );
  }
}

export default CardContainer;
