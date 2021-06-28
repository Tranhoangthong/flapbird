var canvas = document.getElementById('gamezone');
var context = canvas.getContext('2d');
var scoreshow = document.getElementById('score');
var birdimg = new Image();
var anhnenimg = new Image();
var ongtren = new Image();
var ongduoi = new Image();

birdimg.src="img/bird.png";
anhnenimg.src="img/anh_nen.png";
ongtren.src = "img/ong_2.png";
ongduoi.src ="img/ong_1.png";


// tao bien can` thiet

var score = 0;
var khoangcachhaiong = 140;
var khoangcachongduoi; //bien khoang cach tu` ong' tren den ong' duoi'
//tao ra 1 ojecb cho bird toa do x y la 1 nua canvas
var bird = {
	x:  anhnenimg.width/4,
	y:  anhnenimg.height/2
}
var ong = [];//tao mang chua cac ong' di chuyen
ong [0] ={
	x: canvas.width,
	y: 0 // khoi tao ong dau tien ben phai y = 0
} 
// tao function
function run(){
    // load hình ảnh vào
    context.drawImage(anhnenimg,0,0);
    context.drawImage(birdimg,bird.x,bird.y);

    for(var i=0;i<ong.length;i++){
        khoangcachongduoi=ongtren.height+khoangcachhaiong;
        context.drawImage(ongtren,ong[i].x,ong[i].y);
        
        context.drawImage(ongduoi,ong[i].x,ong[i].y+khoangcachongduoi);
        
        ong[i].x-=5; 
        if(ong[i].x ==canvas.width/2){
            ong.push({
                x:canvas.width,
                y:Math.floor(Math.random()*ongtren.height)-ongtren.height
                
            })
        }
        // if(ong[i].x ==0 )ong.splice(0,1);
             
        if(ong[i].x==bird.x)score++;  
         
        if(bird.y+birdimg.height==canvas.height||
        bird.x+birdimg.width>= ong[i].x && bird.x <= ong[i].x +ongtren.width
        && (bird.y<=ong[i].y+ongtren.height||
        bird.y +birdimg.height>= ong[i].y+ khoangcachongduoi)    
        ){
            return;
        }                   
    }
//dieu kien dau tien la dung. dat' , toa do y+ do cao cua bird , so sanh vi tri x vs bird ,so sanh vi tri vs y
	// function;
	scoreshow.innerHTML = "score:" +score;
	//cho on chim trạng thái rơi xuống
	bird.y+=3;
	requestAnimationFrame(run);
}
//thêm function space lên
document.addEventListener("keydown",function(){
	bird.y -=60;
})
run();
