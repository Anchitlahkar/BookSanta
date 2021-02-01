import firebase  from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCt9WemXXG5Ih-oSrNQg2nP_LVekysnhuw",
    authDomain: "book-santa-b749c.firebaseapp.com",
    projectId: "book-santa-b749c",
    storageBucket: "book-santa-b749c.appspot.com",
    messagingSenderId: "1000577395127",
    appId: "1:1000577395127:web:4f0192ca12d0ccb7fde032"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();




userLogin = (email, password) => {
    console.log('Login:  '+email + ' : ' + password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return alert('Login Successfully');
      })
      .catch(function (error) {
        console.log(error);
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };





  userLogin = async (email, password) => {
    console.log('Login:  ' + email + ' : ' + password);
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        console.log(response);
        if (response) {
          return alert('Login Successfully')
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("User Doesn't Exist");
            break;
          case 'auth/invalid-email':
            alert('Incorrect Email/Password');
            break;
          default:
            console.log(error);
        }
      }
    }
  };




