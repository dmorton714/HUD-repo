<script setup>

</script>

<template>
  <header>
    <img src="/logo1.png" alt="Lou Cares" />
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Page1</a></li>
        <li><a href="#">Page2</a></li>
        <li><a href="#">Page3</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: fixed;
  width: 100%;
  height: 10rem;
  top: 0;
  left: 0;
  z-index: 10;
}

img {
  width: 15rem;
  height: 15rem;
}

nav {

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    backdrop-filter: blur(90px);
    border-radius: 20px;
}

ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;
    gap: 20px;
}

</style>