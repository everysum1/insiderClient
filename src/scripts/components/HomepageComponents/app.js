var React = require('react');
import '../../../css/app.css'
import AppInfo from './AppInfo'
import SearchBar from '../SearchComponents/SearchBar'
import MainChart from './MainChart'


var App = React.createClass({
  render: function() {
    return(
      <div className="App">
        <div className="container">
          <div className="cluster-chart">
            <MainChart/>
          </div>

          <div className="info">
            <AppInfo/>
          </div>
          
          <div className="footer">
          </div>

        </div>
      </div>
    )
  }
})

export default App