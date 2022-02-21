
// https://stackoverflow.com/questions/71210858/tsdx-cant-import-css-sass-files-as-modules-in-react-components

module.exports = {
    stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: 'storybook-addon-sass-postcss',
            options: {
                sassLoaderOptions: {
                    implementation: require('sass'),
                },
            },
        },
    ],
    typescript: {
        check: true,
    }
};
