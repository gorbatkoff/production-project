export type BuildMode = "production" | "development";

export type BuildPaths = {
	entry: string; // Путь до entry поинта
	build: string; // До папки со сборкой
	html: string; // До html файла (public)
	src: string; // Путь до папки с исходным кодом
	locales: string; // Путь до папки с переводами
	buildLocales: string; // Путь до папки куда необходимо переместить переводы
};

export type BuildEnv = {
	mode: BuildMode;
	port: number;
	apiUrl: string;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
	apiUrl: string;
	project: "storybook" | "frontend" | "jest";
};
