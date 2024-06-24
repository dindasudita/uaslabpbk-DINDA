<script setup>
import { ref, computed} from 'vue'

const location = ref('')
const loading = ref(false)
const weather = ref(null)

async function fetchWeather()
{
    loading.value = true
    const apiKey = '4c0872ab61c13721aad535cd1415ba61'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&units=metric&appid=${apiKey}`
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error("Network response wasn't ok")
        weather.value = await response.json()
        loading.value = false
    } catch (error){
        console.error("There was an error fetching the weather data:", error)
        loading.value = false
    } 
}


const warnaBorder = computed(()=> {
    if(!location.value){
        return 'border-default'
    }
    else if(weather.value && weather.value.main.temp >= 28){
        return 'border-warm'
    }
    else {
        return 'border-cold'
    }
})

const warnaTextTemp = computed(()=>{
    if(weather.value && weather.value.main.temp >= 28){
        return 'text-warm'
    }
    else {
        return 'text-cold'
    }
})
</script>

<template>
    <q-page class="laman-weather">
        <q-card :class="warnaBorder" class="my-card" flat-color="primary">
            <q-card-section class="header">
                <div class="text-h5">CEK CUACA</div>
            </q-card-section>

            <div class="search-location">
                <q-card-section class="content">
                <q-input
                v-model="location"
                label="Inputkan Lokasi"
                outlined 
                dense
                />
            </q-card-section>

                <q-btn 
                @click="fetchWeather"
                class="search-btn"
                :loading="loading"
                :disable="loading || !location"
                round color="" 
                icon="search" />
            </div>

            <q-card-section v-if="loading">
                <div>Loading...</div>
            </q-card-section>

            <q-card-section v-else-if="weather">
                <div class="text-wname">
                    Lokasi : {{ weather.name }}
                </div>
                <div :class="`text-wtemp ${warnaTextTemp}`">
                    Temperatur : {{ weather.main.temp }} °C
                </div>
                <div class="text-wdesc">
                    Kondisi : {{ weather.weather[0].description }}
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>


<style scoped>
.laman-weather {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    background-color: #F6F5F0;
}

.my-card{
    width: 380px;
    border-radius: 5%;
    margin-top: 3px;
    box-shadow: 0 4px 8px #feebc7;
}

.text-h5{
    text-align: center;
    font-weight: bolder;
    background: linear-gradient(to right, #000fff,#38d5d8, aqua, #ffda46, #f9c31b, #ffc71b);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
}

.text-wname{
    color: #333;
    text-align: center;
    font-size: medium;
    font-weight:600;
}

.text-wtemp{
    color: #333;
    text-align: center;
    font-size: medium;
    font-weight: bold;
}

.text-wdesc{
    color: #333;
    text-align: center;
}

.border-default{
    border: 3px solid #FDCB6E;
}

.border-warm {
    border: 3px solid #fd9f01;
}

.border-cold {
    border:3px solid #1a95a0;
}

.content{
    color:bisque;
    margin-right: 2px;
}

.search-location{
    display: flex;
    align-items: center;
    
}

.search-btn{
    background-color: #fd9f01;
    cursor: pointer;
    margin-left: 80px;
}

.text-warm {
    color: #fd9f01;
}

.text-cold {
    color: #1a95a0;
}
</style>