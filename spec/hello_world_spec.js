// var request = require("request");
// var helloWorld = require("../index.js");
// var base_url = "http://localhost:3000/";
//
//
// describe('Hello World Test', function(){
//   describe("GET /", function(){
//
//     it("returns status code 200", function(done){
//       request.get(base_url, function(error, response, body) { /// use Node’s request module to send a request to our server, at port 3000
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//
//     });
//
//     it("returns Hello World", function(done) {
//       request.get(base_url, function(error, response, body) {
//         expect(body).toBe("Hello World");
//         helloWorld.closeServer();  // closes server after all test have run
//         done();
//       });
//     });
//
//   });
//
//
// });
