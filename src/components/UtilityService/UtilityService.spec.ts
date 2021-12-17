import chai from 'chai';
let {expect} = chai;

import UtilityService from './index';

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//


describe('UtilityService.ts', () => {
    
    describe('generateRandomNumberString', () => {
        it('should generate a random 10 digit number', (done) => {
            const desiredNumberLength = 10;
            
            const randomNumber = UtilityService.generateRandomNumberString(desiredNumberLength);
            
            expect(randomNumber).to.be.a('string');
            expect(randomNumber).to.have.property('length').and.equal(desiredNumberLength);
            
            // @ts-ignore
            const onlyNumbers = randomNumber.split('').filter((character) => isNaN(character) === false).join('');
            expect(onlyNumbers).to.equal(randomNumber);
            
            done();
        });
        
        
        it('should throw a "input is required" error', (done) => {
            let randomNumber;
            
            try {
                // @ts-ignore
                randomNumber = UtilityService.generateRandomNumberString();
            } catch (error) {
                expect(error.message).to.equal('length (Integer) is required');
            }
            
            expect(randomNumber).to.not.exist;
            done();
        });
    });
    
    
    
    describe('repeatFunction', () => {
        it('should throw a "input is required" error for the first parameter', (done) => {
            let results;
            
            try {
                // @ts-ignore
                results = UtilityService.repeatFunction();
            } catch (error) {
                expect(error.message).to.equal('callback (Function) is required');
            }
            
            expect(results).to.not.exist;
            done();
        });
        
        
        it('should throw a "input is required" error for the second parameter', (done) => {
            let results;
            
            try {
                // @ts-ignore
                results = UtilityService.repeatFunction(function() {
                    return 'test';
                });
            } catch (error) {
                expect(error.message).to.equal('count (Integer) is required');
            }
            
            expect(results).to.not.exist;
            done();
        });
        
        it('should return an array of "test" with a length of 3', (done) => {
            let results;
            
            try {
                results = UtilityService.repeatFunction(function() {
                    return 'test';
                }, 3);
            } catch (error) {
                expect(error).to.not.exist;
            }
            
            expect(results).to.eql(['test', 'test', 'test']);
            done();
        });
    });
    
    
    
    describe('isValidPhone', () => {
        it('should return false for an empty input', (done) => {
            // @ts-ignore
            expect(UtilityService.isValidPhone()).to.equal(false);
            done();
        });
        
        
        it('should return false for an empty string', (done) => {
            expect(UtilityService.isValidPhone('')).to.equal(false);
            done();
        });
        
        
        it('should return false for a single digit number', (done) => {
            expect(UtilityService.isValidPhone(1)).to.equal(false);
            done();
        });
        
        
        it('should return false for a 9 digit number', (done) => {
            expect(UtilityService.isValidPhone(123123123)).to.equal(false);
            done();
        });
        
        
        it('should return false for a 9 digit number string', (done) => {
            expect(UtilityService.isValidPhone('123123123')).to.equal(false);
            done();
        });
        
        
        it('should return true for a 10 digit number', (done) => {
            expect(UtilityService.isValidPhone(1231231234)).to.equal(true);
            done();
        });
        
        
        it('should return true for a 10 digit number string', (done) => {
            expect(UtilityService.isValidPhone('1231231234')).to.equal(true);
            done();
        });
        
        
        it('should return true for a 10 digit number string with other characters', (done) => {
            expect(UtilityService.isValidPhone('(123) 123-1234')).to.equal(true);
            done();
        });
        
        
        it('should return true for a 10 digit number string with other characters', (done) => {
            expect(UtilityService.isValidPhone('123-123-1234')).to.equal(true);
            done();
        });
        
        
        it('should return true for a 10 digit number string with other characters', (done) => {
            expect(UtilityService.isValidPhone('123 123-1234')).to.equal(true);
            done();
        });
        
        
        it('should return true for a 10 digit number string with other characters', (done) => {
            expect(UtilityService.isValidPhone('123TEST WITH EXTRA STUFF 123-1234')).to.equal(true);
            done();
        });
        
        
        it('should return true for a 10 digit number string with extra spaces around it', (done) => {
            expect(UtilityService.isValidPhone('     123123-1234   ')).to.equal(true);
            done();
        });
    });
    
    
    
    describe('isValidEmail', () => {
        it('should return false for an empty input', (done) => {
            // @ts-ignore
            expect(UtilityService.isValidEmail()).to.equal(false);
            done();
        });
        
        
        it('should return false for an empty input', (done) => {
            expect(UtilityService.isValidEmail('')).to.equal(false);
            done();
        });
        
        
        it('should return false for "test"', (done) => {
            expect(UtilityService.isValidEmail('test')).to.equal(false);
            done();
        });
        
        
        it('should return false for "test@"', (done) => {
            expect(UtilityService.isValidEmail('test@')).to.equal(false);
            done();
        });
        
        
        it('should return false for "test@test"', (done) => {
            expect(UtilityService.isValidEmail('test@test')).to.equal(false);
            done();
        });
        
        
        it('should return true for "test@test.com"', (done) => {
            expect(UtilityService.isValidEmail('test@test.com')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test@test.gov"', (done) => {
            expect(UtilityService.isValidEmail('test@test.gov')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test@test.net"', (done) => {
            expect(UtilityService.isValidEmail('test@test.net')).to.equal(true);
            done();
        });
        
        
        it('should return true for "   test@test.me   "', (done) => {
            expect(UtilityService.isValidEmail('   test@test.me   ')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "Test@test.me"', (done) => {
            expect(UtilityService.isValidEmail('Test@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "Test@Test.me"', (done) => {
            expect(UtilityService.isValidEmail('Test@Test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "TEST@Test.me"', (done) => {
            expect(UtilityService.isValidEmail('TEST@Test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "TEST@TEST.me"', (done) => {
            expect(UtilityService.isValidEmail('TEST@TEST.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "TEST@TEST.ME"', (done) => {
            expect(UtilityService.isValidEmail('TEST@TEST.ME')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return false for "test,12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test,12@test.me')).to.equal(false);
            done();
        });
        
        
        it('should return true for "test_12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test_12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test&12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test&12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test=12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test=12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test\'12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test\'12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return false for "test"12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test"12@test.me')).to.equal(false);
            done();
        });
        
        
        it('should return true for "test!12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test!12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test#12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test#12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test?12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test?12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return true for "test-12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test-12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return false for "test>12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test>12@test.me')).to.equal(false);
            done();
        });
        
        
        it('should return false for "test<12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test<12@test.me')).to.equal(false);
            done();
        });
        
        
        it('should return true for "test.12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test.12@test.me')).to.equal(true);
            done();
        });
        
        
        it('should return false for "test..12@test.me"', (done) => {
            expect(UtilityService.isValidEmail('test..12@test.me')).to.equal(false);
            done();
        });
    });
    
    
    
    describe('sanitizePhone', () => {
        it('should return a 10 digit number string', (done) => {
            expect(UtilityService.sanitizePhone(1231231234)).to.equal('1231231234');
            done();
        });
        
        
        it('should return a 10 digit number string', (done) => {
            expect(UtilityService.sanitizePhone('1231231234')).to.equal('1231231234');
            done();
        });
        
        
        it('should return a 10 digit number string', (done) => {
            expect(UtilityService.sanitizePhone('(123) 123-1234')).to.equal('1231231234');
            done();
        });
        
        
        it('should return a 10 digit number string', (done) => {
            expect(UtilityService.sanitizePhone('123-123-1234')).to.equal('1231231234');
            done();
        });
        
        
        it('should return a 10 digit number string', (done) => {
            expect(UtilityService.sanitizePhone('123 123-1234')).to.equal('1231231234');
            done();
        });
        
        
        it('should return a 10 digit number string', (done) => {
            expect(UtilityService.sanitizePhone('123TEST WITH EXTRA STUFF 123-1234')).to.equal('1231231234');
            done();
        });
    });
    
    
    
    describe('sanitizeEmail', () => {
        it('should return "test@test.me" for "   test@test.me   "', (done) => {
            expect(UtilityService.sanitizeEmail('   test@test.me   ')).to.equal('test@test.me');
            done();
        });
        
        
        it('should return "test@test.me" for "test@test.me"', (done) => {
            expect(UtilityService.sanitizeEmail('test@test.me')).to.equal('test@test.me');
            done();
        });
        
        
        it('should return "test@test.me" for "Test@test.me"', (done) => {
            expect(UtilityService.sanitizeEmail('Test@test.me')).to.equal('test@test.me');
            done();
        });
        
        
        it('should return "test@test.me" for "Test@Test.me"', (done) => {
            expect(UtilityService.sanitizeEmail('Test@Test.me')).to.equal('test@test.me');
            done();
        });
        
        
        it('should return "test@test.me" for "TEST@Test.me"', (done) => {
            expect(UtilityService.sanitizeEmail('TEST@Test.me')).to.equal('test@test.me');
            done();
        });
        
        
        it('should return "test@test.me" for "TEST@TEST.me"', (done) => {
            expect(UtilityService.sanitizeEmail('TEST@TEST.me')).to.equal('test@test.me');
            done();
        });
        
        
        it('should return "test@test.me" for "TEST@TEST.ME"', (done) => {
            expect(UtilityService.sanitizeEmail('TEST@TEST.ME')).to.equal('test@test.me');
            done();
        });
    });
    
    
    
    describe('obfuscatePhone', () => {
        it('should return an obfuscated phone with some numbers showing', (done) => {
            const result = UtilityService.obfuscatePhone('8013219876');
            
            expect(result).to.equal('(8**) ***-**76');
            done();
        });
    });
    
    
    
    describe('repeatString', () => {
        it('should return a string that has been repeated multiple types', (done) => {
            const result = UtilityService.repeatString('test', 2);
            
            expect(result).to.equal('testtest');
            done();
        });
        
        
        it('should return a string that has been repeated multiple types', (done) => {
            const result = UtilityService.repeatString('wow', 5);
            
            expect(result).to.equal('wowwowwowwowwow');
            done();
        });
        
        
        it('should return a string that has been repeated multiple types', (done) => {
            const result = UtilityService.repeatString('wow', 5, ' ');
            
            expect(result).to.equal('wow wow wow wow wow');
            done();
        });
        
        
        it('should return a string that has been repeated multiple types', (done) => {
            const result = UtilityService.repeatString('', 5, ' ');
            
            expect(result).to.equal('    ');
            done();
        });
        
        
        it('should return a string that has been repeated multiple types', (done) => {
            const result = UtilityService.repeatString('*', 5, ' test ');
            
            expect(result).to.equal('* test * test * test * test *');
            done();
        });
    });
    
    
    
    describe('obfuscateEmail', () => {
        it('should return an obfuscated email with some characters showing', (done) => {
            const result = UtilityService.obfuscateEmail('test@test.com');
            
            expect(result).to.equal('te**@te**.com');
            done();
        });
        
        
        it('should return an obfuscated email with some characters showing', (done) => {
            const result = UtilityService.obfuscateEmail('wesley@waveortho.com');
            
            expect(result).to.equal('we****@wa*******.com');
            done();
        });
        
        
        it('should return an obfuscated email with some characters showing', (done) => {
            const result = UtilityService.obfuscateEmail('wesley@harbor.waveortho.com');
            
            expect(result).to.equal('we****@ha**************.com');
            done();
        });
    });
    
    
    
    describe('arrayOfStringsContainsValue', () => {
        const testArray = ['test', 'wow', 'neat', 'test'];
        const goodValue = 'es';
        const badValue = 'wowowow';
        
        it('should return true for having the value somewhere in the string in the array', (done) => {
            expect(UtilityService.arrayOfStringsContainsValue(testArray, goodValue)).to.equal(true);
            done();
        });
        
        
        it('should return false for not having the value somewhere in the string in the array', (done) => {
            expect(UtilityService.arrayOfStringsContainsValue(testArray, badValue)).to.equal(false);
            done();
        });
    });
    
    
    
    describe('getIndexOfItemThatContainsValueFromArray', () => {
        const testArray = ['test', 'wow', 'neat', 'test'];
        const goodValue = 'es';
        const secondGoodValue = 'wow';
        const badValue = 'wowowow';
        
        it('should return 0 for having the value somewhere in the string in the array', (done) => {
            expect(UtilityService.getIndexOfItemThatContainsValueFromArray(testArray, goodValue)).to.equal(0);
            done();
        });
        
        
        it('should return -1 for not having the value somewhere in the string in the array', (done) => {
            expect(UtilityService.getIndexOfItemThatContainsValueFromArray(testArray, badValue)).to.equal(-1);
            done();
        });
        
        
        it('should return 1 for not having the value somewhere in the string in the array', (done) => {
            expect(UtilityService.getIndexOfItemThatContainsValueFromArray(testArray, secondGoodValue)).to.equal(1);
            done();
        });
    });
    
    
    
    describe('generateRandomInteger', () => {
        it('should return a single random single-digit integer', (done) => {
            // @ts-ignore
            const result = UtilityService.generateRandomInteger();
            
            expect(result).to.be.a('number');
            expect(result).to.be.greaterThan(-1).and.lessThan(10);
            
            done();
        });
    });
    
    
    
    describe('convertValueToStringValue', () => {
        it('should convert \'test\' to \'"test"\'', (done) => {
            const result = UtilityService.convertValueToStringValue('test');
            
            expect(result).to.equal('"test"');
            done();
        });
        
        
        
        it('should convert [1] to "[1]"', (done) => {
            const result = UtilityService.convertValueToStringValue([1]);
            
            expect(result).to.equal('[1]');
            done();
        });
        
        
        
        it('should convert {test: 123} to "{"test":123}"', (done) => {
            const result = UtilityService.convertValueToStringValue({test: 123});
            
            expect(result).to.equal('{"test":123}');
            done();
        });
    });
    
    
    
    describe('pluralityQualifier', () => {
        it('should return an "s" because the input is not equal to 1', (done) => {
            const result = UtilityService.pluralityQualifier(2, 's');
            
            expect(result).to.equal('s');
            done();
        });
        
        
        
        it('should return an "s" because the input is not equal to 1', (done) => {
            const result = UtilityService.pluralityQualifier(1.1, 's');
            
            expect(result).to.equal('s');
            done();
        });
        
        
        
        it('should return an "s" because the input is not equal to 1', (done) => {
            const result = UtilityService.pluralityQualifier(1.01, 's');
            
            expect(result).to.equal('s');
            done();
        });
        
        
        
        it('should return an "s" because the input is not equal to 1', (done) => {
            const result = UtilityService.pluralityQualifier(.9, 's');
            
            expect(result).to.equal('s');
            done();
        });
        
        
        
        it('should return an "s" because the input is not equal to 1', (done) => {
            const result = UtilityService.pluralityQualifier(0, 's');
            
            expect(result).to.equal('s');
            done();
        });
        
        
        
        it('should return an "" because the input is equal to 1', (done) => {
            const result = UtilityService.pluralityQualifier(1, 's');
            
            expect(result).to.equal('');
            done();
        });
        
        
        
        it('should return an "wow" because the input is equal to 1', (done) => {
            const result = UtilityService.pluralityQualifier(1, 's', 'wow');
            
            expect(result).to.equal('wow');
            done();
        });
    });
    
    
    
    describe('validateItem', () => {
        it('should return undefined for the item being an invalid type', (done) => {
            // @ts-ignore
            const result = UtilityService.validateItem('test', 'object');
            
            expect(result).to.be.undefined;
            done();
        });
        
        
        it('should return "default value" for the item being an invalid type', (done) => {
            const result = UtilityService.validateItem('test', 'object', 'default value');
            
            expect(result).to.equal('default value');
            done();
        });
        
        
        it('should return {test: [\'wow\']} for the item being an invalid type', (done) => {
            const result = UtilityService.validateItem('test', 'object', {test: ['wow']});
            
            expect(result).to.eql({test: ['wow']});
            done();
        });
        
        
        it('should return "test" for the item being an valid type', (done) => {
            const result = UtilityService.validateItem('test', 'string', {test: ['wow']});
            
            expect(result).to.eql('test');
            done();
        });
        
        
        it('should return 1 for the item being an valid type', (done) => {
            const result = UtilityService.validateItem(1, 'number', {test: ['wow']});
            
            expect(result).to.eql(1);
            done();
        });
        
        
        it('should return {} for the item being an invalid type', (done) => {
            const result = UtilityService.validateItem(undefined, 'object', {});
            
            expect(result).to.eql({});
            done();
        });
        
        
        it('should return {} for the item being an invalid type', (done) => {
            const result = UtilityService.validateItem(null, 'object', {});
            
            expect(result).to.eql({});
            done();
        });
        
        
        it('should return {} for the item being an invalid type', (done) => {
            const result = UtilityService.validateItem([{}], 'object', {});
            
            expect(result).to.eql({});
            done();
        });
    });
    
    
    
    describe('copyObject', () => {
        it('should return the exact same value', (done) => {
            const input = 5;
            const result = UtilityService.copyObject(input);
            
            expect(input).to.eql(result);
            done();
        });
        
        
        
        it('should return the exact same value', (done) => {
            const input = {
                wow: 'neat'
            };
            const result = UtilityService.copyObject(input);
            
            expect(input).to.eql(result);
            done();
        });
        
        
        
        it('should return the exact same value', (done) => {
            const input = [{
                wow: 'neat'
            }];
            const result = UtilityService.copyObject(input);
            
            expect(input).to.eql(result);
            done();
        });
    });
    
    
    
    describe('searchStringToQueryParams', () => {
        it('should return an empty string', (done) => {
            const input = '';
            const expectedResult = {};
            
            const result = UtilityService.searchStringToQueryParams(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        it('should return an object with a query param', (done) => {
            const input = '?wow=1';
            const expectedResult = {
                wow: '1'
            };
            
            const result = UtilityService.searchStringToQueryParams(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
    });
    
    
    
    describe('getQueryObjectFromUrl', () => {
        it('should return an object with a query param', (done) => {
            const input = '?wow=1';
            const expectedResult = {
                wow: '1'
            };
            
            const result = UtilityService.getQueryObjectFromUrl(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
    });
    
    
    
    describe('extractEndpointWithoutSearchString', () => {
        it('should return all the values before the ?', (done) => {
            const input = '/dashboard?wow=1';
            const expectedResult = '/dashboard';
            
            const result = UtilityService.extractEndpointWithoutSearchString(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
    });
    
    
    
    describe('extractSearchString', () => {
        it('should return all of the values after the ?', (done) => {
            const input = '/dashboard?wow=1';
            const expectedResult = 'wow=1';
            
            const result = UtilityService.extractSearchString(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
    });
    
    
    
    describe('extractNumbersFromString', () => {
        it('should return a string with only numbers', (done) => {
            const input = '/dashboard?wow=1';
            const expectedResult = '1';
            
            const result = UtilityService.extractNumbersFromString(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        
        it('should return a string with only numbers', (done) => {
            const input = '/da2shb1o2ard?wo23w=1';
            const expectedResult = '212231';
            
            const result = UtilityService.extractNumbersFromString(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        
        it('should return a string with only numbers', (done) => {
            const input = 'fdksfgdsajfkdsjakhfdsjk';
            const expectedResult = '';
            
            const result = UtilityService.extractNumbersFromString(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
    });
    
    
    
    describe('isEmailOrPhone', () => {
        it('should return a phone because there is no @ sign', (done) => {
            const input = '8017432918';
            const expectedResult = 'phone';
            
            const result = UtilityService.isEmailOrPhone(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        
        it('should return a phone because there is no @ sign', (done) => {
            const input = 'jfkdsalkfdsmfdsjkl';
            const expectedResult = 'phone';
            
            const result = UtilityService.isEmailOrPhone(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        
        it('should return an email because there is a @ sign', (done) => {
            const input = 'whathwahthw@';
            const expectedResult = 'email';
            
            const result = UtilityService.isEmailOrPhone(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        
        it('should return an email because there is a @ sign', (done) => {
            const input = 'test@test.com';
            const expectedResult = 'email';
            
            const result = UtilityService.isEmailOrPhone(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
    });
    
    
    
    describe('roundNumber', () => {
        
        it('should return 124 from 123.56', (done) => {
            const input = 123.56;
            const expectedResult = 124;
            
            const result = UtilityService.roundNumber(input, 0);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        it('should return 123.6 from 123.56', (done) => {
            const input = 123.56;
            const expectedResult = 123.6;
            
            const result = UtilityService.roundNumber(input, 1);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        it('should return 123.56 from 123.56', (done) => {
            const input = 123.56;
            const expectedResult = 123.56;
            
            const result = UtilityService.roundNumber(input, 2);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        it('should return 123.56 from 123.56', (done) => {
            const input = 123.56;
            const expectedResult = 120;
            
            const result = UtilityService.roundNumber(input, -1);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        it('should return 123.56 from 123.56', (done) => {
            const input = 123.56;
            const expectedResult = 100;
            
            const result = UtilityService.roundNumber(input, -2);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
    });
    
    
    
    describe('formatAsCurrency', () => {
        
        it('should return $123.56 from 123.56', (done) => {
            const input = 123.56;
            const expectedResult = '$123.56';
            
            const result = UtilityService.formatAsCurrency(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        it('should return -$800.00 from -800', (done) => {
            const input = -800;
            const expectedResult = '-$800.00';
            
            const result = UtilityService.formatAsCurrency(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        it('should return -$800.01 from -800.01', (done) => {
            const input = -800.01;
            const expectedResult = '-$800.01';
            
            const result = UtilityService.formatAsCurrency(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        it('should return -$216.00 from -216', (done) => {
            const input = -216;
            const expectedResult = '-$216.00';
            
            const result = UtilityService.formatAsCurrency(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return $1,234.56 from 1234.56', (done) => {
            const input = 1234.56;
            const expectedResult = '$1,234.56';
            
            const result = UtilityService.formatAsCurrency(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return $1,234,567.89 from 1234567.89', (done) => {
            const input = 1234567.89;
            const expectedResult = '$1,234,567.89';
            
            const result = UtilityService.formatAsCurrency(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return $1,234,568.00 from 1234567.89', (done) => {
            const input = 1234567.89;
            const expectedResult = '$1,234,568.00';

            // @ts-ignore
            const result = UtilityService.formatAsCurrency(input, {round: 0});
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return $1,234,567.90 from 1234567.89', (done) => {
            const input = 1234567.89;
            const expectedResult = '$1,234,567.90';

            // @ts-ignore
            const result = UtilityService.formatAsCurrency(input, {round: 1});
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return $1,234,567.89 from 1234567.89', (done) => {
            const input = 1234567.89;
            const expectedResult = '$1,234,567.89';
            
            const result = UtilityService.formatAsCurrency(input, {round: 2});
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return $1,234,567.89 from 1234567.89', (done) => {
            const input = 1234567.89;
            const expectedResult = '$1,234,567.89';

            // @ts-ignore
            const result = UtilityService.formatAsCurrency(input, {round: 3});
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return $1.234.567,89 from 1234567.89', (done) => {
            const input = 1234567.89;
            const expectedResult = '$1.234.567,89';
            
            const result = UtilityService.formatAsCurrency(input, {
                decimal: ',',
                thousands: '.'
            });
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return £1.234.567,89 from 1234567.89', (done) => {
            const input = 1234567.89;
            const expectedResult = '£1.234.567,89';
            
            const result = UtilityService.formatAsCurrency(input, {
                decimal: ',',
                thousands: '.',
                currencySign: '£'
            });
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
    });
    
    
    
    describe('sortArrayOfObjectsByKey', () => {
        
        
        
        it('should return a sorted array of objects based on the key', (done) => {
            const input = [{
                id: 1
            }, {
                id: 3
            }, {
                id: 2
            }];
            
            const expectedResult = [{
                id: 1
            }, {
                id: 2
            }, {
                id: 3
            }];
            
            const result = UtilityService.sortArrayOfObjectsByKey(input, 'id');
            
            expect(result).to.eql(expectedResult);
            
            done();
        });
        
        
        
        it('should return a sorted array of objects based on the key', (done) => {
            const input = [{
                id: 1
            }, {
                id: 3
            }, {
                id: 2
            }];
            
            const expectedResult = [{
                id: 3
            }, {
                id: 2
            }, {
                id: 1
            }];
            
            const result = UtilityService.sortArrayOfObjectsByKey(input, 'id', true);
            
            expect(result).to.eql(expectedResult);
            
            done();
        });
    });
    
    
    
    describe('_getValueForSorting', () => {
        it('should return a string', (done) => {
            const input = 'wow';
            const expectedResult = 'WOW';
            
            const result = UtilityService._getValueForSorting(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        
        it('should return a number', (done) => {
            const input = '1';
            const expectedResult = 1;
            
            const result = UtilityService._getValueForSorting(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        
        it('should return a number', (done) => {
            const input = 1;
            const expectedResult = 1;
            
            const result = UtilityService._getValueForSorting(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
    });
    
    
    
    describe('toProperCase', () => {
        it('should return "Wow" from "wow"', (done) => {
            const input = 'wow';
            const expectedResult = 'Wow';
            
            const result = UtilityService.toProperCase(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return "Wow" from "Wow"', (done) => {
            const input = 'Wow';
            const expectedResult = 'Wow';
            
            const result = UtilityService.toProperCase(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return "Wow-wow" from "wow-wow"', (done) => {
            const input = 'wow-wow';
            const expectedResult = 'Wow-wow';
            
            const result = UtilityService.toProperCase(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return "Wow-wow" from "WOW-WOW"', (done) => {
            const input = 'WOW-WOW';
            const expectedResult = 'Wow-wow';
            
            const result = UtilityService.toProperCase(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return "Wow Wow" from "WOW WOW"', (done) => {
            const input = 'WOW WOW';
            const expectedResult = 'Wow Wow';
            
            const result = UtilityService.toProperCase(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return "Wow Wow" from "wow wow"', (done) => {
            const input = 'wow wow';
            const expectedResult = 'Wow Wow';
            
            const result = UtilityService.toProperCase(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
        
        
        it('should return "Wow -Wow" from "wow -wow"', (done) => {
            const input = 'wow -wow';
            const expectedResult = 'Wow -Wow';
            
            const result = UtilityService.toProperCase(input);
            
            expect(result).to.equal(expectedResult);
            done();
        });
    });
    
    
    
    describe('extractQueryParametersFromUrl', () => {
        it('should return an object with 4 keys', (done) => {
            const input = 'http://localhost:3000/?testMode=true&skipSending=true&dob=8/15/1988&input=8018229822';
            const expectedResult = {
                testMode: 'true',
                skipSending: 'true',
                dob: '8/15/1988',
                input: '8018229822'
            };
            
            const result = UtilityService.extractQueryParametersFromUrl(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
    });
    
    
    
    describe('objectToQueryString', () => {
        it('should return a querystring with 4 keys', (done) => {
            const input = {
                testMode: 'true',
                skipSending: 'true',
                dob: '8/15/1988',
                input: '8018229822'
            };
            const expectedResult = 'testMode=true&skipSending=true&dob=8%2F15%2F1988&input=8018229822';
            
            const result = UtilityService.objectToQueryString(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return a querystring with 4 keys', (done) => {
            const input = {
                testMode: 'false',
                skipSending: '1',
                dob: 1,
                input: 'super long thing'
            };
            const expectedResult = 'testMode=false&skipSending=1&dob=1&input=super%20long%20thing';
            
            const result = UtilityService.objectToQueryString(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
    });
    
    
    
    describe('isJson', () => {
        it('should return false', (done) => {
            const input = 'wow';
            const expectedResult = false;
            
            const result = UtilityService.isJson(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return false', (done) => {
            const input = {
                wow: true
            };
            const expectedResult = false;
            
            const result = UtilityService.isJson(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return true', (done) => {
            const input = JSON.stringify({
                wow: true
            });
            const expectedResult = true;
            
            const result = UtilityService.isJson(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
    });
    
    
    
    describe('numberToPercentage', () => {
        it('should return \'234.0%\'', (done) => {
            const input = 234;
            const decimals = 1;
            const expectedResult = '23400%';
            
            const result = UtilityService.numberToPercentage(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return \'100.00%\'', (done) => {
            const input = 1.0001;
            const decimals = 2;
            const expectedResult = '100.01%';
            
            const result = UtilityService.numberToPercentage(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return \'120.000%\'', (done) => {
            const input = 1.20000001;
            const decimals = 3;
            const expectedResult = '120%';
            
            const result = UtilityService.numberToPercentage(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return \'20.282%\'', (done) => {
            const input = .20282;
            const decimals = 3;
            const expectedResult = '20.282%';
            
            const result = UtilityService.numberToPercentage(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return \'20.282%\'', (done) => {
            const input = .20282;
            const decimals = 0;
            const expectedResult = '20%';
            
            const result = UtilityService.numberToPercentage(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return \'20.282%\'', (done) => {
            const input = .20782;
            const decimals = 0;
            const expectedResult = '21%';
            
            const result = UtilityService.numberToPercentage(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
    });
    
    
    
    describe('round', () => {
        it('should return 234', (done) => {
            const input = 234;
            const decimals = 1;
            const expectedResult = 234;
            
            const result = UtilityService.round(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return 1', (done) => {
            const input = 1.0001;
            const decimals = 2;
            const expectedResult = 1;
            
            const result = UtilityService.round(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return 1.202', (done) => {
            const input = 1.20200001;
            const decimals = 3;
            const expectedResult = 1.202;
            
            const result = UtilityService.round(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return .203', (done) => {
            const input = .20282;
            const decimals = 3;
            const expectedResult = .203;
            
            const result = UtilityService.round(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return 20', (done) => {
            const input = 20.20282;
            const decimals = 0;
            const expectedResult = 20;
            
            const result = UtilityService.round(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        
        
        it('should return 21', (done) => {
            const input = 20.70782;
            const decimals = 0;
            const expectedResult = 21;
            
            const result = UtilityService.round(input, decimals);
            
            expect(result).to.eql(expectedResult);
            done();
        });
    });
    
    
    
    describe('numberWithCommas', () => {
        
        it('should return 21', (done) => {
            const input = 21;
            const expectedResult = '21';
            
            const result = UtilityService.numberWithCommas(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        it('should return 211', (done) => {
            const input = 211;
            const expectedResult = '211';
            
            const result = UtilityService.numberWithCommas(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        it('should return 2,411', (done) => {
            const input = 2411;
            const expectedResult = '2,411';
            
            const result = UtilityService.numberWithCommas(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        it('should return 2,411', (done) => {
            const input = 2411.0;
            const expectedResult = '2,411';
            
            const result = UtilityService.numberWithCommas(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        it('should return 2,411.1', (done) => {
            const input = 2411.1;
            const expectedResult = '2,411.1';
            
            const result = UtilityService.numberWithCommas(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
        it('should return 5,228,283,441,411.1', (done) => {
            const input = 5228283441411.1;
            const expectedResult = '5,228,283,441,411.1';
            
            const result = UtilityService.numberWithCommas(input);
            
            expect(result).to.eql(expectedResult);
            done();
        });
        
    });
    
    
});