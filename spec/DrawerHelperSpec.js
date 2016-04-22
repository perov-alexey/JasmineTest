//TODO Use strict
//TODO Correct test data

describe("Drawer Helper", function() {

    beforeEach(function() {
        config = {
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
                            "connector":"100_10",
                            "occupancy":1,
                            "maxCapacity":1,
                            "top":true
                        }
                    ],
                    "link": {
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
                    }
                },
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
        drawerHelper = new DrawerHelper();
    });

    it("get connectors", function() {
        var firstConnector = {
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
        };
        var secondConnector = {
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
        };
        var thirdConnector = {
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
        };
        var connectors = [firstConnector, secondConnector, thirdConnector];
        expect(drawerHelper.getConnectors(config)).toEqual(connectors);
    });

    it("get pins", function() {
        var firstPin = {
            "x":25,
            "y":0,
            "container":"0_10"
        };
        var secondPin = {
            "x":25,
            "y":3,
            "container":"0_10"
        };
        var thirdPin = {
            "x":25,
            "y":6,
            "container":"0_10"
        };
        var fourthPin = {
            "x":25,
            "y":9,
            "container":"0_10"
        };
        var fifthPin = {
            "x":25,
            "y":12,
            "container":"0_10"
        };
        var pins = [firstPin, secondPin, thirdPin, fourthPin, fifthPin];
        expect(drawerHelper.getPins(drawerHelper.getConnectors(config)[0])).toEqual(pins);
    });

    it("get absolute pins", function() {
        var firstPin = {
            "x":25,
            "y":10,
            "container":"0_10"
        };
        var secondPin = {
            "x":25,
            "y":13,
            "container":"0_10"
        };
        var thirdPin = {
            "x":25,
            "y":16,
            "container":"0_10"
        };
        var fourthPin = {
            "x":25,
            "y":19,
            "container":"0_10"
        };
        var fifthPin = {
            "x":25,
            "y":22,
            "container":"0_10"
        };
        var pins = [firstPin, secondPin, thirdPin, fourthPin, fifthPin];
        var absolutePins = [];
        $.each(drawerHelper.getPins(drawerHelper.getConnectors(config)[0]), function(i, pin) {
            absolutePins.push(drawerHelper.getPinAbsolute(config, pin));
        });
        expect(absolutePins).toEqual(pins);
    });


    describe("get channels", function() {

        it("get top channel", function() {
            var topChannel = {
                "connector":"0_10",
                "occupancy":0,
                "maxCapacity":1,
                "top":true
            };
            expect(drawerHelper.getChannel(drawerHelper.getConnectors(config)[0], true)).toEqual(topChannel);
        });

        it("get bottom channel", function() {
            var bottomChannel = {
                "connector":"0_10",
                "occupancy":0,
                "maxCapacity":2,
                "top":false
            };
            expect(drawerHelper.getChannel(drawerHelper.getConnectors(config)[0], false)).toEqual(bottomChannel);
        });

    });

    describe("get links", function() {

        it("get relative links", function() {
            var firstLink = {
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
            };
            var secondLink = {
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
            };
            var links = [firstLink, secondLink];
            expect(drawerHelper.getRelativeLinks(config)).toEqual(links);
        });

        it("get absolute links", function() {
            var firstLink = {
                "firstPin":{
                    "x":25,
                    "y":25,
                    "container": "0_10"
                },
                "secondPin":{
                    "x":255,
                    "y":50,
                    "container": "200_10"
                }
            };
            var secondLink = {
                "firstPin":{
                    "x":225,
                    "y":25,
                    "container":"200_10"
                },
                "secondPin":{
                    "x":25,
                    "y":28,
                    "container":"0_10"
                }
            };
            var links = [firstLink, secondLink];
            expect(drawerHelper.getAbsoluteLinks(config)).toEqual(links);
        });

    });

    it("get traces", function() {
       var firstTrace = {
            "path":[
                {
                    "connector":"100_10",
                    "occupancy":1,
                    "maxCapacity":1,
                    "top":true
                }
            ],
            "link": {
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
            }
        };
        var secondTrace = {
            "path":[
                {
                    "connector": "100_10",
                    "occupancy": 1,
                    "maxCapacity": 1,
                    "top": false
                }
            ],
            "link": {
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
        };
        var traces = [firstTrace, secondTrace];
        expect(drawerHelper.getTraces(config)).toEqual(traces);
    });

    it("get connector by id", function() {
        var connector = {
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
        };
        expect(drawerHelper.getConnectorByID(config, "0_10")).toEqual(connector);
    });

    describe("get trace points", function() {

        it("get top trace points", function() {
            var tracePoints = [
                {x: 25, y: 25},
                {x: 60, y: 25},
                {x: 60, y: 0},
                {x: 190, y: 0},
                {x: 190, y: 50},
                {x: 255, y: 50}
            ];
            expect(drawerHelper.getTracePoints(config, drawerHelper.getTraces(config)[0])).toEqual(tracePoints);
        });

        it("get bottom trace points", function() {
            var tracePoints = [
                {x: 25, y: 25},
                {x: 60, y: 25},
                {x: 60, y: 0},
                {x: 190, y: 0},
                {x: 190, y: 50},
                {x: 255, y: 50}
            ];
            expect(drawerHelper.getTracePoints(config, drawerHelper.getTraces(config)[1])).toEqual(tracePoints);
        });

    });
});