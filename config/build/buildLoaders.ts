// Эта функция возвращает список лоадеров

import type webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {type BuildOptions} from "./types/config"

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    }

    const typescriptLoader = {
        test: /\.tsx?$/, // Регул-ка файлов которые надо пропустить через лоадер
        use: "ts-loader",
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader, // /css/ in Build
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]"
                            : "[hash:base64:8]",
                    },
                },
            }, // Translates CSS into CommonJS
            "sass-loader", // Compiles Sass to CSS
        ],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    }

    /* Порядок при котором лоадеры возвращаются в массиве имеют значение */

    return [ // Тут идёт обработка файлов, которые выходят за рамки JS (.jpeg, .css, .ts, etc.)
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ]
}
