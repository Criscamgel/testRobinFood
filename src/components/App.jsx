
import './App.scss';
import { DataProvider } from '../context/GlobalDataContext';
import { Principal } from './Principal/Principal';
import { Side } from './Side/Side';
import { LoginProvider } from '../context/LoginContext';
import { StoreProvider } from '../context/StoreContext';

function App() {
  return (
    <>
      <div className="superContainer">
        <DataProvider>
        <StoreProvider>
            <LoginProvider>
              <Side />
              <Principal />
            </LoginProvider>
          </StoreProvider>
        </DataProvider>
      </div>
    </>
  );
}

export default App;
