/**
 * Created by lenovo on 2017/2/13.
 */
define(["b"],function(isArray){
    function sortarr(arr){
        if(isArray(arr)){
            return arr.sort(function(a,b){
                return a-b;
            });
        }else{
            return "传入的不是一个数组";
        }
    }
    return sortarr;

});