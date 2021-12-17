import chai from 'chai';
let {expect} = chai;

import TypeService from './index';


//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//


describe('TypeService.ts', function() {
    
    describe('multiTest', () => {
    
        const test_functions = [
            'isUndefined',
            'isNull',
            'isDate',
            'isBoolean',
            'isInteger',
            'isNumeric',
            'isFunction',
            'isString',
            'isObject',
            'isArray'
        ];
    
        const test_values = [
            {
                variables: [],
                variable_text: [''],
                tests: {
                    isUndefined: true,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: [undefined],
                variable_text: ['undefined'],
                tests: {
                    isUndefined: true,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: [undefined, true],
                variable_text: ['undefined', 'true'],
                tests: {
                    isUndefined: true,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: [null],
                variable_text: ['null'],
                tests: {
                    isUndefined: false,
                    isNull: true,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: [null, true],
                variable_text: ['null', true],
                tests: {
                    isUndefined: false,
                    isNull: true,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: ['Hello'],
                variable_text: ['\'Hello\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['Hello', true],
                variable_text: ['\'Hello\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [''],
                variable_text: ['\'\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: ['', true],
                variable_text: ['\'\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [[]],
                variable_text: ['[]'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: true,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: [[], true],
                variable_text: ['[]', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: true,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [['test string']],
                variable_text: ['[\'test string\']'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: true,
                    isJsonItem: true,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [['test string'], true],
                variable_text: ['[\'test string\']', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: true,
                    isJsonItem: true,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['2019-01-05T05:21:19+05:00'],
                variable_text: ['2019-01-05T05:21:19+05:00'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: true,
                    isValidResponse: true
                }
            }, {
                variables: ['2019-01-05T05:21:19+05:00', true],
                variable_text: ['2019-01-05T05:21:19+05:00', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: true,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: true,
                    isValidResponse: true
                }
            }, {
                variables: [function() {
                }],
                variable_text: ['function(){}'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: true,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: [function() {
                }, true],
                variable_text: ['function(){}', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: true,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: [{}],
                variable_text: ['{}'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: true,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: false
                }
            }, {
                variables: [{}, true],
                variable_text: ['{}', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: true,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [{test: true}],
                variable_text: ['{test: true}'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: true,
                    isArray: false,
                    isJsonItem: true,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [{test: true}, true],
                variable_text: ['{test: true}', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: true,
                    isArray: false,
                    isJsonItem: true,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [true],
                variable_text: ['true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [true, true],
                variable_text: ['true', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['true'],
                variable_text: ['\'true\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['true', true],
                variable_text: ['\'true\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [false],
                variable_text: ['false'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [false, true],
                variable_text: ['false', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['false'],
                variable_text: ['\'false\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['false', true],
                variable_text: ['\'false\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [0],
                variable_text: ['0'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['0'],
                variable_text: ['\'0\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [0, true],
                variable_text: ['0', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['0', true],
                variable_text: ['\'0\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [1],
                variable_text: ['1'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['1'],
                variable_text: ['\'1\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [1, true],
                variable_text: ['1', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['1', true],
                variable_text: ['\'1\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [2],
                variable_text: ['2'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['2'],
                variable_text: ['\'2\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [2, true],
                variable_text: ['2', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['2', true],
                variable_text: ['\'2\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [0.1],
                variable_text: ['0.1'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [0.1, true],
                variable_text: ['0.1', true],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['0.1'],
                variable_text: ['\'0.1\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: true,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['0.1', true],
                variable_text: ['\'0.1\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [1.1],
                variable_text: ['1.1'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [1.1, true],
                variable_text: ['1.1', true],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['1.1'],
                variable_text: ['\'1.1\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: true,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['1.1', true],
                variable_text: ['\'1.1\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [100000],
                variable_text: ['100000'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['100000'],
                variable_text: ['\'100000\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: true,
                    isNumeric: true,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [new Date()],
                variable_text: ['new Date()'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: true,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [new Date('1/15/2017')],
                variable_text: ['new Date(\'1/15/2017\')'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: true,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [new Date(), true],
                variable_text: ['new Date()', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: true,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [new Date('1/15/2017'), true],
                variable_text: ['new Date(\'1/15/2017\')', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: true,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['1/15/2017'],
                variable_text: ['\'1/15/2017\''],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['1/15/2017', true],
                variable_text: ['\'1/15/2017\'', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: true,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [true, true, true],
                variable_text: ['true', 'true', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [true, true, false],
                variable_text: ['true', 'true', 'false'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['true', true, true],
                variable_text: ['\'true\'', 'true', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['true', true, false],
                variable_text: ['\'true\'', 'true', 'false'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [false, true, true],
                variable_text: ['false', 'true', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [false, true, false],
                variable_text: ['false', 'true', 'false'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['false', true, true],
                variable_text: ['\'false\'', 'true', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['false', true, false],
                variable_text: ['\'false\'', 'true', 'false'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [true, false, true],
                variable_text: ['true', 'false', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [true, false, false],
                variable_text: ['true', 'false', 'false'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['true', false, true],
                variable_text: ['\'true\'', 'false', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['true', false, false],
                variable_text: ['\'true\'', 'false', 'false'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [false, false, true],
                variable_text: ['false', 'false', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: [false, false, false],
                variable_text: ['false', 'false', 'false'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: true,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: false,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['false', false, true],
                variable_text: ['\'false\'', 'false', 'true'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }, {
                variables: ['false', false, false],
                variable_text: ['\'false\'', 'false', 'false'],
                tests: {
                    isUndefined: false,
                    isNull: false,
                    isDate: false,
                    isBoolean: false,
                    isInteger: false,
                    isNumeric: false,
                    isFunction: false,
                    isString: true,
                    isObject: false,
                    isArray: false,
                    isJsonItem: false,
                    isIsoString: false,
                    isValidResponse: true
                }
            }
        ];
    
        const testResults = test_functions.map(function(test) {
            describe(test + ' tests', function() {
            
                test_values.forEach(function(v, i) {
                
                    const action = TypeService[test];
                    const expected_outcome = !!v.tests[test];
                    let action_result;
                    let test_description;
                
                    const var_one_value = (v.variables.length >= 1) ? v.variables[0] : null;
                    const var_two_value = (v.variables.length >= 2) ? v.variables[1] : null;
                    const var_three_value = (v.variables.length >= 3) ? v.variables[2] : null;
                
                    let var_one_text = var_one_value;
                    let var_two_text = var_two_value;
                    let var_three_text = var_three_value;
                
                    v.variable_text = (Array.isArray(v.variable_text)) ? v.variable_text : [];
                    v.variable_text.length = v.variables.length;
                
                    if (v.variables.length >= 1) {
                        var_one_text = (v.variable_text[0]) ? v.variable_text[0] : var_one_text;
                    }
                
                    if (v.variables.length >= 2) {
                        var_two_text = (v.variable_text[1]) ? v.variable_text[1] : var_two_text;
                    }
                
                    if (v.variables.length >= 3) {
                        var_three_text = (v.variable_text[2]) ? v.variable_text[2] : var_three_text;
                    }
                
                    if (v.variables.length === 3) {
                        action_result = action(var_one_value, var_two_value, var_three_value);
                        test_description = '(' + var_one_text + ', ' + var_two_text + ', ' + var_three_text + ')';
                    } else if (v.variables.length === 2) {
                        action_result = action(var_one_value, var_two_value);
                        test_description = '(' + var_one_text + ', ' + var_two_text + ')';
                    } else if (v.variables.length === 1) {
                        action_result = action(var_one_value);
                        test_description = '(' + var_one_text + ')';
                    } else {
                        action_result = action();
                        test_description = '()';
                    }
                
                    it(test + test_description + ' to be equal to ' + expected_outcome, function(done) {
                        expect(action_result).to.equal(expected_outcome);
                        done();
                    });
                
                });
            
            });
        });
        
    });
    
    
    describe('isUndefined', () => {
    
    });
    
    
    describe('isNull', () => {
    
    });
    
    
    describe('isDate', () => {
    
    });
    
    
    describe('isBoolean', () => {
    
    });
    
    
    describe('isInteger', () => {
    
    });
    
    
    describe('isNumeric', () => {
    
    });
    
    
    describe('isFunction', () => {
    
    });
    
    
    describe('isString', () => {
    
    });
    
    
    describe('isObject', () => {
    
    });
    
    
    describe('isArray', () => {
    
    });
    
    
    
});