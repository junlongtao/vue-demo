<template>
  <img alt="zhichou" class="zui-logo" :src="src" @click="onClick"/>
</template>
<script>
  import './less/logo.less'
  import logo from './img/logo.svg'
  import hrLogo from './img/hr-logo.svg'
  import plusLogo from './img/plus-logo.svg'
  import mlogo from './img/m-logo.svg'
  import mhrLogo from './img/m-hr-logo.svg'
  import mplusLogo from './img/m-plus-logo.svg'
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
        if (this.type === 'mzhichou') {
          return mlogo
        }
        if (this.type === 'hr') {
          return hrLogo
        }
        if (this.type === 'mhr') {
          return mhrLogo
        }
        if (this.type === 'plus') {
          return plusLogo
        }
        if (this.type === 'mplus') {
          return mplusLogo
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
