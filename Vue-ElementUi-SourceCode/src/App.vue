<template>
    <div id="app">
      <el-button 
      :loading="true"
      @click="doDefaultTap" size="large">默认按钮</el-button>
      <el-button icon="edit" type="primary" :disabled="true">主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>

      <div>
        <el-button-group>
          <el-button 
          icon="arrow-left"
          type="primary">
            上一页</el-button>
          <el-button type="primary">
            下一页<i class="el-icon-arrow-rightda
             el-icon--right"></i>
          </el-button>
        </el-button-group>
      </div>

      <div>
        <el-button-group>
          <el-button type="primary" icon="edit"></el-button>
          <el-button type="primary" icon="share"></el-button>
          <el-button type="primary" icon="delete"></el-button>
        </el-button-group>
      </div>

      <div>
        <el-button type="text"
         @click="dialogVisible=true">
          点击打开Dialog</el-button>
        <el-dialog 
        title="提示"
        :visible.sync="dialogVisible">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
      </div>

     <div>
       <span class="demonstration">
         默认Hover指示器触发
       </span>
       <el-carousel 
       :interval="1000"
       :initialIndex="2"
       height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      
     </div>
    </div>
  </template>
  
  <script>
 
  import ElButton from './components/ElButton.vue'
  import ElButtonGroup from './components/ElButtonGroup.vue'
   import ElDialog from './components/ElDialog.vue'
  import ElCarousel from './components/ElCarousel.vue'
  import ElCarousel2 from './components/ElCarousel2.vue'
  import ElCarouseItem from './components/ElCarouseItem.vue'
  export default {
    name: 'app',
    data() {
      return {
        dialogVisible: false
      }
    },
    methods: {
      doDefaultTap (evt) {
        console.log('tapped')
        console.log(evt)
      }
    },
    components: {
      'el-button': ElButton,
      'el-button-group':ElButtonGroup,
      'el-dialog': ElDialog,
      'el-carousel':ElCarousel,
      'el-carousel2':ElCarousel2,
      'el-carousel-item':ElCarouseItem
    }
  }
  </script>
  
  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  div{
    margin-top: 40px;
  }
  li{
    list-style: none;
  }
  .el-carousel__item h3{
    color:#475669;
    font-size: 14px;
    opacity: .75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
  .el-carousel__item:nth-child(2n){
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1){
    background-attachment: #d3dce6;
  }
  </style>
  