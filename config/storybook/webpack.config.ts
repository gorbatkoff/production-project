import webpack, {DefinePlugin, RuleSetRule} from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoaders} from "../build/loaders/buildCssLoaders";

export default ({config}: { config: webpack.Configuration }) => {

    const paths: BuildPaths = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        locales: "",
        buildLocales: ""
    }
    // UNSHIFT (BUG OF STORYBOOK)
    config.resolve?.modules?.unshift(paths.src);
    // UNSHIFT (BUG OF STORYBOOK)
    config.resolve?.extensions?.push(".ts", ".tsx");


    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule: RuleSetRule | "...") => {
            if (rule !== "..." && /svg/.test(rule.test as string)) {
                return {...rule, exclude: /\.svg$/}
            }

            return rule;
        })
    }

    if (config!.resolve!.modules) {
        config!.resolve!.modules = [
            path.resolve(__dirname, '../../src'),
            'node_modules',
        ];
    }
    config.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    })
    config.module?.rules?.push(buildCssLoaders(true))

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API_URL__: JSON.stringify(""),
        __PROJECT__: JSON.stringify("storybook"),
    }))

    return config;
};