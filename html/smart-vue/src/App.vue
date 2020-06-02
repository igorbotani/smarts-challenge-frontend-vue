<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>


<script>
    export default {
        name: 'pagina-inicial'
    }
</script>


<style lang="scss">
    #app {
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
    }

    .clearfix::before, .clearfix::after {
        content: ' ';
        display: table;
    }

    .clearfix::after {
        clear: both;
    }

    .text--center {
        text-align: center;
    }

</style>
