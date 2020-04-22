import React from 'react';
import {CurrentProvider} from './contexts/currentContext'
import {ActionsHistoryProvider} from './contexts/actionsHistoryContext'
import {CalculationProvider} from './contexts/calculationContext'
import {LastPressProvider} from './contexts/lastPressContext'
import SixthLine from "./components/sixthLine";
import FithLine from "./components/fithLine";
import ForthLine from "./components/forthLine";
import ThirdLine from "./components/thirdLine";
import SecondLine from "./components/secondLine";
import FirstLine from "./components/firstLine";
import './styles/styles.scss'
import './generalFunction/keyboardEvent'
//!!!!!!!!!!!!!!!!!!!!!ADD BEFore submit!!!!!!!!!!!!!
alert("C clears the current Screen and last arithmetic signs \n AC will clear last calculation")
function App() {

  return (
    <LastPressProvider>
    <CalculationProvider>
    <ActionsHistoryProvider>
    <CurrentProvider  >        
    <div className="App">
    <FirstLine />
    <SecondLine />
    <ThirdLine />
    <ForthLine />
    <FithLine />
    <SixthLine />
 
    </div>
    </CurrentProvider>
    </ActionsHistoryProvider>
    </CalculationProvider>
    </LastPressProvider>
  );
}

export default App;
