export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string; // Путь до entry поинта
    build: string; // До папки со сборкой
    html: string; // До html файла (public)
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
