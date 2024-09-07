/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/messages',
                destination: '/',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
