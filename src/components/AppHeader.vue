<template>
  <header>
    <div class="wrap-top">
      <div class="wrap">
        <div class="item item-name">
          Система генерации документов для получения электронных подписей в ГБУЗ "МИАЦ"
        </div>
        <div class="item">
          ШАГ: 1
        </div>
      </div>
      <div class="wrap">
        <div class="item">
          Мед. работник
        </div>
        <div class="item item-mo">
          Красногвардейская РБ
        </div>
        <div class="item item-logout">
          Выход
        </div>
      </div>
    </div>
    <ul class="progress">
        <li class="progress-item active">
          1
        </li>
        <li class="progress-item">
          2
        </li>
        <li class="progress-item">
          3
        </li>
        <li class="progress-item">
          4
        </li>
        <li class="progress-item">
          5
        </li>
    </ul>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>


<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 -1px 8px rgba(0,0,0,.15);
  top: 0;
  position: fixed;
  /* height: 48px; */
  width: 100%;
  font-weight: 500;
  color: rgb(60, 64, 67);
}
.wrap-top {
  display: flex;
  justify-content: space-between; 
  height: 50px;;
}
.wrap {
  display: flex;
  align-items: center;
}

.item-name {
  padding-left: 15px;
  margin-right: 25px;
}
.item-mo {
  margin: 0 25px;
}
.item-logout{
  padding-right: 15px;
}
li {
  list-style-type: none;
  flex-grow: 1;
  text-align: center;
  /* border-right: 1px solid rgba(0,0,0,.15);
  border-top: 1px solid rgba(0,0,0,.15); */
}
li:last-child {
  border-right: none;
}
li:hover {
  background-color: rgba(66, 133, 244, .4);
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 9px;
  color: rgba(0,0,0,.15);
  /* width: 100%; */
  /* justify-content: space-between; */
}

.active {
  background-color: #4285f4;
  color: white;
  border-radius: 0 8px 8px 0;
}
</style>
