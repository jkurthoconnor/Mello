export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const lists = action.board.lists;

    const listsWithoutCards = lists.map( list => {
      const {cards, ...listWithoutCards} = list;
      return listWithoutCards;
    });

    const excludedLists = state.filter(list => list.board_id !== action.board.id);
    return excludedLists.concat(listsWithoutCards);
  } else {
    return state;
  }
}
