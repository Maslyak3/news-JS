import AppLoader from './appLoader';

type ControllerCallback = () => void;

class AppController extends AppLoader {
    getSources(callback: ControllerCallback) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: ControllerCallback) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target?.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') || "";
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target.parentNode) {
                target = target.parentNode as HTMLElement;
            }
        }
    }
}

export default AppController;
