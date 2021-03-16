import { FetchStationInformationAction } from './info';
import {
  FetchStationStatusAction,
  // DisplayStatusAction
} from './status';

export enum ActionTypes {
  fetchStationInformation,
  fetchStationStatus,
  // displayStatus,
}

export type Action = FetchStationInformationAction | FetchStationStatusAction;
// | DisplayStatusAction;

//fetch station information will be sort by name
