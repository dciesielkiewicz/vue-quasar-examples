<template>
  <div class="background bg-grey-2" data-testid="background">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Background",
};
</script>

<style scoped lang="sass">
.background
  min-height: 100vh
</style>
