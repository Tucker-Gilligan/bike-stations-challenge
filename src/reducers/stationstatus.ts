import { StationStatus, FetchStationStatusAction } from '../actions';
import { ActionTypes } from '../actions/types';
export const stationStatusReducer = (
  state: StationStatus[] = [],
  action: FetchStationStatusAction
) => {
  switch (action.type) {
    case ActionTypes.fetchStationStatus:
      return action.payload;
    default:
      return state;
  }
};
