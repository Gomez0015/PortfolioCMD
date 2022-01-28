import { wordlist } from '../consts';
const sha1 = require('js-sha1');


function encrypt(word) {
    return sha1(word);
}

function bruteForce(hash) {
    let newWordList = [];
    wordlist.forEach(function(word) {
        newWordList.push(encrypt(word));
    });

    if (newWordList.includes(hash)) {
        return ('Found hash: ' + wordlist[newWordList.indexOf(hash)]);
    } else {
        return ('Could find hash :(');
    }
}

export const crackSHA1 = function(hash) {
    return bruteForce(hash);
}