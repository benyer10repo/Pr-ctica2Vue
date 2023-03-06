<template>
    <div >
      

      <div class="container">

<div class="row">
    <h3>{{producto.nombre}}</h3>
</div>
<div class="row">
    <div class="col-12 col-sm-6 col-md-4 ">
        <img :src="producto.imagen" class="img-fluid"/>
    </div>
    <div class="col-12 col-sm-6  col-md-8">
        <h6>{{producto.descripcion}}</h6>
        <div class="p-3 mb-2 text-white" style="background-color: gray;" v-bind:style="precioEstilos">
            Precio: {{producto.precio}} BOB
        </div>
        <h5>Color</h5>
        <div v-for="(n,j) in producto.colores" class="col-12 col-sm-12  col-md-12" style="display: inline;">
           
            <input type="radio" class="btn-check " name="options" :id="j+1" autocomplete="off" v-bind:value="n">
            <label class="btn color-box clic" :for="j+1"  :style="{ 'background': n }" ></label>
            
        
        </div>
        <h5>Cantidad</h5>
        <div class="quantity">
            <button v-on:click="counter -=1">-</button> <div id="ca">{{counter}}</div> <button v-on:click="counter +=1">+</button>
        </div>
        <div class="buy-box">
            <button v-if="comparar(counter)"   v-on:click="comprar(producto.id,counter)" type="button" class="btn btn-primary">Comprar</button>
            <button v-else="comparar(counter)" type="button" class="btn btn-primary" disabled>Comprar</button>
        </div>
        
    </div>
</div>
</div>


      
      <div class="container col-12">

<div class="row col-12">
    <h4>Productos relacionados</h4>
</div>
<div class="row col-4" v-for="p in productosRelacionados" style="display: inline-block;" >
    
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{p.nombre}}</h5>
                <img :src="p.imagen" class="img-fluid">
                <p class="card-text">{{p.descripcion}}</p>
                    <div class="producto-relacionado-precio" v-bind:style="precioEstilos">Precio:{{p.precio}} BOB</div>
                
                    <!-- <div   v-for="(prodrela,i) in productosRelacionados"> -->
                        
                        <div>
                            <div v-for="co in p.colores" class="color-box" :style="{ 'background': co }"></div>
                        </div>
                        
                     <!--</div> -->
                
            </div>
        </div>
    </div>
    
    
</div>
</div>

    </div>
</template>


<script>

export default {
  name: 'productView',
  props:[],
  emits:[],
  data(){
    return{
      
      precioEstilos: "background: orangered; color: white; font-weight: bold",
      productosRelacionados:[],
      producto:{},
      counter:0
    }
  },
  methods:{
    comparar: function ()
    {
        return this.counter >0;
    },
    color: function (n)
    {
        var n = '';
        var ele = document.getElementsByName('options');
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                n = ele[i].value;
        }
        
    return n;
    },
    comprar: function (id,counter,n) {
      
      alert('pedidos\n{\nid: ' + this.producto.id + '\ncantidad: ' + this.counter + '\ncolor: '+ this.color(n)  +'\n}');
      
      
    },
      getProductos(){
        this.axios.get("http://localhost:5000/Productos")
        .then((response)=>{
          console.log(response.data);
          this.productosRelacionados = response.data;//loque recupera cargamos a array del data
          this.producto = response.data[0];
        })
        .catch((err)=>{console.log(err);})
        
      }
  },
  computed:{

  },
  mounted(){
    this.getProductos();
  },
  components:{

  }

}

</script>
