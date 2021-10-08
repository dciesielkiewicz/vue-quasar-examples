<template>
  <Background>
    <q-layout view="hHh lpR lFf">
      <Header @toggleLeftDrawer="toggleLeftDrawer" />

      <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
        Content
      </q-drawer>

      <q-page-container>
        <slot />
      </q-page-container>
    </q-layout>
  </Background>
</template>

<script lang="ts">
import { ref } from "vue";
import { Background } from "../Background";
import { Header } from "../Header";

export default {
  name: "Layout",
  components: {
    Background,
    Header,
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
