export default class WorkService {
    url = '/data/works.json';

    async getItems() {
        return await fetchData(this.url);
    }
}