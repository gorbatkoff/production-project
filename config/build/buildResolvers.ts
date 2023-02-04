import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'], // Указываем расширения тех файлов, при импорте которых
        // мы не будем указывать расширение (import Component from './component')
    }
}
