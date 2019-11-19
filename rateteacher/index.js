
//use firebase object from firebase.js file
var db = firebase.firestore();
db.enablePersistence().catch(function(err) {
  if (err.code == 'failed-precondition') {
    console.log("Failed Persistance: Multiple tabs open, persistence can only be enabled in one tab at a a time.");
  } else if (err.code == 'unimplemented') {
    console.log("Failed Persistance: Browser unsupported");
  }
});

$(document).ready(function(){
  var teachers = [];
  var exampleteacher = $(".teacher");
  teachersDB = db.collection("teachers")
  teachersDB.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      teachers.push(doc.data());
    });
    
    for(var i=0;i<teachers.length;i++){
      var tdata = teachers[i];
      var tobj = exampleteacher.clone();
      var telemarr = tobj.get(0).children;
      
      telemarr[0].innerHTML = tdata.Name;
      telemarr[0].href = tdata.Name;
      //telems[1]. = teacher.Rating;
      telemarr[2].innerHTML = "Email: " + tdata.Email + "<br>Occupation: " + tdata.Occupation + "<br>Phone: " + tdata.Phone;
      tobj.css("display", "block");
      tobj.appendTo(document.body);
    }
    
  });
});



