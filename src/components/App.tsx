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
  state = {
    statusClicked: false,
    infoClicked: false,
    stationNameClicked: false,
    nameSort: [],
    capacitySort: [],
  };

  componentDidMount() {
    this.props.fetchStationInformation();
    //   this.props.fetchStationStatus();
  }

  onStationNameClick = (): void => {
    this.setState({
      stationNameClicked: true,
      infoClicked: false,
      statusClicked: false,
    });
    this.props.fetchStationInformation();
  };

  renderSortedByName(): JSX.Element[] {
    // let tempArray: StationInformation[] = [];
    console.log('BEFORE SORT', this.props.stationInformation[0]);
    this.props.stationInformation.sort((a, b) => {
      let fa = a.name.toLowerCase();
      let fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    let firstFiftyStations: StationInformation[] = this.props.stationInformation.slice(
      0,
      50
    );

    return firstFiftyStations.map((station: StationInformation) => {
      let rentalMethods = station.rental_methods;
      console.log(rentalMethods, 'RENTAL');
      return (
        <ul key={station.station_id}>
          <li>Name: {station.name}</li>
          <li>Station Address: {station.address}</li>
          <li>Capacity: {station.capacity}</li>
          <li>
            Rental Methods:{' '}
            <ol>
              {rentalMethods.map(method => {
                return <li>{method}</li>;
              })}
            </ol>
          </li>
        </ul>
      );
    });
  }

  onInfoButtonClick = (): void => {
    this.setState({ statusClicked: false, infoClicked: true });
    this.props.fetchStationInformation();
  };

  renderStationInfo(): JSX.Element[] {
    return this.props.stationInformation.map((station: StationInformation) => {
      return (
        <ul key={station.station_id}>
          <li>Name: {station.name}</li>
          <li>Station Address: {station.address}</li>
          <li>Capacity: {station.capacity}</li>
          <li>Rental Methods: {station.rental_methods}</li>
        </ul>
      );
    });
  }

  onStatusButtonClick = (): void => {
    this.setState({ infoClicked: false, statusClicked: true });
    this.props.fetchStationStatus();
  };

  renderStationStatus(): JSX.Element[] {
    return this.props.stationStatus.map((station: StationStatus) => {
      return (
        <ul key={station.station_id}>
          <li>Station Status: {station.status}</li>
          <li>Bikes Available: {station.num_bikes_available}</li>
          <li>Docks Disabled: {station.num_docks_disabled}</li>
        </ul>
      );
    });
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.onInfoButtonClick}>Fetch Station Info</button>
        <button onClick={this.onStatusButtonClick}>Fetch Station Status</button> */}
        <button onClick={this.onStationNameClick}>Sort by Name</button>
        {this.state.infoClicked && this.renderStationInfo()}
        {this.state.statusClicked && this.renderStationStatus()}
        {this.state.nameSort && this.renderSortedByName()}
      </div>
    );
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
