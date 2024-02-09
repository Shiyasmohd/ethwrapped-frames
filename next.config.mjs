/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
        GRAPH_API_KEY: process.env.GRAPH_API_KEY,
    },
};

export default nextConfig;
