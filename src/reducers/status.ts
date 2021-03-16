import {
  StationStatus,
  // FetchStationStatusAction,
  ActionTypes,
  // DisplayStatusAction,
  Action,
} from '../actions';

export const stationStatusReducer = (
  state: StationStatus[] = [],
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchStationStatus:
      return action.payload;
    // case ActionTypes.displayStatus:
    //   return state.find(station => station.station_id === action.payload);
    default:
      return state;
  }
};
