const functions = require('firebase-functions');
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
const cors = require("cors")({origin: true});
const fs = require("fs");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.imageLabelDetection = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    // const image = 'https://i.redd.it/win02ukxgtb01.jpg';
    
    const body = JSON.parse(request.body);

    fs.writeFileSync("/tmp/image.jpg", body.image, "base64", err => {
      console.log(err);
      return response.status(500).json({error: err});
    });

    const image = '/tmp/image.jpg';

    try {
      const labelDetection = await client.labelDetection(image);

      return response.send(200, {
        labelDetection: labelDetection[0]
      })
      // return response.send(200, 'OKAY');
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
