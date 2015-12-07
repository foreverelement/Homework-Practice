//版权 北京智能社©, 保留所有权利

var FISH_SIZE=[
	null,
	{w: 55, h: 37},
	{w: 78, h: 64},
	{w: 72, h: 56},
	{w: 77, h: 59},
	{w: 107, h: 122}
];

function Fish(type)
{
	this.type=type;
	
	this.x=0;		//中心位置
	this.y=0;
	
	//动起来
	this.speed=3;
	
	this.move();
	
	this.cur=0;		//走到第几张了	0-3
	
	//旋转
	this.rotate=0;
}

Fish.prototype.draw=function (gd)
{
	var w=FISH_SIZE[this.type].w;
	var h=FISH_SIZE[this.type].h;
	
	gd.save();
	
	gd.translate(this.x, this.y);
	gd.rotate(d2a(this.rotate));
	if(this.rotate>90 && this.rotate<270)
	{
		gd.scale(1, -1);
	}
	
	gd.drawImage(
		json['img/fish'+this.type+'.png'],
		//sx, sy, sw, sh
		0, this.cur*h, w, h,
		//dx, dy, dw, dh
		-w/2, -h/2, w, h
	);
	
	gd.restore();
};

Fish.prototype.move=function ()
{
	var _this=this;
	
	//摆尾巴
	setInterval(function (){
		_this.cur++;
		
		if(_this.cur==4)	_this.cur=0;
	}, 100);
	
	//往前游
	setInterval(function (){
		var speedX=_this.speed*Math.cos(d2a(_this.rotate));
		var speedY=_this.speed*Math.sin(d2a(_this.rotate));
		
		_this.x+=speedX;	//?
		_this.y+=speedY;
	}, 30);
};