const getProps = config => {
    const props = []
    if (config.ref) props.push('svgRef')
    if (config.titleProp) props.push('title')
    if (config.expandProps) props.push('...props')
  
    if (props.length === 0) return '()'
    if (props.length === 1 && config.expandProps) return 'props'
  
    return `({ ${props.join(', ')} })`
  }

module.exports = (code, config, state) => {
    const props = getProps(config)
    let result = `import React from 'react'\n\n`;
    result += `const ${state.componentName} = (${props}: React.SVGAttributes<SVGElement>) => ${code}\n\n`;

    if (state.webpack && state.webpack.previousExport) {
        result += `export default ${state.webpack.previousExport}\n`
        result += `export { ${state.componentName} as ReactComponent }`
    } else if (state.rollup && state.rollup.previousExport) {
        result += `${state.rollup.previousExport}\n`
        result += `export { ${state.componentName} as ReactComponent }`
    } else {
        result += `export default ${state.componentName}`
    }

    return result
}