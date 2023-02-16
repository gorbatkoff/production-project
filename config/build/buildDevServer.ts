import {BuildOptions} from "./types/config";

import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port, // 3000
        open: true, // Автоматическое открытие сайта в браузере
        historyApiFallback: true,
        hot: true
    }
}