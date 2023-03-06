import webpack, {DefinePlugin, RuleSetRule} from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoaders} from "../build/loaders/buildCssLoaders";

export default ({config}: { config: webpack.Configuration }) => {

    const paths: BuildPaths = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src")
    }
    config.resolve.modules.unshift(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/}
        }

        return rule;
    })

    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    })
    config.module.rules.push(buildCssLoaders(true))

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true
    }))

    return config;
};