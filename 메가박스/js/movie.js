(function($){

    /* 트레일러 영상 플레이어를 활성화 */
    /* YouTube iframe API: https://developers.google.com/youtube/player_parameters */

    (function handleTrailer(){
        //selector cash

        //여러가지변수를 객체를 이용해서 만들 수 있다.
        var $selector = {
            body: $("body"),
            overlay: $("#blackout"),
            modal: $("#trailerModal"),
            showButton: $("#showTrailer"),
            hideButton: $("#hideTrailer"),
        };

        //player
        var player = {
            obj:null, //player object
            query : {
                theme: "dark",
                color: "white",
                controls: 1,
                autoplay: 1,
                enablejsapi: 1,
                modestbranding: 0, // YouTube 로고 감춤
                rel: 0,  // 관련 동영상 표시
                showinfo: 0, // 제목, 업로더 감춤
                iv_load_policy: 3 // 특수효과 감춤
            },
            visible: false
        };

        //showbutton, hidebutton
        $selector.showButton.on("click",showPlayer);
        $selector.hideButton.on("click",hidePlayer);

        //Youtube API를 이용해 iframe size생성.
        function setPlayer( id ){
            player.obj = new YT.Player( "trailer", {
                width: 480,
                height: 282,
                videoId: id, //매개변수
                playerVars: player.query
            });

            //first player resize
            resizePlayer();

            //resize rotate view it when player size set-up it ex)cellphone
            $( window ).on( "resize orientationchange", function() {
                resizePlayer();
            });

        }

        function resizePlayer(){
            var viewport = {}, frame ={}, modal = {};
            viewport.width = $(window).width();
            viewport.height = $(window).height();

            frame.width = viewport.width;
            frame.height = frame.width / 1.6; // 16:10 화면비율

            // 전체에서 iframe height 값을 빼서 2로 나눠서 중앙으로 오게함.
            modal.top = ((viewport.height - frame.height) / 2)+"px";
            modal.left = "0px";

            $selector.modal.css(modal);

            player.obj.setSize(frame.width, frame.height);

        };



        //iframe show
        function showPlayer(){
            if ( !player.obj ) {
                setPlayer( $selector.showButton.data("youtube") );
            }

            $selector.body.addClass("modal_on");
            $selector.overlay.show();
            player.visible = true;
        };

        //iframe hide
        function hidePlayer(){
            player.obj.stopVideo();
            $selector.overlay.hide();
            $selector.body.removeClass("modal_on");
            player.visible = false;
        };
    })();


})(jQuery);
