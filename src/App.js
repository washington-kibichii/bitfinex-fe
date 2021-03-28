    // src/App.js

    import React, {Component} from 'react';

    class App extends Component {
      state = {
        Exchange: []
      }
      componentDidMount() {
        fetch('http://localhost:8080/fetch-local-prices')
        .then(res => res.json())
        .then((data) => {
          this.setState({ exchange: data })
        })
        .catch(console.log)
      }
      render() {
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">namee</h5>
              <h6 className="card-subtitle mb-2 text-muted">jhg</h6>
              <p className="card-text">dmhasbd</p>
            </div>
          </div>
        );
      }
    }

    export default App;
