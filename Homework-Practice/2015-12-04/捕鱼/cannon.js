//版权 北京智能社©, 保留所有权利

//炮
var CANNON_SIZE=[
	null,
	{w: 74, h: 74},
	{w: 74, h: 76},
	{w: 74, h: 76},
	{w: 74, h: 83},
	{w: 74, h: 85},
	{w: 74, h: 90},
	{w: 74, h: 94}
];

function Cannon(type)
{
	this.type=type;
	
	//
	this.x=0;
	this.y=0;
	
	this.rotate=0;
}

Cannon.prototype.draw=function (gd)
{
	var w=CANNON_SIZE[this.type].w;
	var h=CANNON_SIZE[this.type].h;
	
	gd.save();
	
	gd.translate(this.x, this.y);
	gd.rotate(d2a(this.rotate));
	
	gd.drawImage(
		//img
		json['img/cannon'+this.type+'.png'],
		//sx, sy, sw, sh
		0, 0, w, h,
		//dx, dy, dw, dh
		-w/2, -h/2, w, h
	);
	
	gd.restore();
};

//炮弹
var BULLET_SIZE=[
	null,
	{x: 86, y: 0, w: 24, h: 26},
	{x: 62, y: 0, w: 25, h: 29},
	{x: 30, y: 0, w: 31, h: 35},
	{x: 32, y: 35, w: 27, h: 31},
	{x: 30, y: 82, w: 29, h: 33},
	{x: 0, y: 82, w: 30, h: 34},
	{x: 0, y: 0, w: 30, h: 44}
];

function Bullet(type)
{
	this.type=type;
	
	this.x=0;
	this.y=0;
	
	this.rotate=0;
	
	this.speed=5;
	
	this.move();
}

Bullet.prototype.draw=function (gd)
{
	var x=BULLET_SIZE[this.type].x;
	var y=BULLET_SIZE[this.type].y;
	var w=BULLET_SIZE[this.type].w;
	var h=BULLET_SIZE[this.type].h;
	
	gd.save();
	
	gd.translate(this.x, this.y);
	gd.rotate(d2a(this.rotate));
	
	gd.drawImage(
		//img
		json['img/bullet.png'],
		//sx, sy, sw, sh
		x, y, w, h,
		-w/2, -h/2, w, h
	);
	
	gd.restore();
};

Bullet.prototype.move=function ()
{
	var _this=this;
	
	//移动
	setInterval(function (){
		//speedX=sin(ang)*speed
		//speedY=cos(ang)*speed
		
		var speedX=Math.sin(d2a(_this.rotate))*_this.speed;
		var speedY=Math.cos(d2a(_this.rotate))*_this.speed;
		
		_this.x+=speedX;
		_this.y-=speedY;
	}, 30);
};