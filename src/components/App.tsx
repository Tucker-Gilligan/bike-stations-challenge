import React, { Component } from 'react';
import './App.css';
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
    fetching: false,
  };

  componentDidMount() {
    this.props.fetchStationInformation();
    this.props.fetchStationStatus();
    this.props.stationInformation.length === 0 &&
      this.setState({ fetching: true });
  }

  componentDidUpdate() {
    this.props.stationInformation.length !== 0 &&
      this.state.fetching === true &&
      this.setState({ fetching: false });
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
        <ul key={station.station_id} className='station__list__item'>
          <li className='station__header'>
            <h2 className='station__name'>{station.name}</h2>
            <h4 className='station__status'>{station.status}</h4>
          </li>
          <li className='station__location'>
            <p className='station__address'>
              Station Address: {station.address}
            </p>
            <p className='station__cross__street'>
              Cross Street: {station.cross_street}
            </p>
          </li>
          <li>
            Available/Capacity: {station.num_bikes_available} /{' '}
            {station.capacity}
            <div>Number of Docks Available: {station.num_docks_available}</div>
          </li>
          <li className='rental__methods'>
            Rental Methods:{' '}
            <ol className='payment__options'>
              {rentalMethods.map(method => {
                return <li key={rentalMethods.indexOf(method)}>{method}</li>;
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
        <ul key={station.station_id} className='station__list__item'>
          <li className='station__header'>
            <h2 className='station__name'>{station.name}</h2>
            <h4 className='station__status'>{station.status}</h4>
          </li>
          <li className='station__location'>
            <p className='station__address'>
              Station Address: {station.address}
            </p>
            <p className='station__cross__street'>
              Cross Street: {station.cross_street}
            </p>
          </li>
          <li>
            Available/Capacity: {station.num_bikes_available} /{' '}
            {station.capacity}
            <div>Number of Docks Available: {station.num_docks_available}</div>
          </li>
          <li className='rental__methods'>
            Rental Methods:{' '}
            <ol className='payment__options'>
              {rentalMethods.map(method => {
                return <li key={rentalMethods.indexOf(method)}>{method}</li>;
              })}
            </ol>
          </li>
        </ul>
      );
    });
  }

  render() {
    return (
      <div className='App__main'>
        <div className='sort__options'>
          <button className='sort__button' onClick={this.onSortByNameClick}>
            Sort by Name
          </button>
          <button className='sort__button' onClick={this.onSortByCapacityClick}>
            Sort by Capacity
          </button>
        </div>
        <div className='main__container'>
          {this.state.fetching && <p>loading....</p>}
          {this.state.sortByName && this.renderSortedByName()}
          {this.state.sortByCapacity && this.renderSortedByCapacity()}
        </div>
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
