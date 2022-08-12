const express = require('express');
const router = express.Router();

// My 2nd assignment is being started from here onwards -------------------------------------------------
/*
let persons=[
    {
        name : Sikha,
        age :15,
        votingStatus : false
    },

    {
        name: Komolika,
        age :30,
        votingStatus: yes
    },

    {
        name:Prerna ,
        age:32,
        votingStatus: yes

    },

    {
        name:Roshini,
        age:16,
        votingStatus: false
    },

    {
        name:Pratha,
        age:45,
        votingStatus:false
    }
]

router.post('/voters', function(req, res) {

    //let result0 = req.query.age
        let result = [];
        for (let i = 0; i < persons.length; i++) {
        let person = persons[i];
        if (person.age >= 18 ) {
            person.votingStatus = true
            result.push(person)
        }}
        if (req.query.age >= 18) {
            res.send(result)
        } else {
            res.send("not eligible for voting")
        }
    })   */

//first assignment starts from here .
/*
let players =[
    {
        "name":"manish",
        "dob" :"1/1/1995",
        "gender":"male",
        "city":"jalandhar",
        "sports":[
            "swimming"
        ],
    },
     
    {
        "name":"gopal",
        "dob" :"1/09/1995",
         "gender": "male",
         "city" :"delhi",
         "sports":[
            "soccer"
         ],
    },
      
     {
         "name":"lokesh",
         "dob" :"1/1/1990",
         "gender":"male",
          "city":"mumbai",
          "sports":[
            "soccer"
          ],
          
        },
        
    ]

    router.post('/players', function (req, res) {

        //LOGIC WILL COME HERE
            let isRepeat = false
               for (let i = 0; i < players.length; i++) {
                    if (players[i].name == req.body.name ) {
                        isRepeat = true
                            break;
                        }
                    }
        if (isRepeat == true) {
            res.send("Data already existed")
            } else {
                players.push(req.body)
            res.send(players)
            }
        })

module.exports = router; */

//2nd assignment

/*

// third assignment .

let booking = [
    {
        bookingNumber: 1,
        bookingId: 12,
        sportId: "",
        centerId: "",
        type: "private",
        slot: "16286598000000",
        bookedOn: "31/08/2021",
        bookedFor: "01/09/2021",
    },
];


router.post("/players/:playerName/bookings/:bookingId", function (req, res) {
    let playerExist = false
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == req.params.playerName) {
            playerExist = true
        }
    }
    if (!playerExist) {
        return res.send("This player does not exist")
    }
    for (let i = 0; i < booking.length; i++) {
        if ((booking[i].bookingId == req.params.bookingId)) {
            return res.send("This booking id already existed in Data");
        }
    }
    req.body.playerName = req.params.playerName
    req.body.bookingId = req.params.bookingId

    booking.push(req.body);
    return res.send(booking);
}); 

*/