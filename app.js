const jsonwebtoken = require(`jsonwebtoken`)

// bring in the tools
const SetupServerAuth = require('./src/setup/setupServerAuth')
const SetupPong = require('./src/setup/setupPong')

const setupServerAuth = SetupServerAuth.setupServerAuth
const pong = SetupPong.pong


function authenticateToken(bearertoken, publickey, signOptions) {
    if ( typeof jwt == `undefined`) throw new Error('jwt is undefined')
    if ( typeof publicKey == `undefined`) throw new Error('publickey is undefined')
    const jwt = bearertoken.split(' ') [1]
    jsonwebtoken.verify(jwt, publickey, signOptions, (err, authData) => {
        if(err) {
            throw new Error('token not valid')
        } 
        return authData   
    });
}




module.exports = {
    setupServerAuth,
    pong, 
    authenticateToken
}