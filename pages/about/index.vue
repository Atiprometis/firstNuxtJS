

<template>
        <div class="container mt-5">
          <div class="alert alert-primary">
            <h1>sadasdas!</h1>
            <p>นี่คือเนื้อหาใน slot ชื่อ mainContent</p>
            <input type="text" v-model="nameAll.fName" class="form-control" placeholder="ชื่อ">
            <input type="text" v-model="nameAll.lName" class="form-control" placeholder="ชื่อ">
            
            <button type=" button" @click="insertAboutName()" class="btn btn-success">คลิกที่นี่</button>
          </div>
          <h1> fname : {{ nameAll.fName }}</h1>
          <br />
          <h1> lname : {{ nameAll.lName }}</h1>
        </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const nameAll = reactive({
  fName: '',
  lName: ''
})

async function insertAboutName(){
  const res = await $fetch('http://localhost:3000/nuxt/insertabout', {
    method: 'POST',
    body: {
      f_name: nameAll.fName,
      l_name: nameAll.lName
    }
  })
  alert("บันทึกข้อมูลเรียบร้อย");
}

</script>

<style lang="scss" scoped>

</style>
