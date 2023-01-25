import { Route, Routes } from 'react-router-dom';
import JourneyTable from './components/JourneyTable';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/journey/:id" element={<JourneyTable />} />
      </Routes>
    </div>
  );
}
export default App;
