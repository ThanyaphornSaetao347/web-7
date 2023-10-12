<template>
<div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
    </div>
    <div class="tipark">
        <RouterLink to="/meatho_tipak">ที่พัก</RouterLink> /
        <RouterLink to="/meatho_tiew">สถานที่เที่ยว</RouterLink>
    </div>
  </div>
<h3>สถานที่เที่ยวใกล้ๆ</h3>
    <div class="col" v-for="(near, index) in neartravel" :key="index">
        <div class="name">
          <div class="name">
          <img :src="near.img" style="width: 80%;" alt="รูปภาพ 1">
          <h4>{{ near.name }}</h4>
        </div>
        <div class="titravel">
          <p>{{ near.text_box }}</p>
          <p>สถานที่ : {{ near.Location }}</p>
          <p>เบอร์ติดต่อ : {{ near.phone }}</p>
          <p>ราคา :{{ near.Price }}</p>
          <p>เวลา : {{ near.time }}</p>
          <p>พิกัด : <a :href="near.place">{{ near.place }}</a></p>
        </div>
      </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const travellist=ref([
{name: 'ดอยแม่โถ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-mae-tho-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const neartravel=ref([
{ name: 'ดอยแม่โถ' , 
  img: "https://s359.kapook.com//pagebuilder/f9efb386-81fc-401f-8b96-4ce31a832cc2.jpg",
  text_box:'วิวภูเขาและทุ่งหญ้าขึ้นชื่อ ได้รับการขนานนามว่า ทุ่งหญ้าสะวันนาเมืองไทย ด้วยวิวสีเขียวของภูเขาที่เรียงรายสลับซับซ้อนสบายตา มีฝูงวัวของชาวบ้านมาประกอบฉาก ทำให้ภาพของทุ่งหญ้ามีทิวทัศน์คล้ายบรรยากาศในต่างประเทศ ดอยแม่โถ ยังมีที่พักแบบเต้นท์แคมป์ปิ้ง ที่สามารถมองเห็นวิวของภูเขาได้ 360 องศา รวมถึงวิวของหมู่บ้านที่อยู่ข้างล่าง สำหรับใครที่ชื่นชอบภูเขา รักในธรรมชาติที่ยังมีความบริสุทธิ์ ดอยแม่โถ จึงเป็นอีกหนึ่งจุดหมายที่ควรปักหมุด' ,
  Location:'ตำบลบ่อสลี อำเภอฮอด จังหวัดเชียงใหม่' ,
  place:'https://maps.app.goo.gl/xNJJhsi98rS33jKr5',
  Price:'-',
  time:'-',
  phone: '09 3760 8598'
},
])
</script>