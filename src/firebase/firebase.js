import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default}

// //CHILD_REMOVED
// database.ref('expenses').on("child_removed",(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
//
// //CHILD_CHANGED
// database.ref('expenses').on("child_changed",(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
//
// //CHILD_ADDED
// database.ref('expenses').on("child_added",(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
//
// // database.ref('expenses')
// //     .once('value')
// //     .then();
// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //
// //     console.log(expenses);
// // }, (err) => {
// //     console.log("ERROR:", err)
// // })
//
//
// database.ref("expenses").push({
//     description:'Vodka',
//     note:'note4',
//     amount:18,
//     createdAt:5000
// })
//
//
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val()
// //     console.log(`${val.name} is ${val.job.title} in ${val.job.company}`)
// // },(err)=>{console.log("ERROR:",err)})
//
// // database.ref().once('value').then((snapshot) => {
// //     const val = snapshot.val()
// //     console.log(val)
// // }).catch((err) => {
// //     console.log('ERROR:', err)
// // })
//
// // database.ref().set({
// //     name: "ROMAN",
// //     age: 12,
// //     stressLevel: 6,
// //     job: {
// //         title: "Software developer",
// //         company: "Apple inc"
// //     },
// //     isSingle: false,
// //     location: {
// //         city: 'LA',
// //         country: "USA"
// //     },
// // }).then(() => {
// //     console.log("Data is saved!")
// // }).catch((e) => {
// //     console.log(e)
// // });
// //
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Apple',
// //     'location/city': "Seattle"
// // })
// //
// // setTimeout(()=>{
// //     database.ref().update({
// //         name:'Max'
// //     })
// // },4000)
// //
// // setTimeout(()=>{
// //     database.ref().off(onValueChange)
// // },10000)

