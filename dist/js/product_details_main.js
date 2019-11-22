//配置引入的路径
require.config({
   //给引入的模块定义个变量名,paths格式为 变量名:引用地址
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "parabola":"parabola",//抛物线方程
        "product_details":"product_details",//商品详情页js模块
    },
    //设置非标准模块
    shim:{
        //设置依赖关系，规定先引入jquery，在引入jquery-cookie
        "jquery-cookie":["jquery"],
        //声明当前模块不遵从AMD规范，并取消暴露
        "parabola":{
            exports:"_"
        }
    }
})

//调用=模块里封装的方法
require(["product_details"],function(pd){//pd形参拿到的是返回来的对象
    pd.nav_download();
    pd.item_download();
    pd.add();
})