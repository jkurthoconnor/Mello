import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

import ListCard from './ListCard';

class ListCardsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    let cards = this.context.store
      .getState()
      .cards.filter(card => card.list_id === this.props.listId);

    cards = cards.map(card => <ListCard key={card.id} card={card} />);

    const dataId = `list-${this.props.listId}-cards`;

    return (
      <div id="cards-container" data-id={dataId}>
        {cards}
      </div>
    );
  }
}

export default ListCardsContainer;
