<template>
  <section class="container">
    <div>
      <h1>Nuxt</h1>
      <div>Counter: {{store.bar.counter}}</div>
      <div>Double: {{store.bar.double}}</div>
      <div>
        <button @click="store.bar.increment()">++</button>
        <button @click="store.bar.incrementBy(10)">+10</button>
        <button @click="store.bar.asyncIncrement()">async++</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import {useStore} from 'vuex-simple'
  import {MyStore} from '~/store'

  @Component
  export default class Other extends Vue {
    store: MyStore = useStore(this.$store)
  }
</script>

<style>
  .container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
    }
</style>
