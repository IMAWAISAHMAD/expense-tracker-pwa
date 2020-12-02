import React from 'react';
import Header from './components/Header';
import Transactions from './components/Transactions';
import {AppProvider} from './context/AppContext'
import firebase from './firebase'


function App() {

  const messaging = firebase.messaging();
  messaging.requestPermission().then(()=>{
    return messaging.getToken()
  }).then((token: any)=>{
    console.log('Token: ',token);
  }).then((err: any)=>{
    console.log(err);
  })

  return (
   <AppProvider>
      <Header/>
      <Transactions/>
   </AppProvider>
  );
}

export default App;
