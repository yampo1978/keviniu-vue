<script setup>
import { storeToRefs } from 'pinia';
import {useCounterStore} from '../stores/counter'

const store = useCounterStore();
const{count, doubleCouunt}= storeToRefs(store);
const{decrementCount}=store;
</script>


<template>
  <h1> About Page {{ store.count }}</h1>
  Double: {{ store.doubleCount }}
  <button @click="decrementCount">Decrement</button>
</template>
