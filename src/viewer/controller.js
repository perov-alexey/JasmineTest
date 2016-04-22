"use strict";

var drawer = new Drawer();
var drawerHelper = new DrawerHelper();

function drawConnectors() {
    var connectors = drawerHelper.getConnectors(config);
    $.each(connectors, function(i, connector) {
        drawer.drawConnector(connector.x, connector.y, connector.width, connector.height);
        var pins = drawerHelper.getPins(connector);
        $.each(pins, function(i, pin) {
            pin = drawerHelper.getPinAbsolute(config, pin);
            drawer.drawPin(pin.x, pin.y);
        });
        var topChannel = drawerHelper.getChannel(connector, true);
        var bottomChannel = drawerHelper.getChannel(connector, false);
        drawer.drawChannel(connector.x, connector.y - drawer.CHANNEL_WIDTH, connector.width, topChannel.maxCapacity == topChannel.occupancy, topChannel.top, topChannel.occupancy + "/" + topChannel.maxCapacity);
        drawer.drawChannel(connector.x, connector.y + connector.height, connector.width, bottomChannel.maxCapacity == bottomChannel.occupancy, bottomChannel.top, bottomChannel.occupancy + "/" + bottomChannel.maxCapacity);
    });

    var links = drawerHelper.getAbsoluteLinks(config);
    $.each(links, function(i, link) {
        drawer.drawLink(link.firstPin.x, link.firstPin.y, link.secondPin.x, link.secondPin.y);
    });

    var traces = drawerHelper.getTraces(config);
    $.each(traces, function(i, trace) {
        var points = drawerHelper.getTracePoints(config, trace);
        if (points) {
            drawer.drawTrace(points);
        }
    });

}

//var config = {
//    "connectors":[
//        {
//            "x":10,
//            "y":30,
//            "height":200,
//            "width":100,
//            "pins":[
//                {
//                    "x":33,
//                    "y":50,
//                    "container":"10_30"
//                },
//                {
//                    "x":33,
//                    "y":100,
//                    "container":"10_30"
//                },
//                {
//                    "x":33,
//                    "y":150,
//                    "container":"10_30"
//                },
//                {
//                    "x":66,
//                    "y":50,
//                    "container":"10_30"
//                },
//                {
//                    "x":66,
//                    "y":100,
//                    "container":"10_30"
//                },
//                {
//                    "x":66,
//                    "y":150,
//                    "container":"10_30"
//                }
//            ],
//            "topChannel":{
//                "connector":"10_30",
//                "occupancy":0,
//                "maxCapacity":1,
//                "top":true
//            },
//            "bottomChannel":{
//                "connector":"10_30",
//                "occupancy":0,
//                "maxCapacity":2,
//                "top":false
//            }
//        },
//        {
//            "x":210,
//            "y":30,
//            "height":200,
//            "width":100,
//            "pins":[
//                {
//                    "x":33,
//                    "y":50,
//                    "container":"210_30"
//                },
//                {
//                    "x":33,
//                    "y":100,
//                    "container":"210_30"
//                },
//                {
//                    "x":33,
//                    "y":150,
//                    "container":"210_30"
//                },
//                {
//                    "x":66,
//                    "y":50,
//                    "container":"210_30"
//                },
//                {
//                    "x":66,
//                    "y":100,
//                    "container":"210_30"
//                },
//                {
//                    "x":66,
//                    "y":150,
//                    "container":"210_30"
//                }
//            ],
//            "topChannel":{
//                "connector":"210_30",
//                "occupancy":1,
//                "maxCapacity":1,
//                "top":true
//            },
//            "bottomChannel":{
//                "connector":"210_30",
//                "occupancy":1,
//                "maxCapacity":1,
//                "top":false
//            }
//        },
//        {
//            "x":410,
//            "y":30,
//            "height":200,
//            "width":100,
//            "pins":[
//                {
//                    "x":33,
//                    "y":50,
//                    "container":"410_30"
//                },
//                {
//                    "x":33,
//                    "y":100,
//                    "container":"410_30"
//                },
//                {
//                    "x":33,
//                    "y":150,
//                    "container":"410_30"
//                },
//                {
//                    "x":66,
//                    "y":50,
//                    "container":"410_30"
//                },
//                {
//                    "x":66,
//                    "y":100,
//                    "container":"410_30"
//                },
//                {
//                    "x":66,
//                    "y":150,
//                    "container":"410_30"
//                }
//            ],
//            "topChannel":{
//                "connector":"410_30",
//                "occupancy":0,
//                "maxCapacity":1,
//                "top":true
//            },
//            "bottomChannel":{
//                "connector":"410_30",
//                "occupancy":0,
//                "maxCapacity":1,
//                "top":false
//            }
//        }
//    ],
//    "traces":[
//        {
//            "path":[
//                {
//                    "connector":"210_30",
//                    "occupancy":0,
//                    "maxCapacity":1,
//                    "top":true
//                }
//            ],
//            "link": {
//                "firstPin":{
//                    "x":33,
//                    "y":50,
//                    "container":"10_30"
//                },
//                "secondPin":{
//                    "x":66,
//                    "y":100,
//                    "container":"410_30"
//                }
//            }
//        },
//        {
//            "path":[
//                {
//                    "connector":"210_30",
//                    "occupancy":0,
//                    "maxCapacity":1,
//                    "top": false
//                }
//            ],
//            "link": {
//                "firstPin":{
//                    "x":33,
//                    "y":150,
//                    "container":"10_30"
//                },
//                "secondPin":{
//                    "x":66,
//                    "y":50,
//                    "container":"410_30"
//                }
//            }
//        }
//    ],
//    "links":[
//        {
//            "firstPin":{
//                "x":33,
//                "y":50,
//                "container":"10_30"
//            },
//            "secondPin":{
//                "x":66,
//                "y":100,
//                "container":"410_30"
//            }
//        },
//        {
//            "firstPin":{
//                "x":33,
//                "y":150,
//                "container":"10_30"
//            },
//            "secondPin":{
//                "x":66,
//                "y":50,
//                "container":"410_30"
//            }
//        }
//    ]
//}
