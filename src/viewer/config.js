var config = {
    "connectors":[
        {
            "x":0,
            "y":10,
            "height":50,
            "width":50,
            "pins":[
                {
                    "x":25,
                    "y":0,
                    "container":"0_10"
                },
                {
                    "x":25,
                    "y":3,
                    "container":"0_10"
                },
                {
                    "x":25,
                    "y":6,
                    "container":"0_10"
                },
                {
                    "x":25,
                    "y":9,
                    "container":"0_10"
                },
                {
                    "x":25,
                    "y":12,
                    "container":"0_10"
                }
            ],
            "topChannel":{
                "connector":"0_10",
                "occupancy":0,
                "maxCapacity":1,
                "top":true
            },
            "bottomChannel":{
                "connector":"0_10",
                "occupancy":0,
                "maxCapacity":2,
                "top":false
            }
        },
        {
            "x":100,
            "y":10,
            "height":50,
            "width":50,
            "pins":[
                {
                    "x":25,
                    "y":0,
                    "container":"100_10"
                },
                {
                    "x":25,
                    "y":3,
                    "container":"100_10"
                },
                {
                    "x":25,
                    "y":6,
                    "container":"100_10"
                },
                {
                    "x":25,
                    "y":9,
                    "container":"100_10"
                },
                {
                    "x":25,
                    "y":12,
                    "container":"100_10"
                },
                {
                    "x":25,
                    "y":15,
                    "container":"100_10"
                },
                {
                    "x":25,
                    "y":18,
                    "container":"100_10"
                },
                {
                    "x":25,
                    "y":21,
                    "container":"100_10"
                },
                {
                    "x":25,
                    "y":24,
                    "container":"100_10"
                },
                {
                    "x":25,
                    "y":27,
                    "container":"100_10"
                }
            ],
            "topChannel":{
                "connector":"100_10",
                "occupancy":0,
                "maxCapacity":1,
                "top":true
            },
            "bottomChannel":{
                "connector":"100_10",
                "occupancy":0,
                "maxCapacity":1,
                "top":false
            }
        },
        {
            "x":200,
            "y":10,
            "height":50,
            "width":50,
            "pins":[
                {
                    "x":25,
                    "y":0,
                    "container":"200_10"
                },
                {
                    "x":25,
                    "y":3,
                    "container":"200_10"
                },
                {
                    "x":25,
                    "y":6,
                    "container":"200_10"
                },
                {
                    "x":25,
                    "y":9,
                    "container":"200_10"
                },
                {
                    "x":25,
                    "y":12,
                    "container":"200_10"
                },
                {
                    "x":25,
                    "y":15,
                    "container":"200_10"
                },
                {
                    "x":25,
                    "y":18,
                    "container":"200_10"
                },
                {
                    "x":25,
                    "y":21,
                    "container":"200_10"
                },
                {
                    "x":25,
                    "y":24,
                    "container":"200_10"
                },
                {
                    "x":25,
                    "y":27,
                    "container":"200_10"
                }
            ],
            "topChannel":{
                "connector":"200_10",
                "occupancy":1,
                "maxCapacity":1,
                "top":true
            },
            "bottomChannel":{
                "connector":"200_10",
                "occupancy":0,
                "maxCapacity":1,
                "top":false
            }
        }
    ],
    "traces":[
        {
            "path":[
                {
                    "connector": "100_10",
                    "occupancy": 1,
                    "maxCapacity": 1,
                    "top": false
                }
            ],
            "link": {
                "secondPin":{
                    "x":25,
                    "y":18,
                    "container":"0_10"
                },
                "firstPin":{
                    "x":25,
                    "y":15,
                    "container":"200_10"
                }
            }
        }
    ],
    "links":[
        {
            "firstPin":{
                "x":25,
                "y":15,
                "container":"0_10"
            },
            "secondPin":{
                "x":55,
                "y":40,
                "container":"200_10"
            }
        },
        {
            "firstPin":{
                "x":25,
                "y":15,
                "container":"200_10"
            },
            "secondPin":{
                "x":25,
                "y":18,
                "container":"0_10"
            }
        }
    ]
};