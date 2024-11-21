<script setup>
import {ref,onMounted} from 'vue'
   
   const   name= ref('Terhujah keviniu');
   const   email= ref('keviniu@gmail.com');
    const  tasks= ref(['Task One', 'Task Two', 'Task Three']) ;
     const link= "https://www.baidu.com"

     const newTask= ref('');
  
 const addTask=()=>{
tasks.value.push(newTask.value);
newTask.value='';
 };

 const deleteTask=(index)=>{
   tasks.value.splice(index,1);
 };
  
 onMounted(async () =>{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data= await response.json();
    tasks.value=data.map((task)=>task.title)
  } catch (error) {
    console.log("Error Loading");
    
  }
 });
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ email }}</h1>

    <form @submit.prevent="addTask">
      <input type="text" id="newTask" name="newTask" v-model="newTask"/>
      <button type="submit">Add New Task</button>
    </form>
    <h3>Task</h3>
    <ul>
      <li v-for="(task,index) in tasks" :key="task">
      <span> {{ task }}</span> 
      <button @click="deleteTask(index)">x</button>
      </li>
    </ul>
    <a :href="link">Go to baidu</a>
  </div>
</template>
