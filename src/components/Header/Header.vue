<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn
        aria-label="Toggle menu"
        dense
        flat
        round
        icon="menu"
        @click="toggleLeftDrawer"
      />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { SetupContext } from "@vue/runtime-core";

interface IHeaderProps {}

export default {
  name: "Header",
  setup(props: IHeaderProps, context: SetupContext) {
    const toggleLeftDrawer = () => context.emit("toggleLeftDrawer");

    return {
      toggleLeftDrawer,
    };
  },
};
</script>
