<script>
// import Vertical from "./vertical";
import Horizontal from "./horizontal";

export default {
  components: { 
    // Vertical, 
    Horizontal 
  },
  data() {
    return {};
  },
  computed: {
    layoutType() {
        return this.$root.layout?.type;
    }
  },
  
};
</script>

<template>
  <div>
    
    

    <!-- <vertical v-if="layoutType === 'vertical'">
      <slot />
    </vertical> -->

    <!-- <Horizontal v-if="layoutType === 'horizontal'"> -->
    <Horizontal>

    </Horizontal>
  </div>
</template>
