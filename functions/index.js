const functions = require('firebase-functions');
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
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

exports.sendImageForVision = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // const [result] = client.labelDetection('https://i.redd.it/win02ukxgtb01.jpg');
    client.labelDetection('https://i.redd.it/win02ukxgtb01.jpg').then(res => {
      // const labels = result.labelAnnotations;
      // console.log(labels);
      console.log(res[0]);
      return response.send("IMAGE!");
    }).catch(err => console.log(err));
  })
})
