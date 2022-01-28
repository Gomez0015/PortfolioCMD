import { wordlist } from '../consts';
const md5 = require('md5');

function encrypt(word) {
    return md5(word);
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

export const crackMd5 = function(hash) {
    return bruteForce(hash);
}