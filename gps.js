function lo(){
        var options={
        enableHighAcuracy:true,
        timeout:15000,
        maximumAge:3000}
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(successFun,errorFun,options);
            }else{
            alert("此设备不支持GPS定位！");
                        return false;
            }
            return true;
            }
        function successFun(position){
        
        document.getElementById("p0").innerHTML="经度:"+position.coords.longitude
        document.getElementById("p1").innerHTML="维度:"+position.coords.latitude
        document.getElementById("p2").innerHTML="误差:"+position.coords.accuracy
        document.getElementById("p3").innerHTML="误差:"+position.coords.accuracy
        }
        function errorFun(error){ 
        switch(error.code){
        case 1:
		alert("拒绝了位置服务！")
		break
	case 2:
		alert("获取不到位置信息")
		break
	case 3:
		alert("获取信息超时错误")
		break
        default:
        	break
        }
        } 
       
