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
      <h3>สถานที่เที่ยวใกล้ๆ</h3>
    <div class="col" v-for="(near, index) in neartravel" :key="index">
        <div class="name">
          <div class="name">
          <img :src="near.img" alt="รูปภาพ 1">
          <img :src="near.img2" style="width: 80%;" alt="รูปภาพ 2">
          <br><br>
          <h4>{{ near.name }}</h4>
        </div>
        <div class="titravel">
          <p>{{ near.text_box }}</p>
          <p>สถานที่ : {{ near.Location }}</p>
          <p>เบอร์ติดต่อ : {{ near.phone }}</p>
          <p>ราคา :{{ near.Price }}</p>
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
{name: 'ดอยม่อนจอง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monjong-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const neartravel=ref([
{ name: 'ม่อนจอง' , 
  img: "https://meunlan.com/wp-content/uploads/2022/04/qkfvs79a0eL7b9sDgWPn-o.jpg",
  img2: "https://meunlan.com/wp-content/uploads/2022/04/qm6ss2yx93SuIO113KG-o.jpg",
  text_box:'หนึ่งในที่เที่ยวที่ขึ้นชื่อลืมชาว่ามีจุดชมวิวพระอาทิตย์ที่สวยที่สุดแห่งหนึ่งในประเทศไทย แถมทางขึ้นก็ไม่ยาก เดินไม่ไกล แต่เปิดให้เข้าเฉพาะช่วงหน้าหนาวเท่านั้น จุดสำคัญนั้นอยู่ที่ก่อนจะขึ้นไปเดินขึ้นดอยอีกทีต่างหาก เพราะจะต้องสตาร์ทที่เขตรักษาพันธุ์สัตว์ป่าอมก๋อย หน่วยพิทักษ์ป่ามูเซอ ซึ่งจะต้องติดต่อทำเรื่องกับเจ้าหน้าที่เสียก่อนถึงจะขึ้นไปได้ จากนั้นจึงนั่งรถ 4WD ไปยังจุดเริ่มเดิน (ขับรถขึ้นไปเองไม่ได้ เพราะทางค่อนข้างอันตราย) แล้วถึงขึ้นสู่ยอดดอยระยะทาง 4 ก.ม. ใช้เวลา เดินเท้าประมาณ 3-4 ชั่วโมง ค่าบริการรถรับ-ส่ง  จำนวนนักท่องเที่ยว 1-5 คน ค่าบริการเหมา 2,500 บาท จำนวนนักท่องเที่ยว 6-9 คน ค่าบริการเหมา 3,000 บาท จำนวนนักท่องเที่ยว 12-17 คน ค่าบริการเหมา 6,000 บาท จำนวนนักท่องเที่ยวเกิน 18 คน ค่าบริการเหมา 9,000 บาท หากต้องการไปรับ-ส่งที่ อ.อมก๋อย ค่าบริการเหมา 4,000 บาท (จากตัว อ.อมก๋อย - ศูนย์บริการ ฯ - ลานจอดรถทางเดินเท้า) ค่าบริการสัมภาระ (ลูกหาบ) จำกัดน้ำหนักไม่เกิน 20 กิโลกรัม ต่อ 1 ลูกหาบ ลูกหาบ 1 คน ค่าบริการ 300 บาทต่อวัน 2 วัน 1 คืน ไป - กลับ ค่าบริการ 600 บาท ค่าบริการคนนำทาง เที่ยวละ 600 บาท' ,
  Location:'บ้านมูเซอปากทาง ตำบลม่อนจอง อำเภออมก่อย จังหวัดเชียงใหม่' ,
  place:'https://goo.gl/maps/UFFZFH9uocxXLpXp9',
  Price:'-',
  time:'-',
  phone:'09-2559-7201',
},
])
</script>