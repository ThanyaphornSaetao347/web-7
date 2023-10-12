<template>
    <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
    </div>
    <div class="tipark">
      <RouterLink to="/noname_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/noname_tiew">สถานที่เที่ยว</RouterLink>
    </div>
  </div>
   <h3>สถานที่เที่ยวใกล้ๆ</h3>
  <div class="col" v-for="(near, index) in neartravel" :key="index">
      <div class="name">
        <div class="name">
        <img :src="near.img" style="width: 80%;" alt="รูปภาพ 1">
        <br><br>
        <h4>{{ near.name }}</h4>
      </div>
      <div class="titravel">
        <p>{{ near.text_box }}</p>
        <p>สถานที่ : {{ near.Location }}</p>
        <p>เบอร์ติดต่อ : {{ near.phone }}</p>
        <p>เวลา : {{ near.time }}</p>
        <p>Facebook : <a :href="near.link">{{ near.Facebook }}</a></p>
        <p>พิกัด : <a :href="near.place">{{ near.place }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const travellist=ref([
{name: 'ดอยไม่มีชื่อ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-noname-1536x1027.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const neartravel=ref([
{ name: 'ดอยไม่มีชื่อ' , 
  img: "https://www.reviewchiangmai.com/wp-content/uploads/2021/12/107609900_3097205257030442_3916905332336119836_n-2-1.jpg",
  text_box:'จุดซิคเนเจอร์ของที่นี่คือลานกองไฟ คือที่นี่เป็นที่แรกๆเลยนะที่มี กองไฟตรงกลางระหว่างจุดชมวิวของบ้านพัก ตอนเย็นพาไปที่นาขั้นบันได ตามฟีลของหนังเรื่อง low season ได้บรรยากาศฟีลนั้นเลย ได้เก็บรูปสวยๆด้วย ถ้าไปหน้าฝน จะได้กินเหล้าบ๊วยด้วย 5555 เพราะทางที่พักจะทำไว้ตอนช่วงฤดูร้อน สามารถไปได้ทั้ง 2 ฤดูเลย จะหน้าฝน หรือหน้าหนาว จะได้บรรยากาศคนละแบบเลย ถ้าใครที่สนใจอยู่ลองติดต่อที่พักไปได้เลยนะ เพราะว่าต้องจองก่อนไปเลย ใครที่เหนื่อยๆ อยากไปพักผ่อน ฮีลใจ แอดบอกเลยว่าห้ามพลาดครับ ไปแล้วมีความสุข ใจฟูแน่นอน' ,
  Location:'อำเภอกัลยาณิวัฒนา จังหวัดเชียงใหม่' ,
  place:'-'
},
])
</script>