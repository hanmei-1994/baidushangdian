$(function () {
		//自动轮播效果
		var num=0; 
		var t;
		$(".banner_zbimg img").fadeOut(400).eq(0).fadeIn(400);
		// console.log($(".banner_zbimg img"))
		 t=setInterval(move,2000)
		 	function move() {
				num++;
				if(num>$(".banner_zbimg img").length-1)
					{
						num=0;
					}
		        $(".banner_zbimg img").fadeOut(400).eq(num).fadeIn(200);
		        $(".banner_left_btn li").removeClass("cur").eq(num).addClass("cur")
			}

		//鼠标移上去效果 ，也可用hover({})
		
		$(".banner_z").mouseover(function () {
			clearInterval(t);

		})
		$(".banner_z").mouseout(function () {
			t=setInterval(move,2000)		
			
		})


		//点击按钮与图片对应
		$(".banner_left_btn li").click(function () {
			var index=$(this).index();
			num=index;
			$(".banner_zbimg img").fadeOut(400).eq(num).fadeIn(200);
		    $(".banner_left_btn li").removeClass("cur").eq(num).addClass("cur")
		})
		// console.log($(".banner_right_jt"))
       //右箭头，与自动轮播效果一致
		$(".banner_right_jt").click(function () {
			move();
		})
		//左箭头，相反
		$(".banner_left_jt").click(function () {
			num--;
			if(num==-1)
				{
					num=$(".banner_zbimg img").length-1;
				}
		    $(".banner_zbimg img").fadeOut(400).eq(num).fadeIn(200);
		    $(".banner_left_btn li").removeClass("cur").eq(num).addClass("cur")
		 	
		})

	})
