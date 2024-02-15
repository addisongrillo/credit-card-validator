import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CreditCardValidator from './routes/CreditCardValidator/CreditCardValidator';

const App = () => {
  return (
    <Router>
    <div className="App">
          <Routes>
            <Route
                path="/"
                element={<CreditCardValidator />}
            ></Route>
           
        </Routes>
    </div>
</Router>
  );
}

export default App;
