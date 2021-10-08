<template>
  <v-app>
    <Layout>
      <router-view />
    </Layout>
  </v-app>
</template>

<script lang="ts">
import { Layout } from "./components";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>
