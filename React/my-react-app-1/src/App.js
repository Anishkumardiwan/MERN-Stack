
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
    this.state = { CurrentlyLoggedInUser: null };
  }

  validateCredentials(user) {
    const correctCredential = { email: "anish@gmail.com", password: "12345" };
    // console.log(user);

    return new Promise((resolve, reject) => {
      if (correctCredential.email===user.email && correctCredential.password===user.password) {
        resolve(user);
      } else {
        reject("OOPS! Invalid Credentials");
      }
    });


  }

  onLogin(email, password) {

    // Call some api to check credential are correct
    const user = { email, password }
    // console.log(user);

    this.validateCredentials(user).then(user => {
      this.setState({ CurrentlyLoggedInUser: user });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        {
          (this.state.CurrentlyLoggedInUser) ?
            <>
              <Header />
              <Main />
              <Footer />
            </> :
            <LoginForm onLoginHandler={this.onLogin.bind(this)} />
        }
      </div>
    );
  }
}

export default App;





