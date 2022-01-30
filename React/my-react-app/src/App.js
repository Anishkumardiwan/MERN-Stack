
import { React, Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Main from './Component/Main/Main';
import LoginForm from './Component/LoginForm/LoginForm';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

// Class Based Components ----------------------
class App extends Component {

  constructor() {
    super();
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      <div>
        {
          (this.state.isLoggedIn) ?
            <>
              <Header />
              <Main />
              <Footer />
            </> :
            <LoginForm />
        }
      </div>
    );
  }
}

export default App;





