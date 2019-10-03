import axios from 'axios';
import cookie from 'react-cookies'

const Provider = {
    provider() {
        return axios.create({
            withCredentials: true,
            headers: {
                'X-CSRFToken': cookie.load('csrftoken'),
            },
        })
    },

    getInstance() {
        return this.provider
    },

    request(...args) {
        return this.provider.request(...args)
    },

    post(...args) {
        return this.provider.post(...args)
    },

    get(...args) {
        return this.provider.get(...args)
    },

    patch(...args) {
        return this.provider.patch(...args)
    },

    delete(...args) {
        return this.provider.delete(...args)
    },
};

export default Provider;
