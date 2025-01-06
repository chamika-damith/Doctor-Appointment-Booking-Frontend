export const initialState = [];

export function relatedDoctorReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_RELATED_DOCTORS':
      return [...state, action.payload];
    default:
      return state;
  }
}
