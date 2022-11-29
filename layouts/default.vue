<script setup>

</script>

<template>
  <div class="body">
    <nav-bar></nav-bar>
    <main class="container">
      <slot></slot>
    </main>
    
    <footer-bar></footer-bar>
  </div>
</template>
<style scoped lang="postcss">
.body{
  min-width: 1000px;
  @apply bg-gray-100 flex flex-col min-h-screen;
}
</style>