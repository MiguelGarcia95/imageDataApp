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
    const body = JSON.parse(request.body);
    const incomingImage = Buffer(body.image, 'base64');
    const imagePath = `/tmp/image.${body.type}`;

    fs.writeFileSync(imagePath, incomingImage, err => {
      console.log(err);
      return response.status(500).json({error: err});
    })

    try {
      const labelDetection = await client.labelDetection(imagePath);

      return response.send(200, {
        labelDetection: labelDetection[0]
      })
    }
    catch (error) {
      console.log(error);
      return response.status(500).json({error: err});
    }
  })
})

exports.imageWebDetection = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const body = JSON.parse(request.body);
    const incomingImage = Buffer(body.image, 'base64');
    const imagePath = `/tmp/image.${body.type}`;

    fs.writeFileSync(imagePath, incomingImage, err => {
      console.log(err);
      return response.status(500).json({error: err});
    })

    try {
      const webDetection = await client.webDetection(imagePath);
      return response.send(200, {
        webDetection: webDetection[0]
      })
    }
    catch (error) {
      console.log(error);
      return response.status(500).json({error: err});
    }
  })
})


exports.imageObjectDetection = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const body = JSON.parse(request.body);
    const incomingImage = Buffer(body.image, 'base64');
    const imagePath = `/tmp/image.${body.type}`;

    fs.writeFileSync(imagePath, incomingImage, err => {
      console.log(err);
      return response.status(500).json({error: err});
    })

    try {
      const webDetection = await client.webDetection(imagePath);
      return response.send(200, {
        webDetection: webDetection[0]
      })
    }
    catch (error) {
      console.log(error);
      return response.status(500).json({error: err});
    }
  })  
})

exports.imageTextDetection = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const body = JSON.parse(request.body);
    const incomingImage = Buffer(body.image, 'base64');
    const imagePath = `/tmp/image.${body.type}`;

    fs.writeFileSync(imagePath, incomingImage, err => {
      console.log(err);
      return response.status(500).json({error: err});
    })
  })
})

exports.imagePropertiesDetection = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const body = JSON.parse(request.body);
    const incomingImage = Buffer(body.image, 'base64');
    const imagePath = `/tmp/image.${body.type}`;

    fs.writeFileSync(imagePath, incomingImage, err => {
      console.log(err);
      return response.status(500).json({error: err});
    })
  })
})

exports.imageSafeSearchDetection = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const body = JSON.parse(request.body);
    const incomingImage = Buffer(body.image, 'base64');
    const imagePath = `/tmp/image.${body.type}`;

    fs.writeFileSync(imagePath, incomingImage, err => {
      console.log(err);
      return response.status(500).json({error: err});
    })

  })
})