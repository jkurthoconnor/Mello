export default function cardsReducer(state = [], action) {

  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const lists = action.board.lists;
    let cards = [];

    lists.forEach( list => {
      cards.concat(...list.cards);
    })

    return cards;
  } else {
    return state;
  }
}
