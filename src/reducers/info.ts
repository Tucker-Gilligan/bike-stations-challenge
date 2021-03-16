import {
  StationInformation,
  FetchStationInformationAction,
  ActionTypes,
} from '../actions';

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
