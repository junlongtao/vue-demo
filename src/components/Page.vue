<template>
  <div class="page popIn">
    <slot></slot>
  </div>
</template>
<script>
  import './less/page.less'
  import '../assets/css/vivify.min.css'
  export default {
    name: 'Page',
    props: {
      title: '智筹'
    }
  }
</script>
