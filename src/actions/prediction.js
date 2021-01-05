export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';

export const setName = (name) => ({
  type: SET_NAME,
  name,
});

export const setAge = (age) => ({
  type: SET_AGE,
  age
});

export const fetchAge = () => {
  return (dispatch, getState) => {
    const { prediction } = getState()

    fetch(`https://api.agify.io/?name=${prediction.name}&country_id=BR`)
      .then(response => response.json())
      .then(data => dispatch(setAge(data.age)))
  }
}
