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

exports.sendImageForVision = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const image = 'https://i.redd.it/win02ukxgtb01.jpg';
    
    const labelDetection = await client.labelDetection(image);
    const webDetection = await client.webDetection(image)
    return response.send(200, {
      labelDetection: labelDetection[0],
      webDetection: webDetection[0]
    })
  })
})
