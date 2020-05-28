const PROXY_CONFIG = [
    {
        context: ['/pagseguro'],
        target: 'https://ws.pagseguro.uol.com.br',
        secure: false,
        logLevel: 'debug',
        pathRewrite: { '^/pagseguro': '/v2'}
    }
];

module.exports = PROXY_CONFIG;
