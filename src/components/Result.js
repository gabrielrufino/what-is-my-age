import React from 'react';
import {connect} from 'react-redux';

class Result extends React.Component {
  render () {
    const { name, age } = this.props;

    return (
      <div>
        {(!name || !age) && <h3 className="subtitle has-text-centered is-3">Digite um nome e calcule a idade</h3>}
        {name && age && <h3 className="subtitle has-text-centered is-3">{name} provavelmente tem {age} anos</h3>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.prediction.name,
  age: state.prediction.age
})

export default connect(mapStateToProps)(Result);
