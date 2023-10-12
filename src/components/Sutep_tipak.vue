<template>
    <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
    </div>
    <div class="tipark">
      <RouterLink to="/sutep_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/sutep_tiew">สถานที่เที่ยว</RouterLink>
    </div>
    <br>
  <br>
  <h3>ที่พัก</h3>
    <div class="col" v-for="(stay, index) in stayy" :key="index">
      <div class="name">
        <div class="name">
        <img :src="stay.img" alt="รูปภาพ 1">
        <br><br>
        <h4>{{ stay.name }}</h4>
      </div>
      <div class="tipark">
        <p>{{ stay.text_box }}</p>
        <p>สถานที่ : {{ stay.Location }}</p>
        <p>เบอร์ติดต่อ : {{ stay.phone }}</p>
        <p>Facebook : <a :href="stay.link">{{ stay.Facebook }}</a></p>
      </div>
    </div>
  </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const travellist = ref([
{name: 'ดอยสุเทพ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-suthep-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const stayy = ref([
{name:'Flora Creek Chiang Mai' , 
  img: "https://img.salehere.co.th/p/1200x0/2022/02/15/4ooddnckkqkk.jpg",
  text_box:'ฟลอร่า ครีค เชียงใหม่ รีสอร์ทหรูหราระดับ 5 ดาวที่ตั้งอยู่บนภูเขา บนพื้นที่กว่า 20 กว่าไร่ มีห้องพัก 4 แบบไว้คอยต้อนรับผู้ที่มาพักไม่ว่าจะเป็น Superior Garden View , Deluxe Plantation , Deluxe Horizon และ Pool Villa โดยห้องพักอยู่ท่ามกลางสวนสวย ๆ บนเขา สไตล์โมเดิร์น ทำให้ได้ทั้งความทันสมัยและธรรมชาติไปในตัว ที่นี่ให้บริการอุปกรณ์บาร์บีคิว มีสระว่ายน้ำกลางแจ้ง ฟิตเนส และมีบริการทัวร์รวมไปถึงรถรับส่งสนามบิน สะดวกสบายสุด ๆ'  ,
  Location:'Flora Creek Chaing Mai 90 Moo 4 samoeng Rd. Banpong, Hangdong 50230',
  phone:'052 001 400',
  link: 'https://www.facebook.com/FloraCreekChiangMai/',
  Facebook:'Flora Creek , Chiang Mai',
},

{name:'จันตราคีรี ชาเลต์ เชียงใหม่' , 
  img: "https://img.salehere.co.th/p/1200x0/2022/02/15/udxo9x1cr0t5.jpg",
  text_box:'อีกหนึ่งโรงแรมสไตล์บูติคที่มีความหรูหรา เป็นส่วนตัว บรรยากาศดีเช่นกัน ที่นี่มีห้องพักทั้งแบบเป็นสไตล์ฝรั่งและ เป็นวิลล่าสไตล์ล้านนา มีความไทยร่วมสมัย โดยนำแรงบันดาลใจมากจากยุ้งข้าวของภาคเหนือ มาประยุกต์เป็นการตกแต่งห้องพักที่มีความสวยงามนั่นเอง ห้องพักมีระเบียงสามารถเดินออกไปรับลมชมวิวบนเนินเขาได้อีกด้วย ที่นี่ยังมีบริการเสิร์ฟอาหารพื้นเมืองอีกด้วย รวมไปถึงมีสวนกุหลาบสวย ๆ ให้ชมและการไปทำกิจกรรมที่ฟาร์มอย่างการเก็บไข่สด ๆ อีกด้วย'  ,
  Location:' ตำบล บ้านปง อำเภอหางดง เชียงใหม่ เทศบาลนครเชียงใหม่, จังหวัดเชียงใหม่ 50230',
  phone:'081 802 0666',
  link: 'https://www.facebook.com/Chantrakhirichaletchiangmai/',
  Facebook:'Chantra Khiri Chalet Chiangmai',
},

{name:'Merchant Villa' , 
  img: "https://img.salehere.co.th/p/1200x0/2022/02/15/ofitrqn4n6wa.jpg",
  text_box:'วิลล่าสวย ๆ อีกหนึ่ง ที่พักอุทยานแห่งชาติดอยสุเทพปุย เดินทางไปดอยสุเทพไม่เกินครึ่งชั่วโมงเท่านั้น ที่นี่ตกแต่งเป็นเหมือนบ้านพักตากอากาศที่อยู่เมืองฝั่งยุโรปเลย ไม่ว่าจะเป็นอาคารและสวน สามารถเดินชมและถ่ายรูปในวิลล่าไม่มีเบื่อ ที่นี่ยังมีชื่อเสียงเรื่องไวน์ที่ยกมาจากทั่วมุมโลกมาไว้ที่นี่ ใครที่ชอบรสชาติของไวน์ น่าจะลองมาพักที่นี่ดู'  ,
  Location:'132/1 Khai Luksuea Soi 5, Chang Puak (0.11 km) เทศบาลนครเชียงใหม่ 50300 เทศบาลนครเชียงใหม่, จังหวัดเชียงใหม่ 50300',
  phone:'097 924 2888 , 053 218 563 ',
  link: 'https://www.facebook.com/merchantvillachiangmai/',
  Facebook:'Merchant Villa Chiangmai',
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