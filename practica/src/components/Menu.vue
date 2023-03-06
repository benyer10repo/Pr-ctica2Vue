<template>
    <div>
        
        <nav class="navbar navbar-expand-lg " :style="{ 'background-color': menuColor }" >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{marca}}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="menu in menus">
                        <a class="nav-link" aria-current="page" v-bind:href="menu.url">{{menu.etiqueta}}</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  data(){
    return{
        marca: 'MegaDron',
        menuColor: "lightblue",
        menus: [
                    {
                        etiqueta: "Inicio",
                        url: "#"
                    },
                    {
                        etiqueta: "Tienda",
                        url: "#"
                    }
                ],
    }
  }
}
</script>