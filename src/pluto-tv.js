/**!
 * @license Pluto-TV.js - A JavaScript library for fetching free Pluto TV streams. 
 * VERSION: 1.0.0
 * LICENSED UNDER MIT LICENSE
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/Pluto-TV.js/
 */
import {
    ParseM3U
} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/IPTV-Parser.js@v1.0.0/dist/iptv-parser.min.js';

if (typeof node !== 'undefined' || typeof process === 'object') {
    try {
        let fetch = require('node-fetch');
    } catch (e) {
        console.log('node-fetch is not installed. Please install node-fetch to use this script.');
        if (typeof process !== 'undefined') {
            process.exit(1);
        }
    }
}

export function PlutoTV() {

    function search(json, key, value) {
        var result = [];
        for (var i = 0; i < json.length; i++) {
            if (json[i][key].includes(value)) {
                result.push(json[i]);
            }
        }
        return result;
    }


    async function searchChannels(query, countryCode) {
        try {
            if (!query) {
                throw new Error(`No query was provided to search for.`);
            }
            let parsed_results = await fetchPluto(countryCode)
            return search(parsed_results.items, 'name', query)
        } catch (error) {
            throw error
        }
    }

    async function fetchAllChannels(countryCode) {
        try {
            let parsed_results = await fetchPluto(countryCode)
            return parsed_results
        } catch (error) {
            throw error
        }
    }


    async function fetchPluto(countryCode) {
        try {
            let defaultCountryCode = "us"
            let countryCodes = ["br", "de", "es", "fr", "mx", "uk", "us"]

            function checkifValid(countryCode) {
                for (const item in countryCodes) {
                    if (countryCode === countryCodes[item]) {
                        //console.log("g")
                        return true
                    }

                }
            }


            if (countryCode) {
                countryCode = countryCode.toLowerCase()
                if (!checkifValid(countryCode)) {
                    throw new Error(`Language code is not valid for Pluto TV. Valid language codes are ${countryCodes}`);

                }
                defaultCountryCode = countryCode

            }


            let IPTV_Results = ParseM3U(`https://raw.githubusercontent.com/iptv-org/iptv/master/streams/${defaultCountryCode}_pluto.m3u`, "URL")


            return IPTV_Results
        } catch (err) {
            throw err
        }
    }


    return {
        searchChannels: searchChannels,
        fetchAllChannels: fetchAllChannels,
    }

}
