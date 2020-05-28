const jsonwebtoken = require(`jsonwebtoken`)

function pong(){
    return 'pong'
}

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
    pong, 
    authenticateToken
}