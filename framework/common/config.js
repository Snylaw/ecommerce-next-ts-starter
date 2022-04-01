

const path = require('path');
const fs = require('fs');
const merge = require('deepmerge');
const prettier = require('prettier');

const ALLOWED_FRAMEWORKS = ["shopify", "bigcommerce", "shopify_local"];

function withFrameworkConfig(defaultConfig = {}) {
    let framework = defaultConfig?.framework?.name

    if (!framework) {
        throw new Error('Missing api framework name in config')
    }

    if (!ALLOWED_FRAMEWORKS.includes(framework)) {
        throw new Error(`Invalid api framework name: ${framework}, allowed values: ${ALLOWED_FRAMEWORKS.join(', ')}`)
    }
    
    if (framework === "shopify_local") {
        framework = ALLOWED_FRAMEWORKS[0];
    }

    const frameworkNextConfig = require(path.join("../", framework, "next.config"));
    const config = merge(defaultConfig, frameworkNextConfig);

    const tsPath = path.join(process.cwd(), "tsconfig.json");
    const tsConfig = require(tsPath);

    tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
    tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

    fs.writeFileSync(
        tsPath,
        prettier.format(
            JSON.stringify(tsConfig), { parser: "json" }
        )
    )

    return config;
}

module.exports = { withFrameworkConfig };