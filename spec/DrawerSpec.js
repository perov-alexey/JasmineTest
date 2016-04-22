//TODO Split test logic and getting image mechanism
//TODO Make small references images
//TODO WTF Error in setFixtures in beforeAll
//TODO Use strict!

describe("Drawer", function() {

    beforeAll(function() {
        drawer = new Drawer();
    });

    beforeEach(function() {
        setFixtures('<canvas class="field" width="1300" height="700" style="border:1px solid #000000;"></canvas>');
        canvas = $('.field')[0];
        context = canvas.getContext("2d");
    });

    afterEach(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    it("draw connector", function(done) {
        var reference = new Image();
        reference.src = "spec/resources/connector.png";

        $(reference).on("load", function() {
            context.drawImage(reference, 0, 0);
            var refernceURL = canvas.toDataURL("image/png");

            context.clearRect(0, 0, canvas.width, canvas.height);

            drawer.drawConnector(10, 10, 100, 200);

            resemble(canvas.toDataURL("image/png")).compareTo(refernceURL).onComplete(function(data) {
                expect(data.misMatchPercentage).toBeLessThan(0.005);
                done();
            });
        });
    });

    it("draw link", function(done) {
        var reference = new Image();
        reference.src = "spec/resources/link.png";

        $(reference).on("load", function() {
            context.drawImage(reference, 0, 0);
            var refernceURL = canvas.toDataURL("image/png");

            context.clearRect(0, 0, canvas.width, canvas.height);

            drawer.drawLink(40, 30, 230, 200);

            resemble(canvas.toDataURL("image/png")).compareTo(refernceURL).onComplete(function(data) {
                expect(data.misMatchPercentage).toBeLessThan(0.005);
                done();
            });
        });
    });

    it("draw pin", function(done) {
        var reference = new Image();
        reference.src = "spec/resources/pin.png";

        $(reference).on("load", function() {
            context.drawImage(reference, 0, 0);
            var refernceURL = canvas.toDataURL("image/png");

            context.clearRect(0, 0, canvas.width, canvas.height);

            drawer.drawPin(40, 30);

            resemble(canvas.toDataURL("image/png")).compareTo(refernceURL).onComplete(function(data) {
                expect(data.misMatchPercentage).toBeLessThan(0.005);
                done();
            });
        });
    });

    describe("draw channels", function() {

        it("draw blank channel", function(done) {
            var reference = new Image();
            reference.src = "spec/resources/blankChannelWithoutText.png";

            $(reference).on("load", function() {
                context.drawImage(reference, 0, 0);
                var refernceURL = canvas.toDataURL("image/png");

                context.clearRect(0, 0, canvas.width, canvas.height);

                drawer.drawChannel(10, 10, 100, false);

                resemble(canvas.toDataURL("image/png")).compareTo(refernceURL).onComplete(function(data) {
                    expect(data.misMatchPercentage).toBeLessThan(0.005);
                    done();
                });
            });
        });

        it("draw full channel", function(done) {
            var reference = new Image();
            reference.src = "spec/resources/fullChannelWithoutText.png";

            $(reference).on("load", function() {
                context.drawImage(reference, 0, 0);
                var refernceURL = canvas.toDataURL("image/png");

                context.clearRect(0, 0, canvas.width, canvas.height);

                drawer.drawChannel(10, 10, 100, true);

                resemble(canvas.toDataURL("image/png")).compareTo(refernceURL).onComplete(function(data) {
                    expect(data.misMatchPercentage).toBeLessThan(0.005);
                    done();
                });
            });
        });

        it("draw channel with text", function(done) {
            var reference = new Image();
            reference.src = "spec/resources/channelWithText.png";

            $(reference).on("load", function() {
                context.drawImage(reference, 0, 0);
                var refernceURL = canvas.toDataURL("image/png");

                context.clearRect(0, 0, canvas.width, canvas.height);

                drawer.drawChannel(10, 10, 100, true, false, "0/0");

                resemble(canvas.toDataURL("image/png")).compareTo(refernceURL).ignoreColors().onComplete(function(data) {
                    expect(data.misMatchPercentage).toBeLessThan(0.005);
                    done();
                });
            });
        });


    });

    it("draw trace", function(done) {
        var reference = new Image();
        reference.src = "spec/resources/trace.png";

        $(reference).on("load", function() {
            context.drawImage(reference, 0, 0);
            var refernceURL = canvas.toDataURL("image/png");

            context.clearRect(0, 0, canvas.width, canvas.height);

            var points = [
                {x: 30, y: 60},
                {x: 160, y: 60},
                {x: 160, y: 20},
                {x: 350, y: 20},
                {x: 350, y: 120},
                {x: 430, y: 120}
            ];

            drawer.drawTrace(points);

            resemble(canvas.toDataURL("image/png")).compareTo(refernceURL).onComplete(function(data) {
                expect(data.misMatchPercentage).toBeLessThan(0.005);
                done();
            });
        });
    });

});