<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item
          link
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          exact
        >
          <v-list-item-content>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in edit"
          :key="link.title"
          :to="link.url"
          text
        >
          {{link.title}}
        </v-btn>
        <v-btn
          @click="logOut"
          text
        >
          <v-icon left></v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>

      <router-view></router-view>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{date}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    tmp: [],
    edit: [
      { title: 'Login', url: '/login' },
      { title: 'Profile', url: '/profile' },
    ],
    date: new Date(),
    interval: null,
  }),
  computed: {
    links() {
      return [
        { title: 'Bill', url: '/' },
        { title: 'Categories', url: '/categories' },
        { title: 'History', url: '/history' },
        { title: 'Planing', url: '/planing' },
        // { title: 'Login', url: '/login' },
      ];
    },
  },
  methods: {
    logOut() {
      console.log('logout');
      this.$router.push('/login?message=logout');
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>