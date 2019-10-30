import { auth, database, provider } from "../../config/firebase";
import * as actionType from './actionTypes';

// Register the user using email and password
export function register(data) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const { email, password, username } = data;
      auth.createUserWithEmailAndPassword(email, password)
        .then((resp) => {
          const user = { username, uid: resp.user.uid };
          const userRef = database.ref().child('users');

          userRef.child(user.uid).update({ ...user })
            .then(() => {
              dispatch({ type: actionType.LOGGED_IN, user });
              resolve(user);
            })
            .catch((error) => reject({ message: error }));
        })
        .catch((error) => reject(error));
    });
  };
}

// Create the user object in realtime database
export function createUser(user) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const userRef = database.ref().child('users');

      userRef.child(user.uid).update({ ...user })
        .then(() => {
          dispatch({ type: actionType.LOGGED_IN, user });
          resolve(user);
        })
        .catch((error) => reject({ message: error }));
    });
  };
}

// Sign the user in with their email and password
export function login(data) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const { email, password } = data;
      auth.signInWithEmailAndPassword(email, password)
        .then((resp) => {
          // Get the user object from the realtime database
          let { user } = resp;
          database.ref('users').child(user.uid).once('value')
            .then((snapshot) => {
              const exists = (snapshot.val() !== null);

              // if the user exist in the DB, replace the user variable with the returned snapshot
              if (exists) user = snapshot.val();

              if (exists) dispatch({ type: actionType.LOGGED_IN, user });
              resolve({ exists, user });
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });
  };
}

// Send Password Reset Email
export function resetPassword(data) {
  return () => {
    return new Promise((resolve, reject) => {
      const { email } = data;
      auth.sendPasswordResetEmail(email)
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  };
}

// Sign user out
export function signOut() {
  return () => {
    return new Promise((resolve, reject) => {
      auth.signOut()
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  };
}

// Sign user in using Facebook
export function signInWithFacebook(fbToken) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const credential = provider.credential(fbToken);
      auth.signInWithCredential(credential)
        .then((user) => {
          // Get the user object from the realtime database
          database.ref('users').child(user.uid).once('value')
            .then((snapshot) => {
              const exists = (snapshot.val() !== null);

              // if the user exist in the DB, replace the user variable with the returned snapshot
              if (exists) {
                // eslint-disable-next-line no-param-reassign
                user = snapshot.val();
                dispatch({ type: actionType.LOGGED_IN, user });
              }
              resolve({ exists, user });
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });
  };
}

export function checkLoginStatus(callback) {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      const isLoggedIn = (user !== null);

      if (isLoggedIn) {
        // Get the user object from the realtime database
        database.ref('users').child(user.uid).once('value')
          .then((snapshot) => {

            const exists = (snapshot.val() !== null);

            // if the user exist in the DB, replace the user variable with the returned snapshot
            if (exists) {
              // eslint-disable-next-line no-param-reassign
              user = snapshot.val();
              dispatch({ type: actionType.LOGGED_IN, user });
            }
            callback(exists, isLoggedIn);
          })
          .catch(() => {
            // unable to get user
            dispatch({ type: actionType.LOGGED_OUT });
            callback(false, false);
          });
      } else {
        dispatch({ type: actionType.LOGGED_OUT });
        callback(false, isLoggedIn);
      }
    });
  };
}
