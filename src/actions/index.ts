// https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information
// https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface StationInformation {
  station_id: number;
  name: string;
  address: string;
  capacity: number;
  rental_methods: string[];
}

export interface StationsInfoList {
  stations: StationInformation[];
}

export interface StationsInfoRes {
  data: StationsInfoList;
}

export interface FetchStationInformationAction {
  type: ActionTypes.fetchStationInformation;
  // payload: StationsInfoList;
  payload: StationInformation[];
}

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
  // payload: StationsStatusList;
}

//we will sort by name
export const fetchStationInformation = () => {
  const stationInfoUrl =
    'https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information';
  return async (dispatch: Dispatch) => {
    const response = await axios
      .get<StationsInfoRes>(stationInfoUrl)
      .then(res => {
        return res.data.data.stations;
        // console.log('fetching station info', res.data.data.stations);
      });

    console.log('info', response);
    dispatch<FetchStationInformationAction>({
      type: ActionTypes.fetchStationInformation,
      payload: response,
    });
  };
};

//we will sort by availability
export const fetchStationStatus = () => {
  const stationStatusUrl =
    'https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status';
  return async (dispatch: Dispatch) => {
    const response = await axios
      .get<StationStatusRes>(stationStatusUrl)
      .then(res => res.data.data.stations);
    // .catch(error => 'error');

    console.log('status', response);

    dispatch<FetchStationStatusAction>({
      type: ActionTypes.fetchStationStatus,
      payload: response,
    });
  };
};
