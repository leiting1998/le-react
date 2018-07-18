import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import DefaultButton from './components/defaultButton'
import PrimaryButton from './components/primaryButton'
import WarningButton from './components/warningButton'

class App extends React.Component {
  render () {
    return (
      <div>
        This is defaultButton: <DefaultButton />
        <br />
        This is primaryButton：<PrimaryButton />
        <br />
        This is warningButton<WarningButton />
      </div>)
  }
}

export default hot(module)(App)
ReactDOM.render(<App />, document.getElementById('app'))
