// Эта функция возвращает список лоадеров

import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/, // регул-ка файлов которые надо пропустить через лоадер
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // /css/ in Build
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },
                }
            }, // Translates CSS into CommonJS
            "sass-loader", // Compiles Sass to CSS
        ],
    }

    /* Порядок при котором лоадеры возвращаются в массиве имеют значение */

    return [ // Тут идёт обработка файлов, которые выходят за рамки JS (.jpeg, .css, .ts, etc.)
        typescriptLoader,
        cssLoader,
    ]
}