import applyMixin from './mixin'
import {assert} from './util'    
let Vue
export class Store {
  constructor (options = {}) {
    //console.log('实例化Store')
    assert(Vue,`must call Vue.use(Vuex) before creating a store instance.`)   
     //assert 断言
    assert(typeof Promise !=='undefined',`vuex requires a Promise in this browser.`)
    // 如果不支持Promise 
    const {
        plugins=[]
    }=options    //结构写法，赋了初值
    let {
        state={}
    }=option 
    this._committing=false
    this._actions=Object.create(null)  //ES6的写法，创建一个原型为null的空对象
    //类似于this._actions={}
    // console.log(this._actions)
    this._mutations=Object.create(null)
    this._wrappedGetters=Object.create(null)
    this._subscribers=[]
    this._watcherVM=new Vue()
    //核心在于发布订阅者模式，也叫监听者模式
  }
}


export function install(_Vue) {
  console.log('注入vuex')
  if(Vue) {
    console.error(
      '[vuex] already installed.Vue.use(Vuex) should be called only once.')
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}

if(typeof window !== 'undefined'
 && window.Vue) {
   install(window.Vue)
 }
