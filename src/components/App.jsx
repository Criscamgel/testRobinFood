
import './App.scss';
import { DataProvider } from '../context/GlobalDataContext';
import { Principal } from './Principal/Principal';
import { Side } from './Side/Side';
import { LoginProvider } from '../context/LoginContext';

function App() {
  return (
    <>
      <div className="superContainer">
        <DataProvider>
            <LoginProvider>
              <Side />
              <Principal />
            </LoginProvider>
        </DataProvider>
      </div>
    </>
  );
}

export default App;
