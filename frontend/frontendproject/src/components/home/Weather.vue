<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 15 ?'warm' : ''">
    <v-card>
      <v-card-title class="text-center justify-center py-6">
        <h2 class="font-weight-bold grey--text"> weather </h2>
      </v-card-title>  

      <v-card-title class="text-right justify-center ">
        <h6> {{ dateBuilder() }}</h6>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="grey" grow>
        <v-tab v-for="city in cities" :key="city.name" @click="selectCity(city.name)">
          {{ city.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="city in cities" :key="city.name">
          <v-card class="white">
            <v-card-title class="headline gray--text font-weight-bold justify-center ma-5">
              {{ city.name }}
            </v-card-title>

            <v-list>  
              <v-list-item class="text-center">
                <v-list-item-title class="title font-weight-bold gray--text">
                  {{ weather }}
                </v-list-item-title>
              </v-list-item> 

              <v-list-item class="text-center">
                <v-list-item-title class="gray--text">
                  {{ temp }} ℃
                </v-list-item-title>
              </v-list-item>

              <v-list-item class="text-center">
                <v-list-item-title class="gray--text">
                  {{ humidity }} %
                </v-list-item-title>
              </v-list-item>  

            </v-list>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    </v-card>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data () {
    return {

      requestLink: 'https://api.openweathermap.org/data/2.5',
      apiKey: '',
      heroku: 'https://weathertest1313.herokuapp.com/',
      temp: null,
      humidity:'' ,
      weather:'' ,
      icon: '02d',
      tab: null,
      city: 'Seoul',
      name: 'Seoul',
      
      cities: [
        { name: 'Seoul'},
        { name: 'Busan'},
        { name: 'Incheon'},
        { name: 'Gwangju'},
        { name: 'Daegu'},
        { name: 'Daejeon'},
        { name: 'Ulsan'},
        { name: 'Jeju'},
      ],
      
    }
  },beforeMount () {
    this.selectCity(this.name, this.city)
  },
  
  methods: {
    selectCity (name, city) {
      
      const key = '8063928eca7ac03ec82e133af80e5e80'
      axios.get(`${this.heroku}${this.requestLink}weather?q=${city}&units=metric&appid=${key}`)
      //axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`).
      .then(res => {
      
        console.log(res.data) 
        const list = res.data
        this.name = name
        this.temp = Math.round(list.main.temp)
        this.humidity = list.main.humidity
        this.icon = list.weather[0].icon
        this.weather = list.weather[0].main
        
      })
    
  
    },
    dateBuilder () {
      const d = new Date();
      const months = ["Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec"];
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      const day = days[d.getDay()];
      const date = d.getDate();
      const month = months[d.getMonth()];
      const year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>


<style scoped>
.gray--text {
  color:rgb(100, 100, 100)
}
.v-application .ma-5 {
     margin: 0px  !important; 
}
#app{
  background-image: require("@/assets/picture/cold.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
#app.warm{
  background-image: require("@/assets/picture/warm1.jpg");
}

</style>