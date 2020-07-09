<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>4Fun</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link to="bullet-screen">
          <v-list-item-action>
            <v-icon large>mdi-format-text-rotation-none</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>彈幕</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  }),

  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss">
@import "./assets/style.scss";
</style>
