<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
    </div>
    <div class="tipark">
      <RouterLink to="/doiluang_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/doiluang_tiew">สถานที่เที่ยว</RouterLink>
    </div>
  </div>
    
</template> 

<script setup>

import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const travellist=ref([
{name: 'ดอยหลวง',  price:500, img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-luang-chiang-dao-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

</script>



<style>
.name{
  text-align: center;
}
.tipark{
  text-align: center;
}

.arrow-down {
  position: fixed;
  bottom: 20px; /* ปรับตำแหน่งตามความต้องการ */
  right: 20px; /* ปรับตำแหน่งตามความต้องการ */
  width: 30px; /* ปรับขนาดตามความต้องการ */
  height: 30px; /* ปรับขนาดตามความต้องการ */
  background-color: #007bff; /* สีพื้นหลังของลูกศร */
  border-radius: 50%; /* ทำให้มีรูปร่างวงกลม */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow-down::before {
  /* content: "\u2193"; ใส่สัญลักษณ์ลูกศรชี้ลง (UTF-8) */
  font-size: 20px; /* ปรับขนาดตามความต้องการ */
  color: #fff; /* สีข้อความของลูกศร */
}
</style>