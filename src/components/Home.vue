<script setup>
import { storeToRefs } from 'pinia';
import {useCounterStore} from '../stores/counter'

const store = useCounterStore();
console.log(store);
const {count,doubleCount} = storeToRefs(store);
const{increment} = store;
</script>

<template>
  <!-- <h1>Home Page {{ store.count }}</h1>
  Double: {{ store.doubleCount }}
  <button @click="store.increment">Increment</button>
  <hr/> -->
  <h1>Home Page {{ count }}</h1>
  Double: {{ doubleCount }}
  <button @click="increment">Increment</button>
  <hr/>
</template>
