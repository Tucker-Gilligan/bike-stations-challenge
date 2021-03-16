import { FetchStationInformationAction } from './info';
import { FetchStationStatusAction } from './status';

export enum ActionTypes {
  fetchStationInformation,
  fetchStationStatus,
}

export type Action = FetchStationInformationAction | FetchStationStatusAction;
