<template>
  <input type="text" class="zui-form-input" v-bind:value="value" v-on:input="onInput"/>
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
    },
    methods: {
      onInput: function (e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>
