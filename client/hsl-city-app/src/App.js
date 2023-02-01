import { Route, Routes } from 'react-router-dom';
import JourneyTable from './components/JourneyTable';
import StationMap from './components/StationMap';
import StationTable from './components/StationTable';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StationMap />} />
        <Route path="/journey" element={<JourneyTable />} />

        <Route path="/station" element={<StationTable />} />
      </Routes>
    </div>
  );
}
export default App;
