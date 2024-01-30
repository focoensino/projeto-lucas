const inputPassword = document.querySelector('#password')

const inputlength = document.querySelector('#password-length')

let inputlengthvalue = 4


function generatePassword(){
const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"
let password = ''

for(let i = 0; i < inputlengthvalue; i++){

const randomNumber = Math.floor(Math.random()* chars.length)
password += chars.substring(randomNumber,randomNumber+1)

}



inputPassword.value=password


}

function copy(){

navigator.clipboard.writeText(inputPassword)


}


inputlength.addEventListener('input',function(){

inputlengthvalue = inputlength.value

generatePassword()

console.log(inputlengthvalue)

} )


generatePassword()