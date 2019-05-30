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
    // const incomingImage = Buffer(body, 'base64')

    fs.writeFile('/tmp/image.jpg', body, err => {
      console.log(err);
      // return response.send(500, error);
    })
    .then(async () => {
      const image = fs.readFileSync('/tmp/image.jpg');

      console.log('image', image)

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
    .catch(err => {
      console.log(err);
      return response.send(500, error);
    });


    // fs.writeFileSync("/tmp/image.jpg", body, (err, data) => {
    //   console.log(err);
    //   console.log(data);
    //   return response.status(500).json({error: err});
    // })


    // fs.readFile('/tmp/image.jpg', (err, data) => {
    //   console.log(data);
    // })
    

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
