import {defineStore} from 'pinia'
import{ref,computed} from 'vue'

 export const useCounterStore = defineStore("counter",()=>{

    const count= ref(1)
    const doubleCount= computed(()=> count.value*2)
    function increment(){
        count.value++
    }
    function decrementCount(){
        count.value--
    }
    return{count,doubleCount,increment, decrementCount}
 })