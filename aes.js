/*//使用crypto库实现aes加解密
var crypto = require("crypto");

var algorithm='aes-256-cbc';
var key = new Buffer("aaaabbbbccccddddeeeeffffgggghhhh");
var iv = new Buffer("1234567812345678");
function encrypt(text){
    var cipher=crypto.createCipheriv(algorithm,key,iv);
    cipher.update(text,"utf8");
    return cipher.final("base64");
}
function decrypt(text){
    var cipher=crypto.createDecipheriv(algorithm,key,iv);
    cipher.update(text,"base64");
    return cipher.final("utf8");
}

var text="ni你好hao";
var encoded=encrypt(text)
console.log(encoded);
console.log(decrypt(encoded))*/

//使用crypto-js库实现aes加解密
var CryptoJS = require("crypto-js");
var key ="aaaabbbbccccddddeeeeffffgggghhhh";
var iv = "1234567812345678";

function encrypt(text){
    return CryptoJS.AES.encrypt(text,CryptoJS.enc.Utf8.parse(key),{
        iv:CryptoJS.enc.Utf8.parse(iv),
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    })
}

function decrypt(text){
    var result = CryptoJS.AES.decrypt(text,CryptoJS.enc.Utf8.parse(key),{
        iv:CryptoJS.enc.Utf8.parse(iv),
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    })
    return result.toString(CryptoJS.enc.Utf8)
}

var text="ni你好hao";
var encoded=encrypt(text)
console.log(encoded.toString());
console.log(decrypt(encoded))