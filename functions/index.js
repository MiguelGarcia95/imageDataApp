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

exports.imageLabelDetection = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const image = 'https://i.redd.it/win02ukxgtb01.jpg';

    try {
      const labelDetection = await client.labelDetection(image);

      return response.send(200, {
        labelDetection: labelDetection[0]
      })
    }
    catch (error) {
      return response.send(500, error);
    }
  })
})

exports.imageWebDetection = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const image = 'https://i.redd.it/win02ukxgtb01.jpg';

    try {
      const webDetection = await client.webDetection(image);
      return response.send(200, {
        webDetection: webDetection[0]
      })
    }
    catch (error) {
      return response.send(500, error);
    }
  })
})
