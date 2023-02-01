import UserForm from './components/UserForm/UserForm';
import baseCss from './App.module.css';
import logo from './logo.svg';
import userFormCss from "./components/UserForm/UserForm.module.css";
import React from 'react';

class App extends React.Component {
  
  state = {
    message: "Here's going to appear your selection..."
  }

  updateMessage = (message) => {
    this.setState({ message: message});
  }

  render() {
    return (
      <div className={baseCss.App}>
        <nav>
          <p><img src={logo} className={baseCss["App-logo"]} alt="logo" /></p>
          <p>NETFLIX IDEAS USING GPT3</p> 
          <p><img src={logo} className={baseCss["App-logo"]} alt="logo" /></p> 
        </nav>

        <div className={userFormCss.title}>What are you seeking for?</div>
        <UserForm message={this.state.message} onUpdate={this.updateMessage}/>
        <div className={userFormCss.footer} dangerouslySetInnerHTML={{ __html: this.state.message }}></div>
      </div>
    )
  }
}

export default App;
