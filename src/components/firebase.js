  import  React from 'react'
  import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyDKSVcpIPB2dHD_9BKQRotjt6JyWF8V5ac",
  authDomain: "mytask-7f68d.firebaseapp.com"
})

  class Firebasecomp extends React.Component{
 
    state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    
    firebase.auth().onAuthStateChanged(user => {
      var userdetals={
        name:firebase.auth().currentUser.displayName,
        profile:firebase.auth().currentUser.photoURL,
        email:firebase.auth().currentUser.email
      } 
      this.setState({ isSignedIn: !!user }, () =>  this.props.history.push('/home', {"users":JSON.stringify(userdetals)}))
    })
  }
  render(){



    return(
      <div >
      {this.state.isSignedIn ? (
        <span>
        
          <div>Signed In!</div>
          
          <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          <img
            alt="profile picture"
            src={firebase.auth().currentUser.photoURL}
          />
        </span>
      ) : (
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
    )
  }
}

 export default Firebasecomp;
