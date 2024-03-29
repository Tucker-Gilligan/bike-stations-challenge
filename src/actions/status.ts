import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface StationStatus {
  station_id: number;
  num_bikes_available: number;
  status: string;
  num_docks_disabled: number;
}

export interface StationsStatusList {
  stations: StationStatus[];
}

export interface StationStatusRes {
  data: StationsStatusList;
}

export interface FetchStationStatusAction {
  type: ActionTypes.fetchStationStatus;
  payload: StationStatus[];
}

export const fetchStationStatus = () => {
  const stationStatusUrl =
    'https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status';
  return async (dispatch: Dispatch) => {
    const response = await axios
      .get<StationStatusRes>(stationStatusUrl)
      .then(res => res.data.data.stations);

    dispatch<FetchStationStatusAction>({
      type: ActionTypes.fetchStationStatus,
      payload: response,
    });
  };
};
