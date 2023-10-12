<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
      <h6>{{ n.text_box }}</h6>
      <p>การเดินทาง มายัง ดอยม่อนล้าน
     สามารถเดินทางมาบนถนนเชียงใหม่พร้าว หมายเลข 1001 ขับไปเรื่อยๆ ประมาณ 90 กิโลเมตร 
     จากนั้นก็ให้เลี้ยวเข้าเส้นถนนหมายเลข 1150 แล้วจะเจอกับป้ายบอกทางไปแม่ขะจาน จังหวัดเชียงราย จากนั้นจะเจอทางแยกไปบ้านขุนแจ ตรงนี้ก็จะเป็นทางขึ้นไป ดอยม่อนล้าน ซึ่งดอยม่อนล้านจะห่างจากอำเภอพร้าว  40 กิโลเมตรโดยประมาณ</p>
    </div>
  </div>
  <br>
    <div class="tipark">
      <RouterLink to="/monlan_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/monlan_tiew">สถานที่เที่ยว</RouterLink>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const travellist=ref([
{name: 'ดอยม่อนล้าน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monlan-1536x1024.jpg", quantity: 0 ,
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
