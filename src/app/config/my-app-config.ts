export default {

    // open id connect
    oidc: {
        clientId: '0oa5dauqmhX05nyoH5d7',
        issuer: 'https://dev-64253091.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }
}
