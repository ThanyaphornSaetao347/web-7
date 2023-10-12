<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
    </div>
    <div class="tipark">
        <RouterLink to="/doipui_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/doipui_tiew">สถานที่เที่ยว</RouterLink>
    </div>
  </div>
    <h3>ที่พัก</h3>
    <div class="col" v-for="(stay, index) in stayy" :key="index">
      <div class="name">
        <div class="name">
        <img :src="stay.img" style="width: 80%;" alt="รูปภาพ 1">
        <img :src="stay.img2" style="width: 80%;" alt="รูปภาพ 2">
        <br><br>
        <h4>{{ stay.name }}</h4>
      </div>
      <div class="tipark">
        <p>{{ stay.text_box }}</p>
        <p>สถานที่ : {{ stay.Location }}</p>
        <p>เบอร์ติดต่อ : {{ stay.phone }}</p>
        <p>ราคา :{{ stay.Price }}</p>
        <p>Facebook : <a :href="stay.link">{{ stay.Facebook }}</a></p>
        <p>พิกัด : <a :href="stay.place">{{ stay.place }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const travellist=ref([
{name: 'ดอยปุย', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-pui-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const stayy=ref([
{name:'กรีนโซน โฮมสเตย์' , 
  img: "https://media-cdn.holidaycheck.com/image/fetch/w_768,h_432,c_fill,q_auto,f_auto/https://q-xx.bstatic.com/xdata/images/hotel/max3000/458131124.jpg%3Fk%3D149705117312a6695b975f39d327f83720bc79a2ca78944ef6c3453220750c5d%26o%3D",
  img2:"https://i.ytimg.com/vi/Izd2k362Wg4/maxresdefault.jpg",
  text_box:'นอนโดมที่เดียวบนดอยปุย- ดอยสุเทพ เชียงใหม่ขึ้นมาบนดอยมานอนดอย ชมหมอก ดูดาว กินหมูกะทะ กับ บรรยากาศธรรมชาติรายล้อม หมอกลอย กลิ่นไอจากธรรมชาติ ฟินๆแบบนี้อยู่ใกล้เมืองขนาดนี้ ห้ามพลาดเลยค่ะ เต็นท์โดม มีห้องน้ำส่วนตัว แยกออกมาจากตัวเต็นท์ มีเครื่องทำน้ำอุ่นให้ บรรยากาศดี ไปช่วงมีฝนตก ได้เจอหมอก คนที่บ้านม้งก็น่ารัก มีสวนดอกไม้และน้ำตกเล็กๆ ไว้ให้ถ่ายรูปเล่น เสียค่าชมสวนคนละ 10 บาท ติดใจในรสชาติอาหาร ทั้งหมูกะทะ และข้าวต้มหมู อร่อยมาก'  ,
  Location:'Unnamed Road อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200',
  place:'https://maps.app.goo.gl/5ef4P5VH2v5eNihs5',
  phone:'065 338 3819',
  Price:'โดม 2 ท่าน 1,500 บาท  4 ท่าน 2,000 บาท  กระโจม 2ท่าน 1500บาท  4ท่าน 2000บาท  หมูกะทะ ชุดละ 450 บาท',
  link: 'https://www.facebook.com/greenzone112/',
  Facebook:'กรีนโซน โฮมสเตย์ - ดอยปุย',
},
])
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