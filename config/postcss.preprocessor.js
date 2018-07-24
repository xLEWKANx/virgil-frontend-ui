const postcss = require('postcss');
const config = require('./postcss.config');

module.exports = (css) => {
    let result;
    try {
        result = postcss(config().plugins)
            .process(css)
            .css();

    } catch(e) {
        console.log(e)
    }
    console.log('result', result);
    return result;
}
