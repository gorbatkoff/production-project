// Здесь вся конфигурация, которую мы делали в корне проекта

import {BuildOptions, BuildPaths} from "./types/config" // Импортируем interface аргументов (options) из конфига

import type webpack from "webpack"
import {buildPlugins} from "./buildPlugins"
import {buildLoaders} from "./buildLoaders"
import {buildResolvers} from "./buildResolvers"
import {buildDevServer} from "./buildDevServer"

// В Options у нас mode, paths и isDev, цепляем только paths и mode
// Затем расставляем их в полях entry и path, а в buildPlugins также передаём options
export function buildWebpackConfig(options: { mode: "production" | "development"; apiUrl: string; port: number; paths: BuildPaths; isDev: boolean }) {
    const {paths, mode, isDev} = options

    return {
        mode,
        entry: paths.entry, // Entry - Точка входа в наше приложение
        output: { // Куда и как мы будем делать сборку нашего приложения
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true, // Подчищаем старые файлы
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
