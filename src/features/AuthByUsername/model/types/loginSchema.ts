export interface LoginSchema { // Состояние стейта, который отвечает за форму авторизации
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}