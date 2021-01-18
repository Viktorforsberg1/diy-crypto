
function caesarEncrypt(msg, shift) {

    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))
    }

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift
    }

    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }

    return result
}

function caesarDecrypt(encryptedMessage, shift){
    
    //1. översätta encrypt till tecken
    const charCodes = []
    for (let i = 0; i < encryptedMessage.length; i++) {
        charCodes.push(encryptedMessage[i].charCodeAt(0))
    }

    //2 shifta tillbka
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] - shift

    }
    //3 översätt från charcode till string
    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }

    return result
}


const secretMessage = "RETREATTOMORROW"

const encryptedMessage = caesarEncrypt(secretMessage, 2)
const decryptedMessage = caesarDecrypt(encryptedMessage, 2)

console.log(secretMessage, encryptedMessage, decryptedMessage)