import HttpService from './src/components/HttpService';
export { HttpService };
import TypeService from './src/components/TypeService';
export { TypeService };
import UtilityService from './src/components/UtilityService';
export { UtilityService };
declare const _default: {
    HttpService: {
        http: typeof import("./src/components/HttpService").http;
        _getAllHeaders: typeof import("./src/components/HttpService")._getAllHeaders;
    };
    TypeService: {
        isUndefined: typeof import("./src/components/TypeService").isUndefined;
        isNull: typeof import("./src/components/TypeService").isNull;
        isDate: typeof import("./src/components/TypeService").isDate;
        isBoolean: typeof import("./src/components/TypeService").isBoolean;
        isInteger: typeof import("./src/components/TypeService").isInteger;
        isNumeric: typeof import("./src/components/TypeService").isNumeric;
        isFunction: typeof import("./src/components/TypeService").isFunction;
        isString: typeof import("./src/components/TypeService").isString;
        isObject: typeof import("./src/components/TypeService").isObject;
        isArray: typeof import("./src/components/TypeService").isArray;
        isIsoString: typeof import("./src/components/TypeService").isIsoString;
    };
    UtilityService: {
        isEmailOrPhone: typeof import("./src/components/UtilityService").isEmailOrPhone;
        generateRandomNumberString: typeof import("./src/components/UtilityService").generateRandomNumberString;
        repeatFunction: typeof import("./src/components/UtilityService").repeatFunction;
        repeatString: typeof import("./src/components/UtilityService").repeatString;
        isValidPhone: typeof import("./src/components/UtilityService").isValidPhone;
        obfuscatePhone: typeof import("./src/components/UtilityService").obfuscatePhone;
        isJson: typeof import("./src/components/UtilityService").isJson;
        extractQueryParametersFromUrl: typeof import("./src/components/UtilityService").extractQueryParametersFromUrl;
        obfuscateEmail: typeof import("./src/components/UtilityService").obfuscateEmail;
        isValidEmail: typeof import("./src/components/UtilityService").isValidEmail;
        sanitizePhone: typeof import("./src/components/UtilityService").sanitizePhone;
        numberToPercentage: typeof import("./src/components/UtilityService").numberToPercentage;
        round: typeof import("./src/components/UtilityService").round;
        numberWithCommas: typeof import("./src/components/UtilityService").numberWithCommas;
        sanitizeEmail: typeof import("./src/components/UtilityService").sanitizeEmail;
        roundNumber: typeof import("./src/components/UtilityService").roundNumber;
        toProperCase: typeof import("./src/components/UtilityService").toProperCase;
        objectToQueryString: typeof import("./src/components/UtilityService").objectToQueryString;
        formatAsCurrency: typeof import("./src/components/UtilityService").formatAsCurrency;
        arrayOfStringsContainsValue: typeof import("./src/components/UtilityService").arrayOfStringsContainsValue;
        getIndexOfItemThatContainsValueFromArray: typeof import("./src/components/UtilityService").getIndexOfItemThatContainsValueFromArray;
        convertValueToStringValue: typeof import("./src/components/UtilityService").convertValueToStringValue;
        pluralityQualifier: typeof import("./src/components/UtilityService").pluralityQualifier;
        validateItem: typeof import("./src/components/UtilityService").validateItem;
        copyObject: typeof import("./src/components/UtilityService").copyObject;
        searchStringToQueryParams: typeof import("./src/components/UtilityService").searchStringToQueryParams;
        getQueryObjectFromUrl: typeof import("./src/components/UtilityService").getQueryObjectFromUrl;
        extractEndpointWithoutSearchString: typeof import("./src/components/UtilityService").extractEndpointWithoutSearchString;
        extractNumbersFromString: typeof import("./src/components/UtilityService").extractNumbersFromString;
        extractSearchString: typeof import("./src/components/UtilityService").extractSearchString;
        sortArrayOfObjectsByKey: typeof import("./src/components/UtilityService").sortArrayOfObjectsByKey;
        generateRandomInteger: typeof import("./src/components/UtilityService").generateRandomInteger;
        _getValueForSorting: typeof import("./src/components/UtilityService")._getValueForSorting;
    };
};
export default _default;
