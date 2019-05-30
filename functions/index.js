const functions = require('firebase-functions');

const cors = require("cors")({origin: true});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    console.log("RAN!!!")
    response.send("Hello from Firebase!");
  })
});

exports.getImageForVision = functions.https.onRequest((request, response) => {
  
})
