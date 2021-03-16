import { combineReducers } from 'redux';
import { stationInfoReducer } from './stationinfo';
import { stationStatusReducer } from './stationstatus';
import { StationInformation, StationStatus } from '../actions';

export interface StoreState {
  stationInformation: StationInformation[];
  stationStatus: StationStatus[];
}

export const reducers = combineReducers({
  stationInformation: stationInfoReducer,
  stationStatus: stationStatusReducer,
});
