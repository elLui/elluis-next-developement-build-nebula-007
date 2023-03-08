module.exports = {

    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(mp4)$/i, use: [{
                loader: "url-loader", options: {
                    limit: 8192,
                    fallback: require.resolve("file-loader"),
                    publicPath: `/_next/static/videos/`,
                    outputPath: `${options.isServer ? "../" : ""}static/videos/`,
                    name: "[name].[hash].[ext]",
                },
            }],
        });
        return config;
    },


    experimental: {
        appDir: true,
    }, compiler: {
        styledComponents: true,
    },
};
