<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
      <h6>{{ n.text_box }}</h6>
      <p>  ไฮไลต์ของดอยม่อนเงาะ คือ จุดชมวิวบนยอดดอย มีความสูง 1,425 เมตร เหนือระดับน้ำทะเล เป็นมุมภูเขาแบบ 360 องศา ทำให้สามารถมองเห็นพระอาทิตย์ขึ้นและตกได้ในที่เดียวเลย นอกจากนี้ในช่วงที่อากาศเย็น นักท่องเที่ยวก็จะได้ชมทะเลหมอกที่มีความสวยงาม ทอดยาวไปตามหุบเขาต่าง ๆ เป็นระยะทางหลายกิโลเมตรเลยทีเดียว นับเป็นแลนด์มาร์กที่สายหมอกทั้งหลายควรไปเช็กอินเป็นอย่างยิ่ง</p>
     <a :href="n.link">พิกัด</a>
    </div>
    <div class="tipark">
      <RouterLink to="/mongao_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/mongao_tiew">สถานที่เที่ยว</RouterLink>
    </div>
    
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const travellist=ref([
{name: 'ดอยม่อนเงาะ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monngo.jpg", quantity: 0 ,
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
