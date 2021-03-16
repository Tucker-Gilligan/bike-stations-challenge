import { StationInformation, FetchStationInformationAction } from '../actions';
import { ActionTypes } from '../actions/types';
export const stationInfoReducer = (
  state: StationInformation[] = [],
  action: FetchStationInformationAction
) => {
  switch (action.type) {
    case ActionTypes.fetchStationInformation:
      return action.payload;
    default:
      return state;
  }
};
