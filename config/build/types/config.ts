export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string; // Путь до entry поинта
    build: string; // До папки со сборкой
    html: string; // До html файла (public)
    src: string; // Путь до папки с исходным кодом
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
