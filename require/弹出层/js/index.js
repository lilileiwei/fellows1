/**
 * Created by lenovo on 2017/2/13.
 */
require.config({
      paths:{
          "jquery" : "jquery-1.12.4"
      }
});
require(["jquery","dialog"],function($,Dialog){
    $("#open").on("click",function (){
        var settings ={
            width :400,
            height: 300,
            title :"我的弹出层",
            content :"login.html"
        };
        var dialog=new Dialog();
        dialog.open(settings);
    });
});