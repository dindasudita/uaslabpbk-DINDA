<script>
export default {
    
}
</script>

<template>
    <div class="main-uas">
        <h1 class="judul-uas">KETERANGAN UAS</h1>
        <ul class="list-uas">
            <li>
                Jika lokasi yang diinputkan user memiliki temperature >= 28, maka border card CUACA dan Temperature akan berwarna #fd9f01, artinya temperature masuk kategori WARM atau HANGAT.
                
                <img src="../assets/WARM.png" class="WARM">
            </li>
            <br>
            <li>
                Jika lokasi yang diinputkan user memiliki temperature < 28, maka border card CUACA dan Temperature akan berwarna #1a95a0, artinya temperature masuk kategori COOL atau SEJUK.
                
                <img src="../assets/COLD.png"  class="COLD">
            </li>
        </ul>

    </div>
</template>


<style>
body{
    background-color: #fffbea;
}

.main-uas{
    max-width: 560px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fffbea;
    text-align:left
    
}

.judul-uas{
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    color: #1a95a0;
    margin-bottom: 25px;
}

.uas-list {
  list-style-type: none;
  padding: 0;
}

.uas-list li {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.WARM {
    
    box-shadow: 0 2px 2px 2px #fd9f01;
}

.COLD{
    box-shadow: 0 2px 2px 2px #74dbec;
}

</style>
