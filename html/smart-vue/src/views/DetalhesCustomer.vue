<template>
  <div class="detalhes-customer" id="detalhesCustomer">


    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 class="nomeCustomer" :title="'ID: ' + customer._id"><i class="el-icon-user-solid"></i> {{ customer.name.first + ' ' + customer.name.last }}, {{ customer.age }} anos - {{ customer.company }}</h2>
        <el-button type="warning" style="float: right;" @click="voltarInicio"><i class="el-icon-arrow-left"></i> Voltar</el-button>
      </div>

      <div>
        <h2><i class="el-icon-document"></i> Sobre</h2>
        <p>{{ customer.about }}</p>
        <p><b>Origem:</b> {{ customer.channel }}</p>
        <p><b>Budget:</b> {{ customer.budget }}</p>
        <p><b>Data de registro:</b> {{ customer.registered | moment("DD/MM/YYYY HH:mm") }}h</p>
        <br/>

        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="p in customer.pictures" :key="customer._id + Math.random()*100000">
            <img :src="p.url + '?r='+ Math.random()*100000" :alt="customer.name.first + ' ' + customer.name.last" :title="customer.name.first + ' ' + customer.name.last" :key="customer._id" />
          </el-carousel-item>
        </el-carousel>

        <h2><i class="el-icon-phone"></i> Dados para Contato</h2>
        <el-row>
          <el-col :span="12" class="text--center"><a target="_blank" :href="'mailto:' + customer.email"><i class="el-icon-message"></i> {{ customer.email }}</a></el-col>
          <el-col :span="12" class="text--center"><a target="_blank" :href="'tel:' + customer.phone"><i class="el-icon-mobile-phone"></i> {{ customer.phone }}</a></el-col>
        </el-row>
        <br/>


        <h2><i class="el-icon-date"></i> Histórico de contatos</h2>
        <el-timeline :reverse="true">
          <el-timeline-item
                  v-for="c in customer.contactTimeline"
                  :key="c.id"
                  :timestamp="$moment(c.date).format('DD/MM/YYYY HH:mm')">
            {{ c.broker }}
          </el-timeline-item>
        </el-timeline>



        <h2><i class="el-icon-location"></i> Localização</h2>
        <p>{{ customer.address }}</p>
        <div id="mapa" class="mapa"></div>

      </div>

    </el-card>

  </div>
</template>


<script>
  export default {
    name: 'detalhes-customer',
    components: {},
    data() {
      return {
        mapa: null,
        tileLayer: null,
      }
    },
    props: ['customer'],

    mounted() {
      this.inicializarMapa()
      this.scrollTop()
    },

    methods: {
      //Cria o mapa e coloca o marcador nas coordenadas do customer
      inicializarMapa() {
        this.mapa = L.map('mapa').setView([this.customer.latitude, this.customer.longitude], 6);
        this.tileLayer = L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                {
                  maxZoom: 18,
                  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
        );
        this.tileLayer.addTo(this.mapa);

        let f = {
          id: 0,
          name: this.customer.name.first + ' ' + this.customer.name.last,
          type: 'marker',
          coords: [this.customer.latitude, this.customer.longitude],
        }
        f.leafletObject = L.marker(f.coords).bindPopup(f.name);
        f.leafletObject.addTo(this.mapa);
      },

      //Voltar para a pagina inicial
      voltarInicio(){
        this.$router.push("/")
      },

      //Rola a página para o topo, caso a página anterior estiver para baixo
      scrollTop(){
        const y = document.getElementById('detalhesCustomer').getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: y,
          behavior: 'smooth'
        });
      }
    }
  }

</script>


<style lang="scss">

  .detalhes-customer{

    .nomeCustomer{
      margin-top: 5px;
      margin-bottom: 5px;
      display: inline-block;
    }

    .box-card{
      max-width: 960px;
      margin-left: auto;
      margin-right: auto;
    }

    .mapa {
      height: 300px;
    }

    a{
      &, i{
        text-decoration: none;
        color: #4a4a4a;
        font-weight: bold;
      }
    }

  }

</style>