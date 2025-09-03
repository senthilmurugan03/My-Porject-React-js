import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navigate01 from './Component/Navigate';
import Usestate_01 from './Component/Usestate';
import TernaryOp from './Component/TernaryOp';
import Qustion from './Component/Qustion';
import Form from './Component/Form';
import UseEffect_Page from './Component/Useeffect';
import UseEffect_reload from './Component/UseEffect_reload';
import UseEffect_Fetch from './Component/UseEffectFetch';
import UseEffect_Fetch_Reload from './Component/UseEffect_Fetch_Reload';


function App() {

  return (
    <>
      <div >

        <header><Navigate01 /></header>

        <Routes>
          <Route path='Usestate_01' element={<Usestate_01 />}>Usestate</Route>
          <Route path='TernaryOp' element={<TernaryOp />}>TernaryOp</Route>
          <Route path='Qustion' element={<Qustion />}>Qustion</Route>
          <Route path='Form' element={<Form />}>Form</Route>
          <Route path='UseEffect_Page' element={<UseEffect_Page />}>Form</Route>
          <Route path='UseEffect_reload' element={<UseEffect_reload />}>Form</Route>
           <Route path='UseEffect_Fetch' element={<UseEffect_Fetch />}>Form</Route>
            <Route path='UseEffect_Fetch_Reload' element={<UseEffect_Fetch_Reload />}>Form</Route>
        </Routes>

      </div>

    </>
  )
}

export default App;                                                                                                                                                                               