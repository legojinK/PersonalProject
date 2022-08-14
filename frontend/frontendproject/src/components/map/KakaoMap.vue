<template>
  <div id="map" ref="map"></div>
</template>

<script>

export default {
  name: "KakaoMap",
  props: ['options'],
  data() {
    return {
      map: null, 
      kakao: window.kakao     
      }
  },
  mounted() {
    
    if (window.kakao && window.kakao.maps) {
      this.initMap()
    } else {
      const script = document.createElement("script")
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap)
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload="
      document.head.appendChild(script)
    }
    var kakao = window.kakao 
  },
  
  methods: {
    initMap () {
      var container = document.getElementById('map') // 지도를 표시할 div
      var options = {
        center: new kakao.maps.LatLng(37.56832, 126.97976), // 지도의 중심좌표
        level: 6,
        mapTypeId : kakao.maps.MapTypeId.ROADMAP
      }

      var map = new kakao.maps.Map(container, options)
      console.log(map)
  }
}
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  position:relative;
  overflow:hidden;
}
</style>