<template>
    <!--searchbox-->
  <div class="box">
    <form name="search">
      <p>Find a player</p>
      <input type="text" class="input" name="txt"
      onmouseout="document.search.txt.value = ''">
    </form>
    <i class="fas fa-search"></i>
  </div>

<!--Link menu-->
  <div>
    <img alt="Vue logo" src="../assets/insiders.png">
  </div>
  <div id="nav">
    <div class="highlight"></div>
    <router-link class="link hover-1" to="/">HOME</router-link> |
    <router-link class="link hover-1" to="/index">INDEX</router-link> |
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'menu'
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

//Links about pages
@import url("https://fonts.googleapis.com/css?family=Catamaran:900&display=swap");
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: purple;
    }
  }
  font-family: "Catamaran", sans-serif;
  color: white;
  position: relative;

  position: relative;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 1.5em;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

.link {
    display: inline-block;
    position: relative;
    text-decoration: none;
    padding: 10px 0;
    color: #fff;
}

.nav {
    position: relative;
    display: block;
    padding: 20px 0;
}

.nav {
    position: relative;
    display: inline-block;
}

/* hover styles */
.hover-1 {
    &:after {
        content:'';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: purple;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s;
    }

    &:hover {
        &:after {
            transform-origin: bottom left;
            transform: scaleX(1);
        }
    }
}

p {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
}

//SearchBox
.box{
    position: absolute;
    top: 20%;
    left: 90.5%;
    transform: translate(-50%,-50%);
}
.input {
    padding: 10px;
    width: 45px;
    height: 45px;
    background: rgb(193, 126, 231);
    border: 4px solid #ffffff;
    border-radius: 50px;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 26px;
    color: #6984db;
    outline: none;
    transition: .5s;
}
.box:hover input{
    width: 350px;
    background: #272133;
    border-radius: 10px;
}
i{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: #ffd52d;
    transition: .2s;
}
.box:hover i{
    opacity: 0;
    z-index: -1;
}
</style>
