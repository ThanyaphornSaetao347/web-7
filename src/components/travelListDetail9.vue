<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
    </div>
    <div class="tipark">
      <RouterLink to="/monjong_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/monjong_tiew">สถานที่เที่ยว</RouterLink>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const travellist=ref([
{name: 'ดอยม่อนจอง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monjong-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

</script>

<style>

.card-img-top{
height: 100%;
padding: 25px;

}
.box_all{
justify-content: center;
align-items: center;
margin-left: 30%;
text-align: center
}

</style>
