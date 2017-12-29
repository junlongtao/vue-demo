<template>
  <img alt="zhichou" class="zui-logo" :src="src" @click="onClick"/>
</template>
<script>
  import './less/logo.less'
  import logo from './img/logo.svg'
  import hrLogo from './img/hr-logo.svg'
  import plusLogo from './img/plus-logo.svg'
  export default {
    name: 'Logo',
    props: {
      type: {
        default: 'zhichou'
      },
      href: {
        default: '/'
      }
    },
    computed: {
      src: function () {
        if (this.type === 'zhichou') {
          return logo
        }
        if (this.type === 'hr') {
          return hrLogo
        }
        if (this.type === 'plus') {
          return plusLogo
        }
      }
    },
    methods: {
      onClick: function (e) {
        location.assign(this.href)
      }
    }
  }
</script>
