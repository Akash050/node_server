const express = require('express')
const app = express()
const port = 9999
const cors = require("cors");

app.use(express.json({ limit: "4mb" }));
app.use(cors());

const templateStats = [
  {
    "id": 0,
    "title": "Invite Creators",
    "reach": 24000,
    "dpUrl": [
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/abishiekhjain.jpg",
      "https://gallerify.s3.us-west-2.amazonaws.com/lotties/user.jpg",
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/desigamers1.jpg",
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/dynamo__gaming.jpg",
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/raajjones.jpg"
    ]
  },
  {
    "id": 1,
    "title": "Remind creators about the Program",
    "reach": 12900,
    "dpUrl": [
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/abishiekhjain.jpg",
      "https://gallerify.s3.us-west-2.amazonaws.com/lotties/user.jpg",
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/desigamers1.jpg",
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/dynamo__gaming.jpg",
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/raajjones.jpg"
    ]
  },
  {
    "id": 2,
    "title": "Rejected Creators",
    "reach": 8900,
    "dpUrl": [
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/abishiekhjain.jpg",
      "https://gallerify.s3.us-west-2.amazonaws.com/lotties/user.jpg",
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/desigamers1.jpg",
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/dynamo__gaming.jpg",
      "https://gallerify.s3-us-west-2.amazonaws.com/ipics/raajjones.jpg"
    ]
  },
];

const templateList = [
  {
    "title": "Invite Creators",
    "platforms": ["whatsapp", "instagram", "facebook"],
    "template": [
      {
        "userId": ["1", "2"],
        "title": "Hello Creaters",
        "description": "We got an amazing campaign for you. Check out the link below to",
        "url": "www.wati.co/random",
      },
      {
        "userId": ["all"],
        "title": "Hello Creaters",
        "description": "We got an amazing campaign for you. Check out the link below to",
        "url": "www.wati.co/raajjones",
      }
    ]

  },
  {
    "title": "Remind creators about the Program",
    "platforms": ["whatsapp", "instagram", "facebook"],
    "template": [
      {
        "userId": ["11"],
        "title": "Hello Creaters",
        "description": "We got an amazing campaign for you. Check out the link below to",
        "url": "www.wati.co/random",
      },
      {
        "userId": ["22"],
        "title": "Hello Creaters",
        "description": "We got an amazing campaign for you. Check out the link below to",
        "url": "influencers/instagram/raajjones",
      }
    ]

  },
  {
    "title": "Rejected Creators",
    "platforms": ["whatsapp", "instagram", "facebook"],
    "template": [
      {
        "userId": ["13"],
        "title": "Hello Creaters",
        "description": "We got an amazing campaign for you. Check out the link below to",
        "url": "influencers/instagram/prem_sonii",
      },
      {
        "userId": ["14"],
        "title": "Hello Creaters",
        "description": "We got an amazing campaign for you. Check out the link below to",
        "url": "www.wati.co/random",
      }
    ]
  },
];



const checkStatusList = [
  {
    "date_time": "12 Feb 2024, 12:00 PM",
    "template_type": "Invite Creators",
    "messages_sent": 10265,
    "link_clicks": 4784,
    "failed": 0,
    "sending_status": "completed"
  },
  {
    "date_time": "18 Feb 2024, 10:00 AM",
    "template_type": "Remind Creators",
    "messages_sent": 9358,
    "link_clicks": 3412,
    "failed": 456,
    "sending_status": "processing"
  },
  {
    "date_time": "22 Feb 2024, 11:00 AM",
    "template_type": "Invite Creators",
    "messages_sent": 10265,
    "link_clicks": 4784,
    "failed": 0,
    "sending_status": "completed"
  },
  {
    "date_time": "28 Feb 2024, 10:00 AM",
    "template_type": "Remind Creators",
    "messages_sent": 9358,
    "link_clicks": 3412,
    "failed": 456,
    "sending_status": "processing"
  },
  {
    "date_time": "12 Feb 2024, 12:00 PM",
    "template_type": "Invite Creators",
    "messages_sent": 10265,
    "link_clicks": 4784,
    "failed": 0,
    "sending_status": "completed"
  },
  {
    "date_time": "18 Feb 2024, 10:00 AM",
    "template_type": "Remind Creators",
    "messages_sent": 9358,
    "link_clicks": 3412,
    "failed": 456,
    "sending_status": "processing"
  },
  {
    "date_time": "22 Feb 2024, 11:00 AM",
    "template_type": "Invite Creators",
    "messages_sent": 10265,
    "link_clicks": 4784,
    "failed": 0,
    "sending_status": "completed"
  },
  {
    "date_time": "28 Feb 2024, 10:00 AM",
    "template_type": "Remind Creators",
    "messages_sent": 9358,
    "link_clicks": 3412,
    "failed": 456,
    "sending_status": "processing"
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/template-stats', (req, res) => {
  res.send({
    success: true,
    messaega: "get test data",
    data: templateStats
  })
})


app.post('/templates', (req, res) => {
  let { title } = req.body

  const selectedTemp = templateList.find(i => i.title == title) || {};

  res.send({
    success: true,
    messaega: "fetched data",
    data: selectedTemp
  })
})

app.post('/send-message', (req, res) => {
  let { platform, title, userId } = req.body

  res.send({
    success: true,
    messaega: "send message sucessfully!",
    data: {
      platform: platform,
      template: title,
      userId: userId
    }
  })
})

app.post('/communication-history', (req, res) => {
  const { userId } = req.body
  if(userId){
    res.send({
      success: true,
      messaega: "successfully fetch data!",
      data: checkStatusList
    })
  }else {
    res.send({
      success: false,
      messaega: "something went wrong!"
    })
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})