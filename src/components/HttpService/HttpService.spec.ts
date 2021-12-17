import chai from 'chai';
let {expect} = chai;

import HttpService from './index';

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//


describe('HttpService.ts', () => {
    
    describe('http', () => {
        
        it('Should throw an exception for the options object being required', (done) => {
            // @ts-ignore
            HttpService.http().then((response) => {
                done(new Error('this promise should not be resolved'));
            }, (error) => {
                expect(error.message).to.equal('options (Object) is required');
                done();
            });
        });

        it('Should throw an exception for the options.url being required', (done) => {
            // @ts-ignore
            HttpService.http({}).then((response) => {
                done(new Error('this promise should not be resolved'));
            }, (error) => {
                expect(error.message).to.equal('options.url (String) is required');
                done();
            });
        });

        it('Should throw an exception for the options.method being required', (done) => {
            // @ts-ignore
            HttpService.http({url: 'google.com'}).then((response) => {
                done(new Error('this promise should not be resolved'));
            }, (error) => {
                expect(error.message).to.equal('options.method (String) is required');
                done();
            });
        });

        it('Should throw an exception for the options.method being invalid', (done) => {
            // @ts-ignore
            HttpService.http({url: 'google.com', method: 'test'}).then((response) => {
                done(new Error('this promise should not be resolved'));
            }, (error) => {
                expect(error.message).to.equal('options.method must be one of the following values ["GET","PUT","POST","DELETE"]');
                done();
            });
        });
        
        it('Should return a successful response', (done) => {
            HttpService.http({url: 'https://google.com', method: 'GET'}).then((response) => {
                expect(response).to.exist;
                expect(response).to.have.property('status');
                expect(response).to.have.property('data');
                expect(response.status).to.equal(200);
                done();
            }, done);
        });
        
    });
    
    
    describe('_getAllHeaders', () => {
        
        it('Should throw an exception for an invalid input', (done) => {
            const input = null;
            let errorOccurred = false;
            
            try {
                const results = HttpService._getAllHeaders(input);
            } catch (error) {
                expect(error).to.exist;
                expect(error.message).to.equal('responseData (Object) is required');
                errorOccurred = true;
            }
            
            expect(errorOccurred).to.be.true;
            done();
        });
        
    });
    
});