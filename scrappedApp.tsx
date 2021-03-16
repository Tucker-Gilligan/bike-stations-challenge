// onInfoButtonClick = (): void => {
//   this.setState({ statusClicked: false, infoClicked: true });
//   this.props.fetchStationInformation();
// };

// renderStationInfo(): JSX.Element[] {
//   return this.props.stationInformation.map((station: StationInformation) => {
//     return (
//       <ul key={station.station_id}>
//         <li>Name: {station.name}</li>
//         <li>Station Address: {station.address}</li>
//         <li>Capacity: {station.capacity}</li>
//         <li>Rental Methods: {station.rental_methods}</li>
//       </ul>
//     );
//   });
// }

// onStatusButtonClick = (): void => {
//   this.setState({ infoClicked: false, statusClicked: true });
//   this.props.fetchStationStatus();
// };

// renderStationStatus(): JSX.Element[] {
//   return this.props.stationStatus.map((station: StationStatus) => {
//     return (
//       <ul key={station.station_id}>
//         <li>Station Status: {station.status}</li>
//         <li>Bikes Available: {station.num_bikes_available}</li>
//         <li>Docks Disabled: {station.num_docks_disabled}</li>
//       </ul>
//     );
//   });
// }

// {
//   <button onClick={this.onInfoButtonClick}>Fetch Station Info</button>
//         <button onClick={this.onStatusButtonClick}>Fetch Station Status</button>
// }
