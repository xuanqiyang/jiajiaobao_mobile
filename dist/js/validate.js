$(function(){function e(e){e.valid()||mui.alert("<div id='errorMesg'></div>")}$.validator.addMethod("filetype",function(e,r,i){var t=e.substring(e.lastIndexOf(".")+1).toLowerCase();return this.optional(r)||-1!=$.inArray(t,i)}),$.validator.addMethod("filesize",function(e,r,i){var t=r.files[0].size,n=1024*i*1024;return this.optional(r)||t<n}),$.validator.addMethod("checkName",function(e,r,i){var t=/^[\w\u4e00-\u9fa5]{1,20}$/g;return this.optional(r)||t.test(e)}),$.validator.addMethod("checkPsw",function(e,r,i){var t=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{6,20}$/;return this.optional(r)||t.test(e)}),$.validator.addMethod("isPhone",function(e,r,i){var t=e.length,n=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;return this.optional(r)||11==t&&n.test(e)}),$("#login_form").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},onsubmit:!0,rules:{cellphone:{required:!0,isPhone:!0},password:{required:!0,maxlength:20,minlength:6,checkPsw:!0}},messages:{cellphone:{required:"请输入手机号码",isPhone:"输入正确的手机号码"},password:{required:"请输入密码",maxlength:"密码最长20位",minlength:"密码最短6位",checkPsw:"密码为以英文开头包含数字的6-20位字符"}}}),$("#reg_form").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},onsubmit:!0,rules:{cellphone:{required:!0,isPhone:!0},verifiCode:{required:!0,number:!0,minlength:6,maxlength:6},regpsw:{required:!0,maxlength:20,minlength:6,checkPsw:!0},againpsw:{required:!0,maxlength:20,minlength:6,equalTo:"#regpsw",checkPsw:!0}},messages:{cellphone:{required:"请输入手机号码",isPhone:"请输入正确的手机号码"},verifiCode:{required:"请输入验证码",number:"请输入正确的验证码",minlength:"请输入正确的验证码",maxlength:"请输入正确的验证码"},regpsw:{required:"请输入密码",maxlength:"密码不能超过20位",minlength:"密码不能少于6位",checkPsw:"密码为以英文开头包含数字的6-20位字符"},againpsw:{required:"请确认密码",maxlength:"密码不能超过20位",minlength:"密码不能少于6位",equalTo:"两次密码输入不一致",checkPsw:"密码为以英文开头包含数字的6-20位字符"},agree:{required:"请同意我们的协议"}}}),$("#changepsw").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{verifiCode:{required:!0,number:!0,minlength:6,maxlength:6},newpsw:{required:!0,minlength:6,maxlength:20,checkPsw:!0},againpsw:{required:!0,minlength:6,maxlength:20,equalTo:"#newpsw",checkPsw:!0}},messages:{verifiCode:{required:"请输入验证码",number:"请输入正确的验证码",minlength:"请输入正确的验证码",maxlength:"请输入正确的验证码"},newpsw:{required:"*请填写密码",minlength:"密码不能少于6位",maxlength:"密码不能超过20位",checkPsw:"密码为以英文开头包含数字的6-20位字符"},againpsw:{required:"*请确认密码",minlength:"密码不能少于6位",maxlength:"密码不能超过20位",equalTo:"两次密码输入不相同",checkPsw:"密码为以英文开头包含数字的6-20位字符"}}}),$("#teacherinfo").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{username:{required:!0,checkName:!0},subject:{required:!0},address:{required:!0}},messages:{username:{required:"请输入您的用户昵称",checkName:"用户昵称由中英文、数字、_、-组成"},subject:{required:"输入您的授课科目"},address:{required:"输入您的授课地址"}}}),$("#studentinfo").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{username:{required:!0,checkName:!0},subject:{required:!0},address:{required:!0},teatime:{required:!0},fee:{required:!0}},messages:{username:{required:"请输入您的用户昵称",checkName:"用户昵称由中英文、数字、_、-组成"},subject:{required:"输入您的求教科目"},address:{required:"输入您的授课地址"},teatime:{required:"输入您的授课时间段"},fee:{required:"输入您预计支付的课酬"}}}),$("#portrait").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{portrait_fname:{required:!0,filetype:["jpg","png"]}},messages:{portrait_fname:{required:"请上传你的头像",filetype:"图片只能是png,jpg"}}}),$("#identi_work").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{work_fname:{required:!0,filetype:["jpg","png"]}},messages:{work_fname:{required:"请上传图片",filetype:"图片只能是png,jpg"}}}),$("#identi_teacherID").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{teacherID_fname:{required:!0,filetype:["jpg","png"]}},messages:{teacherID_fname:{required:"请上传图片",filetype:"图片只能是png,jpg"}}}),$("#identi_professor").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{professor_fname:{required:!0,filetype:["jpg","png"]}},messages:{professor_fname:{required:"请上传图片",filetype:"图片只能是png,jpg"}}}),$("#ask").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{ask_fname:{filetype:["jpg","png"]},ask_descript:{required:!0}},messages:{ask_fname:{filetype:"图片只能是png,jpg"},ask_descript:{required:"请填写对问题的详细描述"}}}),$("#course_info").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{course_fname:{filetype:["jpg","png"]},course_descript:{required:!0}},messages:{course_fname:{filetype:"图片只能是png,jpg"},course_descript:{required:"请填写对课程的详细描述"}}}),$("#example").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{example:{required:!0}},messages:{example:{required:"未填写信息"}}}),$("#join_rule").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{join_rule:{required:!0}},messages:{join_rule:{required:"未填写信息"}}}),$("#exit_rule").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{exit_rule:{required:!0}},messages:{exit_rule:{required:"未填写信息"}}}),$("#feedback").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{feedback:{required:!0}},messages:{feedback:{required:"未填写信息"}}}),$("#certificate").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{certificate:{required:!0}},messages:{certificate:{required:"未填写信息"}}}),$("#identi_education").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{identi_education:{required:!0}},messages:{identi_education:{required:"未填写信息"}}}),$("#introduce").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{introduce:{required:!0}},messages:{introduce:{required:"未填写信息"}}}),$("#identi_ID").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{identi_ID:{required:!0}},messages:{identi_ID:{required:"未填写信息"}}}),$("#other").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{other:{required:!0}},messages:{other:{required:"未填写信息"}}}),$("#itenti_professor").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{itenti_professor:{required:!0}},messages:{itenti_professor:{required:"未填写信息"}}}),$("#general").validate({errorPlacement:function(e,r){$("#errorMesg").html(e)},rules:{general:{required:!0}},messages:{general:{required:"未填写信息"}}}),$(".btn-submit").click(function(){e($("form"))}),$("#save").click(function(){$(".btn-submit").trigger("click")})});