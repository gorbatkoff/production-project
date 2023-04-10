export enum ArticleBlockType {
    TEXT = "TEXT",
    CODE = "CODE",
    IMAGE = "IMAGE",
}

export interface ArticleBlockGlobal {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockGlobal {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBlockGlobal {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockGlobal {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export enum ArticleTypes {
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMIC = "ECONOMIC",
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlock[]
}