<template>
    <div>
      <header>
        <navBar />
      </header>
         <slot />  

    </div>
  </template>

<script>
    import navBar from '../components/navbar/navBar.vue'

    export default {
        components: {
            navBar
        }
    }

</script>