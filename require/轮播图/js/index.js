/**
 * Created by lenovo on 2017/2/14.
 */
require(["carousel"],function(Carousel){
    var imgarr1=["img/carousel1.jpg","img/carousel2.jpg","img/carousel3.jpg","img/carousel4.jpg"];
    var settings={
        selector:"#container1",
        imgs:imgarr1,
        bottonStyle:"square",
        arrowPos:"bottom",
        speed:500
    };
    var carousel1=new Carousel();
    carousel1.init(settings);

    var imgarr2=["img/carousel2.jpg","img/carousel3.jpg","img/carousel4.jpg"];
    var settings2={
        selector:"#container2",
        imgs:imgarr2,
        bottonStyle:"circle",
        arrowPos:"center",
        speed:1000
    };
    var carousel2=new Carousel();
    carousel2.init(settings2);

});
