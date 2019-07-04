export default function actionsReducer(state = [], action) {
  if (action.type === "UPDATE_CARD_SUCCESS") {
    console.log(state);
    let filteredActions = state.filter(a => a.card_id !== action.card.id);
    return filteredActions.concat(action.card.actions);
  } else {
    return state;
  }
}
