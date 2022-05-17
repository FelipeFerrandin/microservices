module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    env: {
        production: {
            plugins: [["inline-dotenv", {
                path: '.env'
            }]]
        },
        development: {
            plugins: [["inline-dotenv", {
                path: '.env'
            }]]
        }
    },
    plugins: [
        ['module-resolver', {
            alias: {
                '@': './src/',
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}