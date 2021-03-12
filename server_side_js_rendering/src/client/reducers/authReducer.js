export default function (state = null, action) {
  switch (action.type) {
    case 'FETCH_CURRENT_USER':
      console.log(action);
      return action.payload || false;
    default:
      return state;
  }
}
