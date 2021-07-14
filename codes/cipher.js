const encryptCipher = (message, key) => {
    if(!key) return message;
    let encryptedMessage = "";
    message.split("").forEach(function(char){
        if(/[a-z]/.test(char) == true){
            let temp = char.charCodeAt(0) - 97 + key;
            temp = (temp % 26) + 97;
            encryptedMessage += String.fromCharCode(temp);
        } else {
            encryptedMessage += char;
        }
    });
    return encryptedMessage;
};

const decryptCipher = (message, key) => {
    if(!key) return message;
    let decryptedMessage = "";
    message.split("").forEach(function(char){
        if(/[a-z]/.test(char) == true){
            let temp = char.charCodeAt(0) - 97 - key;
            temp = temp.mod(26) + 97;
            decryptedMessage += String.fromCharCode(temp);
        } else {
            decryptedMessage += char;
        }       
    });
    return decryptedMessage;
};

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
}

module.exports = {encryptCipher, decryptCipher};