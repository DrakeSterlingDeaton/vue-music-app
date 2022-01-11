<template>
    <!-- Header -->
    <header id="header" class="bg-gray-700">
        <nav
            class="container mx-auto flex justify-start items-center py-5 px-4"
        >
            <!-- App Name -->
            <router-link exact-active-class="no-active" 
            class="text-white font-bold uppercase text-2xl mr-4" :to="{name:'home'}"
                >Music</router-link>

            <div class="flex flex-grow items-center">
                <!-- Primary Navigation -->
                <ul class="flex flex-row mt-1">
                    <!-- Navigation Links -->
                    <li v-if="!userLoggedIn">
                        <router-link class="px-2 text-white" to="{name:'home'}" @click.prevent="toggleAuthModal">
                            Login / Register
                        </router-link>
                    </li>
                    <template v-else>
                        <li>
                            <router-link class="px-2 text-white" :to="{name:'about'}">About</router-link>
                        </li>
                        <li>
                            <router-link class="px-2 text-white" :to="{name:'manage'}">Manage</router-link>
                        </li>
                        <li>
                            <a class="px-2 text-white" herf="#" @click.prevent="signout">Logout</a>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'Header',
    computed: {
        ...mapState(['userLoggedIn']),
    },
    methods: {
        ...mapMutations(['toggleAuthModal']),
        signout() {
            this.$store.dispatch('signout', {
                router: this.$router,
                route: this.$route
            });
            this.$router({ name: 'home' });
            if(this.$route.meta.requireAuth) {
                this.$router.push({ name: 'home' });
            }
        }
    }
}
</script>
