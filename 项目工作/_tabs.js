/* 
* @Author: anchen
* @Date:   2018-07-28 23:34:50
* @Last Modified by:   anchen
* @Last Modified time: 2018-07-29 00:08:36
*/

$(document).ready(function(){
     /****标签页修改样式*******/
                $("#tabs").tabs({
                    collapse:true,
                    event:"mouseover"
                });
                $("#tabs li a").mouseover(function(){
                         $("#tabs li a").css({"color":"#4169E1"});
                        $(this).css({"color":"#C71585"});
                });
                /*******************/

                $("button").button();

                /****报名课程*******/
                var $name=$("#name");
                var $tel=$("#tel");
                var $course=$("#course");
                var $time=$("#time");
                allFields=$([]).add($name).add($tel).add($course).add($time);
                var $tips=$(".validateTips");

                function updateTips(t){
                    $tips.text(t).addClass("ui-state-highlight");
                    setTimeout(function(){
                       $tips.removeClass("ui-state-highlight",1500);
                    }, 500);
                }

                function checkLength(o,n,min,max){
                    if(o.val().length>max||o.val().length<min){
                        alert('SB不？');
                        o.addClass('ui-state-error');
                        updateTips(""+n+"的长度必须在"+min+"和"+max+"之间");
                        return false;
                    }
                    else{
                        return true;
                    }
                }

                function checkRegexp(o,n){
                    var tel=/^[1][3,4,5,7,8][0-9]{9}$/;
                     if(tel.test(o.val())==false){
                        o.addClass('ui-state-error');
                        updateTips(n);
                        return false;
                    }
                    else{
                        return true;
                    }
                }
                $("#dialog-form").dialog({
                autoOpen:false,
                height:500,
                width:650,
                modal:true,
                buttons:{
                    "报名":function(){
                        var bValid=true;
                        allFields.removeClass("ui-state-error");
                        bValid=bValid&&checkLength($name,"用户名",3,16);
                        bValid=bValid&&checkRegexp($tel,"手机号码格式不对");
                        bValid=bValid&&checkLength($course,"报名的课程",5,16);
                        bValid=bValid&&checkLength($time,"报名的日期",5,16);
                        if(bValid){
                            alert('报名成功！');
                            $(this).dialog("close");
                            var baoming=document.getElementById('baoming');
                            baoming.action='#';  //你要跳转的后台
                            baoming.submit();
                        }
                    
                    },
                    "取消":function(){
                        $(this).dialog("close");
                    },
                },
                close:function(){
                    allFields.val("").removeClass("ui-state-error");
                }
            })
            
            $("#create-user")
            .click(function(){
                $("#dialog-form").dialog("open");
            })
            /*******************/
            /*********日期选择**********/
            $("#time").datepicker({
                showButtonPanel:true,
                numberOfMonths:2,
                changeMonth:true,
                changeYear:true,
                showWeek:true,
                firstDay:5,
                dateFormat:"yy-mm-dd"
            });
});