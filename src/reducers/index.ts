import { combineReducers } from 'redux';
import { stationInfoReducer } from './info';
import { stationStatusReducer } from './status';
import { StationInformation, StationStatus } from '../actions';

export interface StoreState {
  stationInformation: StationInformation[];
  stationStatus: StationStatus[];
}

export const reducers = combineReducers({
  stationInformation: stationInfoReducer,
  stationStatus: stationStatusReducer,
});
