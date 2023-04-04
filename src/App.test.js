import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



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




// <BrowserRouter>
//       <Switch>
//         <Route exact path="/" pages={Home} />
//         <Route path="/products/Americano" pages={Americano} />
//         <Route path="/products/Apple" pages={Apple} />
//         <Route path="/products/Citron" pages={Citron} />
//         <Route path="/products/Grape" pages={Grape} />
//         <Route path="/products/Honey" pages={Honey} />
//         <Route path="/products/Lychee" pages={Lychee} />
//         <Route path="/products/Mango" pages={Mango} />
//         <Route path="/products/Original" pages={Original} />
//         <Route path="/products/Peachy" pages={Peachy} />
//         <Route path="/products/Pineapple" pages={Pineapple} />
//         <Route path="/products/Pomegranate" pages={Pomegranate} />
//         <Route path="/products/Watermelon" pages={Watermelon} />
//         <Route path="/Home" pages={Home} />
//         <Route path="/ContactUs" pages={ContactUs} />
//       </Switch>
//     </BrowserRouter>