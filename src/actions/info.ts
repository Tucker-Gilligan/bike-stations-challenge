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

export const fetchStationInformation = () => {
  const stationInfoUrl =
    'https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information';
  return async (dispatch: Dispatch) => {
    const response = await axios
      .get<StationsInfoRes>(stationInfoUrl)
      .then(res => {
        return res.data.data.stations;
      });

    dispatch<FetchStationInformationAction>({
      type: ActionTypes.fetchStationInformation,
      payload: response,
    });
  };
};
