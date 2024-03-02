const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const gender = req.body.gender;
  const firstYear = req.body.year;
  const exhaustion = req.body.exhaustion;
  const motivation = req.body.motivation;
  const creativity = req.body.creativity;
  const irritability = req.body.irritability;
  const focus = req.body.focus;
  const interest = req.body.interest;
  const illness = req.body.illness;
  const mental = req.body.mental;
  const stage1 = req.body.sTG1;
  const stage2 = req.body.sTG2;
  const stage3 = req.body.sTG3;
  const stage4 = req.body.sTG4;
  const stage5 = req.body.sTG5;
  const stage6 = req.body.sTG6;
  const stage7 = req.body.sTG7;
  const stage8 = req.body.sTG8;
  const stage9 = req.body.sTG9;
  const stage10 = req.body.sTG10;
  const stage11 = req.body.sTG11;
  const stage12 = req.body.sTG12;
  const workload = req.body.workload;
  const expectation = req.body.expectation;
  const relaFr = req.body.relFr;
  const peerPressure = req.body.peerPrs;
  const finPressure = req.body.finPrs;
  const futureConcern = req.body.ftrConcrn;
  const sharing = req.body.sharing;


  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          GENDER: gender,
          FYEAR: firstYear,
          EXHAU: exhaustion,
          MOTIV: motivation,
          CREAT: creativity,
          IRRIT: irritability,
          FOCUS: focus,
          INTER: interest,
          ILLNE: illness,
          MENTA: mental,
          STG1: stage1,
          STG2: stage2,
          STG3: stage3,
          STG4: stage4,
          STG5: stage5,
          STG6: stage6,
          STG7: stage7,
          STG8: stage8,
          STG9: stage9,
          STG10: stage10,
          STG11: stage11,
          STG12: stage12,
          WORKL: workload,
          EXPEC: expectation,
          RELAF: relaFr,
          PEERP: peerPressure,
          FINPS: finPressure,
          FUCON: futureConcern,
          SHARING: sharing
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us18.api.mailchimp.com/3.0/lists/96afa38766";
  const options = {
    method: "POST",
    auth: "oxcpie:3977a680d76d25fba693c085d3a2ceac-us18"
  };

  const request = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html")
    } else {
      res.sendFile(__dirname + "/failure.html")
    }

    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  });
  request.write(jsonData);
  request.end();
  // console.log(data);
})


app.listen(process.env.PORT || 1111, function() {
  console.log("Server is running on port 1111")
})



// API KEY: 3977a680d76d25fba693c085d3a2ceac-us18
// LIST ID: 96afa38766
