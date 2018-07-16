/* 
* @Author: anchen
* @Date:   2018-05-01 14:26:57
* @Last Modified by:   anchen
* @Last Modified time: 2018-05-16 19:19:13
*/
            var  caipudaquan=document.getElementById("caipudaquan");
            var  div_caipudaquan=document.getElementById("div_caipudaquan");
            var  yinshijiankang=document.getElementById("yinshijiankang");
            var  div_yinshijiankang=document.getElementById("div_yinshijiankang"); 
            caipudaquan.onmouseover=function(){
                    div_caipudaquan.style.transform='scale(1)';
            }
            caipudaquan.onmouseout=function(){
                    div_caipudaquan.style.transform='scale(0)';
            }
            div_caipudaquan.onmouseover=function(){
                    div_caipudaquan.style.transform='scale(1)';
            }
            div_caipudaquan.onmouseout=function(){
                    div_caipudaquan.style.transform='scale(0)';
            }

            yinshijiankang.onmouseover=function(){
                    div_yinshijiankang.style.transform='scale(1)';
            }
            yinshijiankang.onmouseout=function(){
                    div_yinshijiankang.style.transform='scale(0)';
            }
            div_yinshijiankang.onmouseover=function(){
                    div_yinshijiankang.style.transform='scale(1)';
            }
            div_yinshijiankang.onmouseout=function(){
                    div_yinshijiankang.style.transform='scale(0)';
            }   
                /*点击次数*/
             var time=document.getElementById("time") ;
                if (localStorage.pagecount)
              {
              localStorage.pagecount=Number(localStorage.pagecount) +1;
              }
            else
              {
              localStorage.pagecount=1;
              }     
                                 // localStorage.次数 内定义对象 Number(localStorage.page)转换成数字访问一次加+1次                    
                   time.innerHTML="累次访问美食天下网页次数:"+ localStorage.pagecount;
    
            /*时间*/
            function  begintime(){
            var date=new Date();
            var xingqi=date.getDay();
            if(xingqi==0)xingqi='天';
            if(xingqi==1)xingqi='一';
            if(xingqi==2)xingqi='二';
            if(xingqi==3)xingqi='三';
            if(xingqi==4)xingqi='四';
            if(xingqi==5)xingqi='五'; 
            if(xingqi==6)xingqi='六';
            var str=date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'号星期'+xingqi;
            var str1=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            timeshow.innerHTML=str;
            timeshow1.innerHTML=str1;
            }
            var timeshow=document.getElementById('timeshow');
            var timeshow1=document.getElementById('timeshow1');
            setInterval(begintime, 1000);
            begintime();