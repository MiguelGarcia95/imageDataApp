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
    let imageData = {
    };
    let webDetection;
    // const [result] = client.labelDetection('https://i.redd.it/win02ukxgtb01.jpg');
    // client.labelDetection('https://i.redd.it/win02ukxgtb01.jpg').then(res => {
    //   // console.log(res[0].webDetection);
    //   // return response.send(200, {
    //   //   data: res[0].webDetection 
    //   // });
    //   // webDetection = res[0].webDetection;
    //   // webDetection = res[0].webDetection;
    //   return res[0];
    // })
    // .then(data => webDetection = data)
    // .catch(err => console.log(err));
    // return response.send(200, {
    //   webDetection
    // });

    const labelDetection = await client.labelDetection('https://i.redd.it/win02ukxgtb01.jpg');
    return response.send(200, {
      labelDetection
    })
  })
})
