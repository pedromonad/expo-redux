import firebase from 'firebase';

export const authenticate = (email, password) => {
  return (dispatch) => {
          firebase.auth().signInWithEmailAndPassword('sdudhasdhuasd@suhadhusadh.com', 'password')
          .then( (res) => authenticateSuccess(dispatch, res) )
          .catch( (error) => authenticateFail(dispatch, error) );
  }
}

const authenticateFail = (dispatch, error) => {
  dispatch({ 
      type: 'AUTHENTICATION_FAILED',
      payload: error
  });
}

const authenticateSuccess = (dispatch, payload) => {
  dispatch({
      type: 'AUTHENTICATION_SUCCESS', 
      payload
  });
}