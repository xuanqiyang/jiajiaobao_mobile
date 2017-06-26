$(function() {
    $.validator.addMethod("filetype", function(value, element, param) {
        var fileType = value.substring(value.lastIndexOf(".") + 1).toLowerCase();
        return this.optional(element) || $.inArray(fileType, param) != -1;
    });
    $.validator.addMethod("filesize", function(value, element, param) {
        var fileSize = element.files[0].size;
        var maxSize = param * 1024 * 1024;
        return this.optional(element) || fileSize < maxSize;
    });
    $.validator.addMethod("checkName", function(value, element, param) {
        var checkName = /^[\w\u4e00-\u9fa5]{4,20}$/g;
        return this.optional(element) || (checkName.test(value));
    })
    $.validator.addMethod("isPhone", function(value, element, param) {
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    })
    $("#login_form").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        onsubmit: true,
        rules: {
            cellphone: {
                required: true,
                isPhone: true
            },
            password: {
                required: true,
                maxlength: 20,
                minlength: 6
            }
        },
        messages: {
            cellphone: {
                required: "请输入手机号码",
                isPhone: "输入正确的手机号码"
            },
            password: {
                required: "请输入密码",
                maxlength: "密码最长20位",
                minlength: "密码最短6位"
            }
        }
    });
    $("#reg_form").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        onsubmit: true,
        rules: {
            cellphone: {
                required: true,
                isPhone: true
            },
            verifiCode: {
                required: true,
                number: true,
                minlength: 6,
                maxlength: 6
            },
            regpsw: {
                required: true,
                maxlength: 20,
                minlength: 6
            },
            againpsw: {
                required: true,
                maxlength: 20,
                minlength: 6,
                equalTo: "#regpsw"
            }
        },
        messages: {
            cellphone: {
                required: "请输入手机号码",
                isPhone: "请输入正确的手机号码"
            },
            verifiCode: {
                required: "请输入验证码",
                number: "请输入正确的验证码",
                minlength: "请输入正确的验证码",
                maxlength: "请输入正确的验证码"
            },
            regpsw: {
                required: "请输入密码",
                maxlength: "密码不能超过20位",
                minlength: "密码不能少于6位"
            },
            againpsw: {
                required: "请确认密码",
                maxlength: "密码不能超过20位",
                minlength: "密码不能少于6位",
                equalTo: "两次密码输入不一致"
            },
            agree: {
                required: "请同意我们的协议"
            }
        }
    });

    $("#changepsw").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        rules: {
            verifiCode: {
                required: true,
                number: true,
                minlength: 6,
                maxlength: 6
            },
            newpsw: {
                required: true,
                minlength: 6,
                maxlength: 20
            },
            againpsw: {
                required: true,
                minlength: 6,
                maxlength: 20,
                equalTo: "#newpsw"
            }
        },
        messages: {
            verifiCode: {
                required: "请输入验证码",
                number: "请输入正确的验证码",
                minlength: "请输入正确的验证码",
                maxlength: "请输入正确的验证码"
            },
            newpsw: {
                required: "*请填写密码",
                minlength: "密码不能少于6位",
                maxlength: "密码不能超过20位"
            },
            againpsw: {
                required: "*请确认密码",
                minlength: "密码不能少于6位",
                maxlength: "密码不能超过20位",
                equalTo: "两次密码输入不相同"
            }
        }
    });

    $("#forget").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        rules: {
            email: {
                email: true,
                required: true
            },
        },
        messages: {
            email: {
                email: "请输入正确的电子邮箱",
                required: "请输入电子邮箱"
            }
        }
    });

    $("#resetpswd").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        rules: {
            newpsw: {
                required: true,
                minlength: 6,
                maxlength: 20
            },
            againpsw: {
                required: true,
                minlength: 6,
                maxlength: 20,
                equalTo: "#newpsw"
            }
        },
        messages: {
            newpsw: {
                required: "请填写密码",
                minlength: "密码不能少于6位",
                maxlength: "密码不能超过20位"
            },
            againpsw: {
                required: "请确认密码",
                minlength: "密码不能少于6位",
                maxlength: "密码不能超过20位",
                equalTo: "两次密码输入不相同"
            }
        }
    });
    $("#userinfo").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        rules: {
            username: {
                required: true,
                number: false,
                checkName: true
            },
            email: {
                required: true,
                email: true
            },
            cellphone: {
                number: true

            },
            qq: {
                number: true
            }
        },
        messages: {
            username: {
                required: "请输入您的名字",
                number: "请输入正确的姓名",
                checkName: "请输入正确的姓名"
            },
            email: {
                required: "请输入邮箱",
                email: "请输入正确的邮箱"
            },
            cellphone: {
                number: "请输入正确的手机号码"
            },
            qq: {
                number: "请输入正确的QQ"
            }
        }
    });
    $("#username").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        rules: {
            username: {
                required: true,
                rangelength: [4, 20],
                checkName: true
            }
        },
        messages: {
            username: {
                required: "请输入用户名",
                rangelength: "用户名长度4-20",
                checkName: "请输入正确的用户名"
            }

        }
    });
    $("#placeReceipt").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        rules: {
            cName: {
                required: true,
                checkName: true
            },
            cellphone: {
                number: true,
                required: true
            },
            address: {
                required: true
            }
        },
        messages: {
            cName: {
                required: "请输入收货人姓名",
                checkName: "请输入正确的姓名"
            },
            cellphone: {
                number: "请输入收货人的手机号码",
                required: "请输入正确的手机号码"
            },
            address: {
                required: "请输入详细地址"
            }
        }
    })
    $("#portrait").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        rules: {
            portrait_fname: {
                required: true,
                filetype: ['jpg', 'png']
            }
        },
        messages: {
            portrait_fname: {
                required: "请上传你的头像",
                filetype: "头像格式只能是png,jpg"
            }
        }

    });
    $("#companyinfo").validate({
        errorPlacement: function(error, element) {
            $("#errorMesg").html(error);
        },
        rules: {
            c_name: {
                required: true,
                checkName: true
            },
            c_organacode: {
                required: true
            },
            c_person: {
                required: true,
                number: false
            },
            c_regtime: {
                required: true,
                dateISO: true
            },
            c_business: {
                required: true
            },
            c_value: {
                required: true,
                number: true
            },
            c_money: {
                required: true,
                number: true
            },
            c_area: {
                required: true
            },
            // pct_idcard:{
            // 	filesize: 1
            // },
            idcard_fname: {
                required: true,
                filetype: ['jpg', 'png']
            },
            // pct_license:{
            // 	filesize: 1
            // },
            license_fname: {
                required: true,
                filetype: ['jpg', 'png']
            },
            // pct_cpnylogo:{
            // 	filesize: 1
            // },
            cpnylogo_fname: {
                required: true,
                filetype: ['jpg', 'png']
            },
            // pct_cpny:{
            // 	filesize: 1
            // },
            cpny_fname: {
                required: true,
                filetype: ['jpg', 'png']
            },
            username: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            c_name: {
                required: "*请填写公司名称"
            },
            c_organacode: {
                required: "*请填写组织机构代码"
            },
            c_person: {
                required: "*请填写法人姓名",
                number: "*法人姓名错误"
            },
            c_regtime: {
                required: "*请填写公司注册时间",
                dateISO: "请输入正确的日期"
            },
            c_business: {
                required: "*请填写公司主营业务"
            },
            c_value: {
                required: "*请填写公司市值",
                number: "必须为数字"
            },
            c_money: {
                required: "请填写当前净资产",
                number: "必须为数字"
            },
            c_area: {
                required: "请填写公司详细地址"
            },
            // pct_idcard:{
            // 	filesize: "文件大小不超过1M"
            // },
            idcard_fname: {
                required: "请上传身份证",
                filetype: "文件类型必须为jpg,png"
            },
            // pct_license:{
            // 	filesize: "文件大小不超过1M"
            // },
            license_fname: {
                required: "请上传营业执照",
                filetype: "文件类型必须为jpg,png"
            },
            // pct_cpnylogo:{
            // 	filesize: "文件大小不超过1M"
            // },
            cpnylogo_fname: {
                required: "请上传公司logo",
                filetype: "文件类型必须为jpg,png"
            },
            // pct_cpny:{
            // 	filesize: "文件大小不超过1M"
            // },
            cpny_fname: {
                required: "请上传公司图片",
                filetype: "文件类型必须为jpg,png"
            },
            username: {
                required: "请填写真实姓名"
            },
            email: {
                required: "请填写邮箱地址",
                email: "请填写正确的邮箱"
            }
        }

    });


    function errorModal(valid_form) {
        var valid = valid_form.valid();
        if (!valid) {
            mui.alert("<div id='errorMesg'></div>")
        }
    }
    $(".btn-submit").click(function() {
        errorModal($("form"));
    })

});
