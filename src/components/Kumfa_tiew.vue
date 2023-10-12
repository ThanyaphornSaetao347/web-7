<template>
    <div class="col" v-for="(n) in travellist" :key="n">
      <div class="name">
        <h3>{{ n.name }}</h3>
      </div>
      <div class="tipark">
        <RouterLink to="/kumfa_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/kumfa_tiew">สถานที่เที่ยว</RouterLink>
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
{name: 'ดอยค้ำฟ้า', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-kamfha-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const neartravel=ref([
{ name: 'ดอยค้ำฟ้า' , 
  img: "https://baagklong.com/wp-content/uploads/2016/10/13248514_1757991371081140_4791588291904042181_o.jpg",
  text_box:'ถ้าใครได้มาเที่ยวในช่วงกลางเดือนมกราคม ก็จะได้เห็นพื้นที่แห่งนี้เต็มไปด้วย ดอกนางพญาเสือโคร่ง ที่กำลังผลิบานอีกด้วยนะคะ แต่นักท่องเที่ยวส่วนใหญ่ไม่ค่อยจะรู้จักที่นี่กันมากนักค่ะ เพราะด้วยความที่เป็นพื้นที่อนุรักษ์ และไม่ได้มีความด้วยความสะดวกสบายมากนัก ด้านบนจะมีบ้านพักให้บริการ 1 หลังค่ะ พักได้ 10-15 คนเลยค่ะ มีห้องนอน 3 ห้อง แต่จะไม่มีเครื่องทำน้ำอุ่น และไฟฟ้าก็จะใช้ได้อย่างจำกัด คือ ตั้งแต่ 6 โมงถึง 3 ทุ่มเท่านั้น จำกัดนักท่องเที่ยวให้ค้างคืนได้ 50 คน ต่อวัน' ,
  Location:'ตำบลทุ่งข้าวพวง อำเภอเชียงดาว จังหวัดเชียงใหม่' ,
  place:' https://goo.gl/maps/GjamVDjWPxUhzuVh8',
  Price:'-',
  time:'ตลอดทั้งวัน',
  phone: '08-1992-7346'
},
])
</script>