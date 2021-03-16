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
  fetchStationInformation: Function;
  fetchStationStatus: Function;
}

interface CombinedStation {
  station_id: number;
  name: string;
  address: string;
  cross_street?: string;
  capacity: number;
  num_bikes_available?: number;
  num_docks_available?: number;
  rental_methods: string[];
  status?: string;
}

class _App extends Component<AppProps> {
  state = {
    sortByName: true,
    sortByCapacity: false,
    nameSort: [],
    capacitySort: [],
  };

  componentDidMount() {
    this.props.fetchStationInformation();
    this.props.fetchStationStatus();
  }

  onSortByNameClick = (): void => {
    this.setState({
      sortByName: true,
      sortByCapacity: false,
    });
    this.props.fetchStationInformation();
  };

  onSortByCapacityClick = (): void => {
    this.setState({
      sortByCapacity: true,
      sortByName: false,
    });
  };

  renderSortedByCapacity(): JSX.Element[] {
    this.props.stationInformation.sort((a, b) => {
      let fa = a.capacity;
      let fb = b.capacity;
      return fb - fa;
    });

    let firstFiftyStations: CombinedStation[] = this.props.stationInformation.slice(
      0,
      50
    );

    for (let i = 0; i < firstFiftyStations.length; i++) {
      this.props.stationStatus.forEach(station => {
        if (station.station_id === firstFiftyStations[i].station_id) {
          let temp = { ...firstFiftyStations[i], ...station };
          firstFiftyStations[i] = temp;
        }
      });
    }

    return firstFiftyStations.map(station => {
      let rentalMethods = station.rental_methods;
      return (
        <ul key={station.station_id}>
          <li>Name: {station.name}</li>
          <li>{station.status}</li>
          <li>Station Address: {station.address}</li>
          <li>Cross Street: {station.cross_street}</li>
          <li>
            Available/Capacity: {station.num_bikes_available} /{' '}
            {station.capacity}
          </li>
          <li>Number of Docks Available: {station.num_docks_available}</li>
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

  renderSortedByName(): JSX.Element[] {
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

    let firstFiftyStations: CombinedStation[] = this.props.stationInformation.slice(
      0,
      50
    );

    for (let i = 0; i < firstFiftyStations.length; i++) {
      this.props.stationStatus.forEach(station => {
        if (station.station_id === firstFiftyStations[i].station_id) {
          let temp = { ...firstFiftyStations[i], ...station };
          firstFiftyStations[i] = temp;
        }
      });
    }

    return firstFiftyStations.map(station => {
      let rentalMethods = station.rental_methods;
      return (
        <ul key={station.station_id}>
          <li>Name: {station.name}</li>
          <li>{station.status}</li>
          <li>Station Address: {station.address}</li>
          <li>Cross Street: {station.cross_street}</li>
          <li>
            Available/Capacity: {station.num_bikes_available} /{' '}
            {station.capacity}
          </li>
          <li>Number of Docks Available: {station.num_docks_available}</li>
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

  render() {
    return (
      <div>
        <button onClick={this.onSortByNameClick}>Sort by Name</button>
        <button onClick={this.onSortByCapacityClick}>Sort by Capacity</button>
        {this.state.sortByName && this.renderSortedByName()}
        {this.state.sortByCapacity && this.renderSortedByCapacity()}
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
