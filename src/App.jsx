import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Usestate_01 from './Component/Usestate_01';
import TernaryOp from './Component/TernaryOp';
import Qustion from './Component/Qustion';
import Form from './Component/Form';
import UseEffect_Fetch_Reload from './Component/UseEffect_Fetch_Reload';
import UseEffect_Fetch from './Component/UseEffect_Fetch';
import Navigate01 from './Component/Nabvigat';
import UseEffect_Page from './Component/UseEffect_Page';
import UseEffect_reload from './Component/UseEffect_reload';
import UseRefColor from './Component/UseRefColor';
import UseTRefStore from './Component/UseTRefStore';
import UseRef from './Component/UseRef';

function App() {
  return (
    <>
      <div>
        <header><Navigate01 /></header>

        <Routes>
          <Route path='/' element={<Usestate_01 />} />
          <Route path='TernaryOp' element={<TernaryOp />} />
          <Route path='Qustion' element={<Qustion />} />
          <Route path='Form' element={<Form />} />
          <Route path='UseEffect_Page' element={<UseEffect_Page />} />
          <Route path='UseEffect_reload' element={<UseEffect_reload />} />
          <Route path='UseEffect_Fetch' element={<UseEffect_Fetch />} />
          <Route path='UseEffect_Fetch_Reload' element={<UseEffect_Fetch_Reload />} />
          <Route path='UseRefColor' element={<UseRefColor />} />
          <Route path='UseTRefStore' element={<UseTRefStore />} />
          <Route path='UseRef' element={<UseRef />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
