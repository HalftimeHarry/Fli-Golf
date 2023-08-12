import { writable } from 'svelte/store';

const initialState = {
    formType: ''
};

const authStore = writable(initialState);
export default authStore;
