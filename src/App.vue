<template>
  <div id="app">
    <main>
        <router-link to="/mainpage"></router-link> 
      <router-view/> 
    </main>
    
  </div>
</template>

<script>
window.location.href = "http://localhost:8080/#/mainpage";
export default {
  
}
</script>

<style src="./assets/tailwind.css">