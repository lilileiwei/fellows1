/**
 * Created by lenovo on 2017/2/13.
 */
/* require.js */
require(["a"],function(sortarr){
    var arr =[1,5,2,10];
    //var arr="123";
    console.log(sortarr(arr));
});
/* sea.js */
define(function(require){
    var arr =[1,2,5,3,8];
    //var arr="123";
    var sortarr = require("a");
    console.log(sortarr(arr));
});