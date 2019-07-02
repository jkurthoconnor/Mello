import React from 'react';
import PropTypes from 'prop-types';

import Board from './Board';
import * as actions from '../../actions/BoardActions';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());

    const boardId = +this.props.match.params.id;

    store.dispatch(actions.fetchSingleBoard(boardId));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    const store = this.context.store;
    const regex = new RegExp('^/board')
    let boardId;
    let cardId;

    if (this.props.match.url.match(regex)){
      boardId = +this.props.match.params.id;
    } else {
      cardId = +this.props.match.params.id
      boardId = +store.getState().cards.find(card => card.id === cardId).board_id
    }

    const board = store.getState().boards.find( (board) => board.id === boardId);
    return (
      <Board board={board} />
    )
  }
}

export default BoardContainer;
