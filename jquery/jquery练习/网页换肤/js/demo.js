/**
 * Created by Lenovo on 2017/5/28.
 */
function init() {
    //初始化所有按钮背景
    $('li').each(function (index, elem) {
        $(this).css("background-position",-index*20+"px 0px");
    });
}
init();
//设置皮肤默认值的索引是0；
var index = 0;
//如果cookie中有值 替换默认值
if(getCookie('skin')){
    var index = getCookie('skin');
}


$('li').on('click',function () {
    //把所有li回复默认样式
    init();
    //将点击的li样式设置成勾选状态
    $(this).css("background-position",-$(this).index()*20+"px -15px");
    //将所有news的class  恢复至news  再添加一个对应勾选的样式
    $('.news').attr('class','news').addClass('skin'+$(this).index());
    //将对应皮肤设置到cookie  值为 0 1 2 3 4 5
    setCookie('skin',$(this).index(),365);
});
//初始化的时候 触发li的点击事件
$('li').eq(index).trigger('click');

// 设置和获取cookie
function setCookie(key,value,day){
    var str = key +"="+value+";";
    if(day){
        var date = new Date();
        date.setDate(date.getDate()+day);

        str += 'expires='+date
        ;
    }
    document.cookie = str;
}
function getCookie(key){
    var str = document.cookie; //"age=18; name=xxx"

    var arr = str.split('; ');  //['age=18','name=xxx'];

    for(var i=0; i<arr.length; i++){
        var arr1 = arr[i].split('=');  //['age','18']   ['name','xxx']
        if(arr1[0] == key){
            return arr1[1];
        }
    }
}
