import Service from './Service.js';
const resource = 'posts';

export default {
    get() {
        return Service.get(resource);
    }
}