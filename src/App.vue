<template>
  <v-app id="inspire">
    <router-view></router-view>
  </v-app>
</template>

<script>
import Mainlayout from './components/Mainlayout';
export default {
  components: {
    Mainlayout,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  computed: {
    links() {
      return [
        { title: 'Login', icon: 'mdi-tilde', url: '/login' },
        { title: 'categories', icon: 'mdi-tilde', url: '/categories' },
      ];
    },
  },
};
</script>