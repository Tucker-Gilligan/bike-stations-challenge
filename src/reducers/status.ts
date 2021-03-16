import { StationStatus, ActionTypes, Action } from '../actions';

export const stationStatusReducer = (
  state: StationStatus[] = [],
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchStationStatus:
      return action.payload;
    default:
      return state;
  }
};
