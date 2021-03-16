import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StationInformation,
  fetchStationInformation,
  StationStatus,
  fetchStationStatus,
} from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  stationInformation: StationInformation[];
  stationStatus: StationStatus[];
  fetchStationInformation: any;
  fetchStationStatus: any;
}

class _App extends Component<AppProps> {
  componentDidMount() {
    this.props.fetchStationInformation();
    this.props.fetchStationStatus();
  }
  render() {
    return <div>Hi there!</div>;
  }
}

const mapStateToProps = (
  state: StoreState
): {
  stationInformation: StationInformation[];
  stationStatus: StationStatus[];
} => {
  return {
    stationInformation: state.stationInformation,
    stationStatus: state.stationStatus,
  };
};

//export the connected version of app

export const App = connect(mapStateToProps, {
  fetchStationInformation,
  fetchStationStatus,
})(_App);
