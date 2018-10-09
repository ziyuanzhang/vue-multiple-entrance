<template>
    <div>
       <div>
          <label>用户名： <input type="text"  v-model='userName'></label>
          <label>密  码： <input type="text"  v-model='possword'></label>
          <button @click="login">提交</button>
       </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      userName: '',
      passWords: ''
    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style scoped>

</style>
