// import React from 'react';


// import Home from './pages/Home';
// import ContactUs from './pages/ContactUs';
// import Cart from './pages/Cart';


// import Americano from './pages/products/Americano';
// import Apple from './pages/products/Apple';
// import Citron from './pages/products/Citron';
// import Grape from './pages/products/Grape';
// import Honey from './pages/products/Honey';
// import Lychee from './pages/products/Lychee';
// import Mango from './pages/products/Mango';
// import Original from './pages/products/Original';
// import Peachy from './pages/products/Peachy';
// import Pineapple from './pages/products/Pineapple';
// import Pomegranate from './pages/products/Pomegranate';
// import Watermelon from './pages/products/Watermelon';



// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";


// function App() {
//   const user = true
//   return (
//     // <ContactUs />
//     <Router>
//       <Switch>
//         <Route exact path="/Home">
//           <Home />
//         </Route>
//         <Route path="/product/:id">
//           <Americano />
//         </Route>
//         <Route path="/cart">
//           <Cart />
//         </Route>
//         <Route path="/contactus">
//           <ContactUs />
//           {user ? <Redirect to="/" /> : <ContactUs />}
//         </Route>
        
//       </Switch>
//     </Router>
//   );
// }

// export default App;



import React from 'react';


import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';

import Americano from './pages/products/Americano';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {
  const user = true
  return (
    // <ContactUs />
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/product/:id">
          element={<Americano />}
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/contactus">
          <ContactUs />
          {/* {user ? <Redirect to="/" /> : <ContactUs />} */}
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;