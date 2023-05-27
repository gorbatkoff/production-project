import {classNames} from "shared/lib/classNames/classNames";

import styles from "./ArticlesPage.module.scss";
import {memo} from "react";
import {Article, ArticleList, ArticleView, ArticleViewSelector} from "entities/Article";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlePageActions, articlePageReducer, getArticles} from "../../model/slice/articlePageSlice";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticlesList} from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";

interface ArticlesPageProps {
    className?: string
}

export const article = {
    "id": "1",
    "title": "Javascript news kassjdajn",
    "subtitle": "Что нового в JS за 2022 год?",
    "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    "views": 1022,
    "createdAt": "26.02.2022",
    "user": {
        "id": "1",
        "username": "admin",
        "avatar": "https://i.pinimg.com/564x/40/e4/f2/40e4f222740a74b3a284a900e3fdeead.jpg"
    },
    "type": [
        "IT",
        "ECONOMIC",
        "SCIENCE",
        "POLITICS",
    ],
    "blocks": [
        {
            "id": "1",
            "type": "TEXT",
            "title": "Заголовок этого блока",
            "paragraphs": [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            "id": "4",
            "type": "CODE",
            "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
        },
        {
            "id": "5",
            "type": "TEXT",
            "title": "Заголовок этого блока",
            "paragraphs": [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            "id": "2",
            "type": "IMAGE",
            "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            "title": "Рисунок 1 - скриншот сайта"
        },
        {
            "id": "3",
            "type": "CODE",
            "code": "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
        },
        {
            "id": "7",
            "type": "TEXT",
            "title": "Заголовок этого блока",
            "paragraphs": [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            "id": "8",
            "type": "IMAGE",
            "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            "title": "Рисунок 1 - скриншот сайта"
        },
        {
            "id": "9",
            "type": "TEXT",
            "title": "Заголовок этого блока",
            "paragraphs": [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
            ]
        }
    ]
} as Article

const reducers: ReducersList = {
    articlePage: articlePageReducer
}

const ArticlesPage = ({className}: ArticlesPageProps) => {

    const dispatch = useAppDispatch();

    // Получаем статьи используя Entity Adapter
    const articles = useSelector(getArticles.selectAll);
    // Диспатчим получение списка статей
    useInitialEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articlePageActions.initState())
    })

    const onChangeView = (view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }

    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(styles.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)