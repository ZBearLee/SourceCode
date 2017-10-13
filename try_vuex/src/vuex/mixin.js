export default function(Vue){
    const version=Number(Vue.version.split('.')[0])
    //console.log(version)
    //console.log(Vue.version)
    if(version>=2){
        //vue 2.0以上版本
        const usesInit=Vue.config._lifecycleHooks.indexOf('init') >-1  //生命周期钩子里有一个init方法
        //console.log(Vue.config._lifecycleHooks)
        //console.log(usesInit)
       // console.log(Vue.mixin)
       Vue.mixin(usesInit?{init:vuexInit}:{beforeCreate:vuexInit})
    }else{
        //vue 旧版本 1.0
    }
}

//vuex 初始化的钩子 钩子就是挂载那里，占个位置
//注入到所有的vue实例之中
function vuexInit(){
    const options=this.$options
    //console.log(options)
    if(options.store){
        this.$store=options.store
       // console.log(this.$store)
    }

}