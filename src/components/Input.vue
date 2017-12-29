<template>
  <input type="text" class="zui-form-input" :value="value"/>
</template>
<script>
  export default {
    props: {
      value: {
        default: ''
      },
      placeholder: {
        default: '请输入'
      }
    }
  }
</script>
