
import './App.scss';
import { DataProvider } from '../context/GlobalDataContext';
import { Principal } from './Principal/Principal';
import { Side } from './Side/Side';
import { LoginProvider } from '../context/LoginContext';
import { StoreProvider } from '../context/StoreContext';
import { PizzeriasProvider } from '../context/PizzeriasContext';

function App() {
  return (
    <>
      <div className="superContainer">
        <DataProvider>
        <StoreProvider>
            <PizzeriasProvider>
            <LoginProvider>
              <Side />
              <Principal />
            </LoginProvider>
            </PizzeriasProvider>
          </StoreProvider>
        </DataProvider>
      </div>
    </>
  );
}

export default App;
