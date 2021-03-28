    // src/App.js

    import React, {Component} from 'react';
    import Prices from './components/prices';

    class App extends Component {
      state = {
        prices: []
      }
      componentDidMount() {
        
        fetch('https://cors-anywhere.herokuapp.com/http://localhost:8080/fetch-local-prices')
        .then(res => res.json())
        .then((data) => {
          this.setState({ prices: data })
        })
        .catch(console.log)
      }
      render() {
        return (
          <Prices contacts={this.state.prices} />
        );
      }
    }

    export default App;
