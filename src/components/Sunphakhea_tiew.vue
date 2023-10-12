<template>
    <div class="col" v-for="(n) in travellist" :key="n">
      <div class="name">
        <h3>{{ n.name }}</h3>
      </div>
      <div class="tipark">
        <RouterLink to="/sunphakea_tipak">ที่พัก</RouterLink> /
        <RouterLink to="/sunphakea_tiew">สถานที่เที่ยว</RouterLink>
      </div>
    </div>
    <h3>สถานที่เที่ยวใกล้ๆ</h3>
  <div class="col" v-for="(near, index) in neartravel" :key="index">
      <div class="name">
        <div class="name">
        <img :src="near.img" alt="รูปภาพ 1">
        <img :src="near.img2" alt="รูปภาพ 2">
        <h4>{{ near.name }}</h4>
      </div>
      <div class="titravel">
        <p>{{ near.text_box }}</p>
        <p>สถานที่ : {{ near.Location }}</p>
        <p>เบอร์ติดต่อ : {{ near.phone }}</p>
        <p>พิกัด : <a :href="near.place">{{ near.place }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const travellist=ref([
{name: 'สันป่าเกี๊ยะ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/sanpakae-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const neartravel=ref([
{ name: 'สันป่าเกี๊ยะ',
  img: "https://cms.dmpcdn.com/travel/2020/12/30/beab2d90-4a5f-11eb-9b6d-3fdf37c2e48e_original.jpg",
  img2: "https://cms.dmpcdn.com/travel/2020/12/30/82893230-4a5f-11eb-89e4-35f1a97d3869_original.jpg",
  text_box: 'เที่ยวสันป่าเกี๊ยะ ดอยแม่ตะมาน ฟินกับทะเลหมอกพร้อมซากุระเมืองไทยโปรยปราย ในช่วงต้นเดือนมกราคมไปจนถึงกลางเดือน ก็จะมี ดอกนางพญาเสือโคร่ง ที่จะผลิบานออกดอกสวยๆ ให้ได้ชมกันค่ะ ซึ่งฝั่งตรงข้ามกันของยอดดอย ก็จะเห็นดอยหลวงเชียงดาวอีกด้วย เป็นมุมสวยๆ ในการชมวิวที่ไม่ธรรมดาเลยจริงๆ ค่ะ มีบ้านพักไว้บริการด้วยค่ะ รวมถึง สถานที่กางเต็นท์ แต่ว่าต้องเตรียมมาเองนะคะ โดยจะมีค่าสถานที่และค่าบำรุงสถานที่เล็กน้อยค่ะ ส่วนห้องน้ำและห้องครัวนั้นก็มีครบเลย แต่อาหารทุกอย่างก็ต้องเตรียมมาเองนะคะ ที่สำคัญขาดไม่ได้เลย คือ ถุงดำ ที่ต้องนำขึ้นไปเก็บขยะลงมาค่ะ แต่ก็ถือว่าที่นี่สะดวกสบายอยู่พอตัวเลยแหละค่ะ',
  Location: 'ตำบลแม่นะ อำเภอเชียงดาว จังหวัดเชียงใหม่',
  place:'https://maps.app.goo.gl/B8XJFNr5sSxTZTgw5',
}
])
</script>