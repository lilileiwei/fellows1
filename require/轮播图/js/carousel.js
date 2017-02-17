/**
 * Created by lenovo on 2017/2/14.
 */
define(["jquery"],function($){
    function Carousel(){
        this.defaultSettings={
            selector:"body",
            imgs:[],
            bottonStyle:"square",
            arrowPos:"bottom",
            speed:500
        };
        this.container=$('<div class="carousel-container"></div>');
        this.imgs=$('<div class="carousel-imgs"></div>');
        this.tab=$(' <ul class="carousel-tab"></ul>');
        this.arrows=$('<div class="carousel-arrows"></div>');
        this.prev=$('<span class="carousel-arrows-prve">&lt</span>');
        this.next=$('<span class="carousel-arrows-next">&gt</span>');
    }
    Carousel.prototype.init=function(options){
        $.extend(this.defaultSettings,options);
        for(var i=0; i<this.defaultSettings.imgs.length; i++){
            var $img = $("<img src='"+ this.defaultSettings.imgs[i] +"'>");
            this.imgs.append($img);
            var $li = $("<li></li>");
            if(this.defaultSettings.buttonStyle == "square"){
                $li.html(i + 1);
            }else{
                $li.addClass("circle");
            }
            this.tab.append($li);
        }

        $("img", this.imgs).eq(0).addClass("selected");
        $("li", this.tab).eq(0).addClass("selected");
        this.container.append(this.imgs).append(this.tab).append(this.arrows);
        this.arrows.append(this.prev).append(this.next);
        $(this.defaultSettings.selector).append(this.container);

        // if(this.defaultSettings.arrowPos == "center"){
        //     $("span", this.arrows).addClass("center");
        //     this.arrows.removeClass("carousel-arrows");
        // }
        this.arrows.addClass(this.defaultSettings.arrowPos);
        this.prev.addClass(this.defaultSettings.arrowPos);
        this.next.addClass(this.defaultSettings.arrowPos);

        var nowIdx = 0;
        var that = this;
        this.tab.on("mouseover", "li", function(){
            nowIdx = $(this).index();
            console.log(nowIdx);

            changeImg();
        });
        this.prev.on("click", function(){
            nowIdx--;
            if(nowIdx == -1){
                nowIdx = that.defaultSettings.imgs.length - 1;
            }
            changeImg();
        });
        this.next.on("click", function(){
            nowIdx++;
            if(nowIdx == that.defaultSettings.imgs.length){
                nowIdx = 0;
            }
            changeImg();
        });
        this.container.hover(function(){
            clearInterval(that.timer);
        }, function(){
            play();
        });
        play();

        function play(){
            that.timer = setInterval(function(){
                that.next.trigger("click");
            }, that.defaultSettings.speed);
        }

        function changeImg(){//Ë½ÓÐ·½·¨
            $("li", that.tab).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
            $("img", that.imgs).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
        }


    };
    return Carousel;
});