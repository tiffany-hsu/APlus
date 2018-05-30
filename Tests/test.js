//test 1
//this is the test file
// Require the built in 'assertion' library

var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

//var assert = require('assert');
// Create a group of tests about Arrays
describe('Array', function() {

        var requestResult;
        var response;

        //call to server
        before(function (done){
                chai.request("http://localhost:8080")
                .get("/app/courses")
                .end(function (err, res) {
                         requestResult = res.body;
                          response = res;
                          expect(err).to.be.null;
                          expect(res).to.have.status(200);
                          done();
                    });
            });

        it('Should return an array object with more than 1 object', function (){
                expect(response).to.have.status(200);
                expect(response).to.be.an('object');
                //console.log(response.body);
                expect(response.body).to.have.length.above(2);
                expect(response).to.have.headers;
        });

        it('The first entry in the array has known properties', function(){
                    expect(requestResult[0]).to.include.keys('name');
                    expect(requestResult[0]).to.have.property('_id');
                    expect(response.body[0]).to.have.deep.property('total_assessments');
                    expect(response.body).to.not.be.a.string;
        });


    it('The element in the array has the expected properties', function(){
        expect(response.body).to.satisfy (
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(requestResult[i]).to.include.property('name');
                    expect(requestResult[i]).to.have.property('_id');
                    expect(response.body[i]).to.have.deep.property('total_assessments');
                    //expect(response.body).to.not.be.a.string;
                }
                return true;
            });
                        
    });
});