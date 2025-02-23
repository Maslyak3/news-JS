import News from './news/news';
import Sources from './sources/sources';

export interface ArticlesData {
    articles: Iarticles[];
}
export interface Iarticles {
    urlToImage?: string;
    author: string;
    title: string;
    publishedAt: string;
    description: string;
    url: string;
    source: {name: string};
}
export interface SourcesData {
    sources: Isource[];
}
export interface Isource {
    name: string;
    id: string;
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

