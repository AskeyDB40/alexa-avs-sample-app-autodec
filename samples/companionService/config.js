/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.72f76dcfdaf14743b5784a7e11abb067',
    clientSecret: '45b3027f04417834d6f5cb7f36d41af6ce3df1a7af4dc97e763562f56ec4eafc',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: 'E:\\Alexa\\sample\\samples\\javaclient\\certs\\server\\node.key',
    sslCert: 'E:\\Alexa\\sample\\samples\\javaclient\\certs\\server\\node.crt',
    sslCaCert: 'E:\\Alexa\\sample\\samples\\javaclient\\certs\\ca\\ca.crt',
    products: {
        "my_device": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
