var webpack = require('webpack');

module.exports = {
    entry: {
        'test': ['./example/test.jsx']
    },
    output: {
        filename: '[name]_dist.js',
        path: './example',
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
