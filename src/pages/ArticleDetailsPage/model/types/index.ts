import {ArticleDetailsPageRecommendationsSchema} from "./ArticleDetailsPageRecommendationsSchema";
import {ArticleDetailsCommentsSchema,} from "./ArticleDetailsCommentsSchema";

export interface ArticlesDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsPageRecommendationsSchema
}