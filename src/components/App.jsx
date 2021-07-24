
import './App.scss';
import { DataProvider } from '../context/GlobalDataContext';
import { Principal } from './Principal/Principal';
import { Side } from './Side/Side';

function App() {
  return (
    <>
      <div className="superContainer">
        <DataProvider>
          <Side />
          <Principal />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
