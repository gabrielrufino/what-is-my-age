import React from 'react';
import {connect} from 'react-redux';

import { setName, fetchAge } from '../actions/prediction'

class Form extends React.Component {
  render () {
    const { name, setName, fetchAge } = this.props;

    return (
      <div>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              type="text"
              placeholder="Qual seu nome?"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <button className="button is-primary is-large is-fullwidth" onClick={fetchAge}>
          Calcular
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.prediction.name
})

const mapDispatchToProps = {
  setName,
  fetchAge
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
