import { defineStore } from "pinia";
import jwtDecode from "jwt-decode";

interface UserPayloadInterface {
    identifiant: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        infos : {}
    }),
    actions: {
        async authenticateUser({ identifiant, password }: UserPayloadInterface) {
            // useFetch from nuxt 3
            const { data, pending }: any = await useApi('/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    identifiant,
                    password,
                },
            });
            this.loading = pending;

            if (data.value) {
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = data?.value?.token; // set token to cookie
                this.infos = jwtDecode(token.value)
                this.authenticated = true; // set authenticated  state value to true
            }
        },
        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
        },
    },
});
