<template>
   
<header>

    <nav class="container">
        <a href="/"><img id="logo" src="../assets/pontoLogo.png"></a>
        <img v-on:click="openMenu" id="btn-menu" src="../assets/menu.svg">

        <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
        <div id="menu-items" :class="{active:menuActive}">
            <a href="/"><img id="menu-logo" src="../assets/pontoLogoMenu.png"></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Registros</a></li>

            </ul>
        </div>

    </nav>

</header>

</template>

<script>
    export default {
        name: 'ParteSuperior',
        data(){
            return {
                menuActive: false
            }
        },
        methods:{
            openMenu: function(){
                this.menuActive = true ;
            },
            closeMenu: function(){
                this.menuActive = false ;
            }
        }
    }
</script>

<style scoped>
    header{
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        background-color: var(--color-background-nav);
        display: flex ;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }

    #logo {
        margin-top: 20px;
        width: 180px;
    }
    #btn-menu{
        width: 25px;
    }

    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40% ;
        height: 100vh ;
        background-color: black;
        opacity: 0.8;
    }
    #menu-logo{
        width: 50px;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
#menu-items.active{
    display: flex;
}

    ul{
        list-style: none;
        text-align: center;
    }
    ul li{
        margin: 20px 0;
    }
    ul li a{
        color: var(--color-text-light);
    }

@media (min-width: 700px){
    #btn-menu,
    #menu-logo,
    #menu-overlay{
        display: none;
    }
    #logo{
        width: 280px;
    }

    #menu-items{
        display: flex;
        position: static;
        height: 60px;
        width: auto;
    }
    ul{
        display: flex;
        height: 60px;
        align-items: center;
    }
    ul li{
        margin: 0 ;
        margin-left: 20px;
    }

}

</style>