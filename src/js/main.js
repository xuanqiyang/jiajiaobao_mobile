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
    mui.init({
        swipeBack: true //启用右滑关闭功能
    });
    var menuWrapper = document.getElementById("menu-wrapper");
    var menu = document.getElementById("menu");
    var menuWrapperClassList = menuWrapper.classList;
    var backdrop = document.getElementById("menu-backdrop");
    var info = document.getElementById("info");
    backdrop.addEventListener('tap', toggleMenu);
    document.getElementById("menu-btn").addEventListener('tap', toggleMenu);
    //下沉菜单中的点击事件
    mui('#menu .subject-table li').on('tap', 'a', function() {
        toggleMenu();
    });
    var busying = false;

    function toggleMenu() {
        if (busying) {
            return;
        }
        busying = true;
        if (menuWrapperClassList.contains('mui-active')) {
            document.body.classList.remove('menu-open');
            menuWrapper.className = 'menu-wrapper fade-out-up animated';
            menu.className = 'menu bounce-out-up animated';
            setTimeout(function() {
                backdrop.style.opacity = 0;
                menuWrapper.classList.add('hidden');
            }, 500);
        } else {
            document.body.classList.add('menu-open');
            menuWrapper.className = 'menu-wrapper fade-in-down animated mui-active';
            menu.className = 'menu bounce-in-down animated';
            backdrop.style.opacity = 1;
        }
        setTimeout(function() {
            busying = false;
        }, 500);
    }
    $("#filterReset").click(function() {
        $(".category li a").removeClass("choosed");
    });
    var $tabs = $(".tabs-bar .nav-item");
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
    $file_upload.on("change", function() {
        var filePath = $(this).val();
        var $showFileName = $(this).parent().siblings(".file-name");
        var arr = filePath.split('\\');
        var fileName = arr[arr.length - 1];
        if (filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1) {
            $showFileName.focus();
            $showFileName.val(fileName);
        } else {
            $showFileName.val("您未上传文件，或者您上传文件类型有误！");
            return false;
        }
    })

    $(".buyNum").keyup(function(event) {
        this.value = this.value.replace(/\D+/g, "");
        $buyNum = parseInt($(".buyNum").val());
        if ($buyNum <= 0) {
            $(".buyNum")[0].value = 1;
        }
    });
    $(".buyNum").blur(function() {
        this.value = this.value.replace(/\D+/g, "");
    });

    $(".decrease").click(function() {
        $buyNum = parseInt($(".buyNum").val());
        if ($buyNum > 1) {
            $(".buyNum")[0].value = $buyNum - 1;
            $(this).removeClass("no-drop");
            if (parseInt($(".buyNum").val()) == 1) {
                $(this).addClass("no-drop");
            }
        } else if ($buyNum == 1) {
            $(this).addClass("no-drop");
        } else {
            $(".buyNum")[0].value = 1;
        }
    });

    $(".increase").click(function() {
        $buyNum = parseInt($(".buyNum").val());
        if ($buyNum >= 1) {
            if ($buyNum == 1) {
                $(".decrease").addClass("no-drop");
            }
            $(".buyNum")[0].value = $buyNum + 1;
            $(".decrease").removeClass("no-drop");

        } else {
            $(".buyNum")[0].value = 1;
        }
    })
    $(".hidden-pct").click(function() {
        $(this).toggleClass("pct-overflow");
    })
})

function scoreFun(object, opts) {
    var defaults = {
        fen_d: 22,
        ScoreGrade: 5,

        types: ["很不满意",
            "差得离谱,与卖家的描述严重不符,非常不满",
            "不满意",
            "部分有破损,与卖家的描述严重不符,不满意",
            "一般",
            "质量一般",
            "没卖家描述的那么好",
            "满意",
            "质量不错,与卖家描述的基本一致,还是挺满意的",
            "非常满意",
            "很差",
            "差",
            "一般",
            "好",
            "很好"
        ],

        parent: "star-score",
        nameScore: "fenshu",
        attitude: "attitude"
    };

    options = $.extend({}, defaults, opts);
    var countScore = object.find("." + options.nameScore);
    var startParent = object.find("." + options.parent);
    var atti = object.find("." + options.attitude);

    var now_cli;
    var fen_cli;
    var atu;
    var fen_d = options.fen_d;
    var len = options.ScoreGrade;
    startParent.width(fen_d * len);

    var preA = (5 / len);
    for (var i = 0; i < len; i++) {
        var newSpan = $("<a href='javascript:void(0)'></a>");
        newSpan.css({ "left": 0, "width": fen_d * (i + 1), "z-index": len - i });
        newSpan.appendTo(startParent);
    }

    var $options = $("#option-menu li");
    $options.click(function() {
        var that = startParent.find("a");
        show(4, that);
    });

    startParent.find("a").each(
        function(index, element) {

            $(this).click(function() {
                now_cli = index;
                show(index, $(this))
            });
            $(this).mouseenter(function() {
                show(index, $(this))

            });

            $(this).mouseleave(function() {
                if (now_cli >= 0) {
                    var scor = preA * (parseInt(now_cli) + 1);
                    startParent.find("a").removeClass("clibg");
                    startParent.find("a").eq(now_cli).addClass("clibg");
                    var ww = fen_d * (parseInt(now_cli) + 1);
                    startParent.find("a").eq(now_cli).css({ "width": ww, "left": "0" });
                    if (countScore) {
                        countScore.text(scor); //数字分数
                        $(".score").val(scor);
                    }
                } else {
                    startParent.find("a").removeClass("clibg");
                    if (countScore) {
                        countScore.text("");
                        $(".score").val("");
                    }
                }
            })

        });

    function show(num, obj) {
        var n = parseInt(num) + 1;
        var lefta = num * fen_d;
        var ww = fen_d * n; //星星宽度
        var scor = preA * n; //数字
        (len > 5) ? (atu = options.types[parseInt(num)]) : (atu = options.types[parseInt(num) + 10]); //五星和三星
        object.find("a").removeClass("clibg");
        obj.addClass("clibg");
        obj.css({ "width": ww, "left": "0" });
        countScore.text(scor);
        atti.text(atu);
    }
}
scoreFun($(".stars"))

$(".rated span").each(function(index, element) {
    var num = $(this).attr("tip");
    var www = num * 2 * 12 / 75 + "rem";
    $(this).css("width", www);
})
