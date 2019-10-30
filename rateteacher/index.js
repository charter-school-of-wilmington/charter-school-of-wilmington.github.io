
//use firebase object from firebase.js file
var db = firebase.firestore();
db.enablePersistence().catch(function(err) {
  if (err.code == 'failed-precondition') {
    console.log("Failed Persistance: Multiple tabs open, persistence can only be enabled in one tab at a a time.");
  } else if (err.code == 'unimplemented') {
    console.log("Failed Persistance: Browser unsupported");
  }
});

var teachers = [];
teachersDB = db.collection("teachers")
teachersDB.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    teachers.push(doc.data());
  });
});

for(var teacher in teachers){
  
}