$(function() {

        var $href_void = $(".href-void a");
        $href_void.attr('href', 'javascript:void(0)');
        var $category = $(".category");
        
        $category.each(function() {
            var $choose = $(this).children();
            $choose.click(function(event) {
                var $choosed = $(this).children();
                $choosed.toggleClass("choosed");
            })
        }); 

        // var $category_a = $(".category li>a");
        // $category_a.click(function(event){
        //     $(this).addClass("choosed").parent().siblings().children("a").removeClass("choosed");
        // });

        $("#filterReset").click(function() {
            $(".category li a").removeClass("choosed");
        });

        var $tabs = $(".tabs-bar .bar-item");
        var $boxs = $(".tab-box .box-item");
        tab_toggle($tabs, $boxs, "current");

        function tab_toggle(_tab, _box, current) {
            _tab.click(function(event) {
                var index = _tab.index(this);
                $(this).addClass(current).siblings().removeClass(current);
                _box.eq(index).show().siblings().hide();
            });
        }
      var $file_upload = $(".ui-upload input[type='file']");
        $file_upload.on("change",function(){
        var filePath=$(this).val();
        var $showFileName = $(this).parent().siblings(".file-name");
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
            $showFileName.focus();
            $showFileName.val(fileName);
        }else{
            $showFileName.val("您未上传文件，或者您上传文件类型有误！");
            return false;
        }
    })

    $(".buyNum").keyup(function(event) {
        this.value = this.value.replace(/\D+/g,"");
        $buyNum = parseInt($(".buyNum").val());
        if ($buyNum<=0) {
            $(".buyNum")[0].value = 1;      
        }
    });
    $(".buyNum").blur(function(){
            this.value = this.value.replace(/\D+/g,"");
    });

    $(".decrease").click(function(){
        $buyNum = parseInt($(".buyNum").val());
        if($buyNum > 1){
                $(".buyNum")[0].value = $buyNum-1;
                $(this).removeClass("no-drop");
                if(parseInt($(".buyNum").val()) == 1){
                    $(this).addClass("no-drop");    
                }
        }else if($buyNum == 1) {
                $(this).addClass("no-drop");
        }else{
            $(".buyNum")[0].value = 1;          
        }
    });

    
    $(".increase").click(function(){
        $buyNum = parseInt($(".buyNum").val());     
        if($buyNum >=1){
            if($buyNum == 1){
                $(".decrease").addClass("no-drop");
            }
            $(".buyNum")[0].value = $buyNum+1;      
            $(".decrease").removeClass("no-drop");

        }else{
            $(".buyNum")[0].value = 1;
        }
    })
})