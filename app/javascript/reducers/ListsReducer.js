export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const lists = action.board.lists;

    const listsWithoutCards = lists.map( list => {
      const {cards, ...listWithoutCards} = list;
      return listWithoutCards;
    });

    const excludedLists = state.filter(list => list.board_id !== action.board.id);
    return excludedLists.concat(listsWithoutCards);
  } else if (action.type === 'CREATE_LIST_SUCCESS') {
      return state.concat(action.list);
  } else if (action.type === 'UPDATE_LIST_SUCCESS') {
      return state.map(list => {
        if (list.id === action.list.id) {
          return action.list;
        } else {
          return list;
        }
      });
  } else {
    return state;
  }
}
