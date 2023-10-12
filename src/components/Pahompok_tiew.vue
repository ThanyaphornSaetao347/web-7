<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
      <h6>{{ n.text_box }}</h6>
    </div>
    <div class="tipark">
      <RouterLink to="/pahompok_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/pahompok_tiew">สถานที่เที่ยว</RouterLink>
    </div>
  </div>

     <h3>สถานที่เที่ยวใกล้ๆ</h3>
  <div class="col" v-for="(near, index) in neartravel" :key="index">
      <div class="name">
        <div class="name">
        <img :src="near.img" alt="รูปภาพ 1">
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

const travellist=ref([
{name: 'ดอยผ้าห่มปก', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-phahompok-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const neartravel=ref([
{name:'ถ้ำห้วยบอน' , 
  img: "https://files.thailandtourismdirectory.go.th/assets/upload/2017/12/27/20171227017df9f9a770b479d4a77b250016bd1c114220.jpg",
  text_box:'ถ้ำห้วยบอนตั้งอยู่ภายในสำนักสงฆ์ถ้ำห้วยบอน เป็นถ้ำขนาดใหญ่ลึกประมาณ 300 เมตร โถงถ้ำใหญ่ซึ่งจุคนได้ประมาณ 40-50 คน และบริเวณใกล้เคียงมีถ้ำเล็กถ้ำน้อยประมาณ 10 ถ้ำ การเดินทางใช้เส้นทางเดียวกับทางไปกิ่วลมเพื่อขึ้นดอยผ้าห่มปก ระหว่างทางจะมีแผ่นป้ายอธิบาย ถ้ำห้วยบอนภายนอกถ้ำอาจดูไม่น่าสนใจนัก แต่เมื่อเข้าไปในถ้ำเต็มไปด้วยเสาหินและหินงอกหินย้อยขนาดต่างๆที่เกิดจากการมีน้ำหยดตามผนังถ้ำซึ่งดูน่าตื่นตาตื่นใจมาก',
  Location:'658 หมู่ 13 ตำบล เวียง อำเภอ ฝาง เชียงใหม่ ',
  phone:'0860390918',
  link: 'https://www.facebook.com/namjainampan/',
  Facebook:'วัดถ้ำห้วยบอน"ธรรมยุต" ',
  place:'https://maps.app.goo.gl/cfKQsWrWcygWRfCv8',
  time:'-',
},

{name:'โป่งน้ำร้อน' , 
  img: "https://files.thailandtourismdirectory.go.th/assets/upload/2017/12/12/20171212a87ff679a2f3e71d9181a67b7542122c155929.jpg",
  text_box:' โป่งน้ำร้อนฝาง อยู่ในอุทยานแห่งชาติดอยผ้าห่มปก โป่งน้ำร้อนฝาง เกิดจากพลังงานความร้อนใต้ผิวโลก น้ำมีอุณหภูมิสูงถึง 90-130 องศาเซลเซียส มีน้ำแร่ทั้งปี บริเวณกว้างโปร่งตา โป่งน้ำร้อนฝางมีห้องบริการอาบน้ำแร่ ทั้งห้องอาบน้ำและอบไอน้ำ รวมทั้งบ่ออาบน้ำร้อนกลางแจ้ง เปิด 07.00-19.00 น. โป่งน้ำร้อนอยู่ในบริเวณเดียวกับที่ทำการฯ นอกจากนี้จากที่ทำการอุทยานฯ ยังมีเส้นทางเดินขึ้นเขาผ่านป่าเบญจพรรณมาถึงโป่งน้ำร้อนระยะทางประมาณ 1.2 กิโลเมตร ห่างจากบ่อน้ำร้อนประมาณ 300 เมตร จะมี ห้วยแม่ใจ ซึ่งมีน้ำไหลมากตลอดปี ',
  Location:'224 ม.6 ต.โป่งน้ำร้อน อ.ฝาง จ.เชียงใหม่ 50110 ',
  phone:' 0 5208 0801, 084 483 4689',
  link: 'https://www.facebook.com/Doiphahompok/',
  Facebook:'อุทยานแห่งชาติดอยผ้าห่มปก',
  place:' https://maps.app.goo.gl/EHfU31QTiuBRNg9KA',
  time:'-',
},

{name:'น้ำตกโป่งน้ำดัง' , 
  img: "https://th.bing.com/th/id/OIP.xpU5BKI4C9zB4h-IeCQg0gAAAA?pid=ImgDet&rs=1",
  text_box:' เป็นน้ำตกหินปูนขนาดเล็ก แต่มีเสน่ห์ไม่แพ้น้ำตกขนาดใหญ่ มีถ้ำเล็กๆ พอให้คนเข้าไปนั่งเล่นได้ 3-4 คน เพดานถ้ำมีน้ำหยดตลอดเวลาและเกิดเป็นหินงอกเล็กๆ ไปทั่ว การเดินทาง จากอ.ฝาง ใช้ทางหลวงหมายเลข 107 (ฝาง-เชียงใหม่) ไปประมาณ 10 กิโลเมตร ถึงวัดแม่สูนหลวงเลี้ยวขวาข้างวัดเข้าไปตามทางอีกประมาณ 5 กิโลเมตร จะถึงหน่วยพิทักษ์ อุทยานแห่งชาติ มฝ. 3 จากนั้นต้องเดินตามเส้นทางป่าไปสู่น้ำตก ระยะทางไป-กลับประมาณ 1.5 กิโลเมตร ระหว่างทางผ่านป่าดิบแล้งที่ร่มครึ้มด้วยไม้ใหญ่ บางช่วงต้องเดินข้ามลำธารที่มีน้ำใสไหลเย็น',
  Location:' ตำบล แม่สูน อำเภอ ฝาง เชียงใหม่ 50110',
  phone:'0 5208 0801, 084 483 4689',
  link: 'https://www.facebook.com/Doiphahompok/',
  Facebook:'อุทยานแห่งชาติดอยผ้าห่มปก',
  place:'https://www.google.com/maps/place/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B9%82%E0%B8%9B%E0%B9%88%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%B1%E0%B8%87/@19.8641519,99.1116732,17z/data=!3m1!4b1!4m6!3m5!1s0x30d0cdcddb140877:0xa1102bc50a4b44a5!8m2!3d19.8641519!4d99.1142481!16s%2Fg%2F11bz099n8c?entry=ttu',
  time:'-',
},

{name:'ร้านชาอานน' , 
  img: "https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/338339058_1237733460194106_5186766152587096555_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeEvX0kb9jMYlYMspW79lmaXN6ANGT6FQsk3oA0ZPoVCyT5hyg9IrsugbtWJ5WkAXkhJYdmf-qhpZ4dXutBf7VDA&_nc_ohc=gGN2LdsB4TYAX_5dgOB&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfBXTOY-R3P_wOY3gV8C31uHIBC5iyEYZxiM1L3lbay_Gw&oe=6528FA5F",
  text_box:'ร้านชา กาแฟ รสชาติอร่อย แบบชาวบ้านๆ ราคาไม่แพง มาฝากเพื่อนๆ เช่นเคย คราวนี้ผมมีร้านชาร้านหนึ่ง อยู่บริเวณอุทยานแห่งชาติผ้าห่มปก หรือ ดอยฟ้าห่มปก ในปัจจุบันนี้ ร้านนี้มีชื่อว่า ร้านชาอานน ครับ ร้านไม่ใหญ่ แต่รสชาติถูกใจ ราคาไม่แพง นอกจากชาแล้ว กาแฟ เครื่องดื่มอื่นๆ ก็มีครบครัน ราคา เริ่มต้นเมนูละ 40 บาท เป้นต้นไป ',
  Location:'224 ตำบล โป่งน้ำร้อน อำเภอ ฝาง เชียงใหม่ 50110',
  phone:'091 139 5170',
  link: 'https://www.facebook.com/jaturapatlaolumpuk/?locale=th_TH',
  Facebook:'Cha arnon at Doi Phahompok National Park',
  place:' https://maps.app.goo.gl/ZNbW81mCHwWKrrGn6',
  time:'08:00 - 17:00',
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