module.exports = {
    async redirects() {
        return [
            {
                source: "/",
                has: [
                    {
                        type: 'header',
                        key: 'x-authorized',
                        value: '(?<authorized>yes|true)',
                    },
                ],
                permanent: false,
                destination: '/feed'
            },
            {
                source: '/blog',
                destination: '/blog/1',
                permanent: true,
            }
        ]
    }
}