
import './App.scss';
import { Principal } from './Principal/Principal';
import { Side } from './Side/Side';

function App() {
  return (
    <>
      <div className="superContainer">
        <Side />
        <Principal />
      </div>
    </>
  );
}

export default App;
