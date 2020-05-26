const PROXY_CONFIG = [
    {
        context: ['/v2'],
        target: 'https://ws.pagseguro.uol.com.br',
        secure: false,
        logLevel: 'debug',
        // pathRewrite: { '^/v2': '' }
    }
];

module.exports = PROXY_CONFIG;
