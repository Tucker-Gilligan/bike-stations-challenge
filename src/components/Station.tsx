import React, { Component } from 'react';
import './App.css';

interface StationProps {
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

interface CurrentState {
  station: StationProps;
}

export default class Station extends Component<CurrentState> {
  renderBikeClass(): string {
    if (this.props.station.num_bikes_available === 0) {
      return 'red';
    } else if (this.props.station.num_bikes_available === 1) {
      return 'orange';
    } else {
      return 'green';
    }
  }
  renderDockClass(): string {
    if (this.props.station.num_docks_available === 0) {
      return 'red';
    } else if (this.props.station.num_docks_available === 1) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  render() {
    let { station } = this.props;
    let rentalMethods = station.rental_methods;

    return (
      <ul className='station__list__item'>
        <li className='station__header'>
          <h2 className='station__info'>
            <span className='station__label'>Station</span>
            <span className='station__name'>{station.name}</span>
            <span className='station__label'>Address</span>
            <span className='station__address'>{station.address}</span>
          </h2>
          <div className='availability'>
            <h3>
              <span className={this.renderBikeClass()}>
                {station.num_bikes_available}
              </span>{' '}
              {station.num_bikes_available === 1 ? 'Bike' : 'Bikes'}
            </h3>
            <h3>
              <span className={this.renderDockClass()}>
                {station.num_docks_available}
              </span>{' '}
              {station.num_docks_available === 1 ? 'Dock' : 'Docks'}
            </h3>
          </div>
          <h4 className='station__status'>{station.status}</h4>
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
  }
}
