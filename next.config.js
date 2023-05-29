/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/missions",
                destination: "/",
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
