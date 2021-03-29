    // src/App.js

    import React, {Component} from 'react';
    import Prices from './components/prices';
    import TimeAgo from 'javascript-time-ago'

    import en from 'javascript-time-ago/locale/en'
    import ru from 'javascript-time-ago/locale/ru'

    TimeAgo.addDefaultLocale(en)
    TimeAgo.addLocale(ru)

    class App extends Component {
      state = {
        prices: []
      }
      componentDidMount() {
        
        fetch('/fetch-local-prices')
        .then(res => res.json())
        .then((data) => {
          data = JSON.parse(JSON.stringify(data))
          this.setState({ prices: data })
        }) 
        .catch(console.log)
      }
      render() {
        return (
          <Prices prices={this.state.prices} />
        );
      }
    }

    export default App;
