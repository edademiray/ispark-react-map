import logo from './logo.svg';
import './App.css';
import Mapbox from "./components/mapbox/mapbox";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZWRhZGVtaXJheSIsImEiOiJja3lsZ2Z0ZjYwcTc1MnZ1ZndpYTdnbDBzIn0.CMtEIw9MwNaDS09ZudHlYA';


function App() {
  return (
    <div>
     <Mapbox />
    </div>
  );
}

export default App;
