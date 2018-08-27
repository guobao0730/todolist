<template>
  <div>
    ============================26、axios(主要用来处理http网络请求的)=========================
    <div >
      <!--
axios中文文档
https://segmentfault.com/a/1190000008470355?utm_source=tuicool&utm_medium=referral

      使用步骤：
      1、安装axios： cnpm install axios
      2、在main.js文件中引入axios
      3、直接利用在main.js文件中创建的$axios对象来发送一个GET或者POST请求


      设置baseURL,直接在main.js文件中编写如下代码即可:
      Axios.defaults.baseURL = 'http://101.200.177.100:8383'
      类似于Android中的网络请求模式,全局给所有的网络请求添加了一个头部


      axios属性关系
      options:headers、baseURL、params
      可以通过默认全局的方式设置，比如Axios.defaults.baseURL

      同时也可以针对个别请求附加options
      比如this.$axios.get(URL,options)



      axios合并请求
      所谓的合并请求就是将两个请求一起发送，只要有一个请求失败，那么就算失败，两个都请求成功了才是真的成功
      比如获取省市的需求就可以用到合并需求

      -->
      <button @click="getRequest">利用axios发送一个GET请求</button>


      <button @click="postRequest">利用axios发送一个POST请求</button>

      <button @click='crossDomainAccess'>axios跨域访问</button>

      <button @click='hbRequest'>axios合并请求</button>

      <div>
        {{responseData}}
      </div>
    </div>

  </div>
</template>

<script>
  const URL = "http://restapi.amap.com/v3/place/text?&keywords=公交站点&city=杭州&output=json&offset=20&page=1&key=6b6ebee4f2f6ef4c55d1b4b52310acec&extensions=all";

  const URL2 ="http://101.200.177.100:8383/api/manager/login";

  const URL3 = "http://api.map.baidu.com/telematics/v3/weather?location=成都&output=json&ak=rnm8udmHdWaHFWZTO2tuTiG8";
  //const URL2 ="http://api.map.baidu.com/telematics/v3/weather";

  export default {
  data(){
    return {
        value:true,
      responseData:'',
    }
  },
  methods:{

    /*利用axios发送一个get请求*/
    getRequest(){
      this.$axios.get(URL)
        .then(response=>{
          /*
          * response:当前的response就是请求后返回的结果数据
          * */
          console.log(response);
          /*
{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
config
:
{adapter: ƒ, transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", …}
data
:
{status: "0", info: "DAILY_QUERY_OVER_LIMIT", infocode: "10003"}
headers
:
{content-type: "application/json;charset=UTF-8"}
request
:
XMLHttpRequest {onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
status
:
200
statusText
:
"OK"
__proto__
:
Object

          *
          * */

          this.responseData = response;
        })
        .catch(error=>{
          console.log(error);
        })


    },

    /*
    post请求
    目前该POST请求还未调试完成
    */
    postRequest(){

      /*
      * POST请求方式一：
      * content:'123456', 表示请求时所传递的参数
      * 'content-Type':'application/x-www-form-urlencoded', 表示请求头
      * */
      this.$axios.post(URL2,{
        content:'123456',
      },{
        headers:{
          'content-Type':'application/x-www-form-urlencoded',
        }
      })
        .then(response=>{
          console.log(response);
          this.responseData = response;
        })
        .catch(error=>{
          console.log(error);
        })



      /*
      * POST请求方式二：
      * 此种方式无需设置请求头
      * 'content=123456' 表示请求时所传递的参数
      * */

      this.$axios.post(URL2,
      'content=123456'
      )
        .then(response=>{
        console.log(response);
      })
        .catch(error=>{
          console.log(error);
        })



    },

    /*
    * axios跨域访问
    * 详细步骤参考如下网址：
    * https://blog.csdn.net/yuanlaijike/article/details/80522621
    * 1、设置baseURL,在main.js文件中编写如下代码：
    *     import Axios from 'axios'
          Vue.prototype.$axios = Axios

    *     Axios.defaults.baseURL = '/api'
          Axios.defaults.headers.post['Content-Type'] = 'application/json';
          Vue.config.productionTip = false

       2、配置代理
          修改config文件夹下的index.js文件，在proxyTable中加上如下代码：
          '/api':{
              target: "http://api.douban.com/v2",
              changeOrigin:true,
              pathRewrite:{
                  '^/api':''
              }
          }

        3、设置请求URL
        4、重新运行项目
    * */
    crossDomainAccess(){
      this.$axios.get("/movie/top250")
        .then(res=>{
          console.log(res)
          //将当前的响应数据显示出来
          this.responseData = res;

        })
        .catch(err=>{
          console.log(err)
        })
    },



    /*合并请求*/
    hbRequest(){

      /*
      * 获取请求所返回的数据
      * */
      function getMsg(res1,res2) {
        console.log(res1);
        console.log(res2);
        /*
        * {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
        * {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
        * */
      }

      /*
      * 当前的all是合并请求的关键字
      * */
      this.$axios.all([
        /*
        * 因为目前没有找到其它可行URL地址，所以就用相同的URL地址代替
        * */
        this.$axios.get(URL),
        this.$axios.get(URL)
      ])
        /*分发响应*/
        .then(this.$axios.spread(getMsg))
        .catch(error=>{
          console.log(error);
        })
    }

  },
}
</script>

<style scoped>
</style>
