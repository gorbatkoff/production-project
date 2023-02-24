// Эта функция возвращает список лоадеров

import type webpack from "webpack"
import {BuildOptions} from "./types/config"
import {buildCssLoaders} from "./loaders/buildCssLoaders";

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

    const cssLoader = buildCssLoaders(isDev);

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
