function setup() {
  createCanvas(2000,850);
  
  background(0,0,0);

}

var ball_x = 1000;
var ball_y = 500;

var ball2_x = 900;
var ball2_y = 475;

var ball_speed_x = 7;
var ball_speed_y = 0;

var ball2_speed_x = -7;
var ball2_speed_y = 0;

var ball_direction = 'right';

var random_direction = 0;

var lastwrittento = 4;

var oldpoint = [0,0];

var linedraw = 1;

var lineangle = '';

var ballhit = 0;

var pausex1 = 0;
var pausey1 = 0;
var pausex2 = 0;
var pausey2 = 0;

var line1 = [];
var line2 = [];
var line3 = [];
var line4 = [];
var line5 = [];

var drawing = false;

function animate_ball(){
  if (pausex1 == 0 && pausey1 == 0 && pausex2 == 0 && pausey2 == 0){
    ball_x = ball_x + ball_speed_x;
    ball_y = ball_y + ball_speed_y;
    
    if (ball_y <= 50 || ball_y >= 750){
      ball_speed_y = -1 * ball_speed_y;
    }
    
    if (ball_x <= 50 || ball_x >= 1793){
      ball_speed_x = -1 * ball_speed_x;
    } 
    
    ball2_x = ball2_x + ball2_speed_x;
    ball2_y = ball2_y + ball2_speed_y;
    
    if (ball2_y <= 50 || ball2_y >= 750){
      ball2_speed_y = -1 * ball2_speed_y;
    }
    
    if (ball2_x <= 50 || ball2_x >= 1793){
      ball2_speed_x = -1 * ball2_speed_x;
    }
  }
}

function bounceball(point_x,point_y){
  if (oldpoint[1] <= point_y){
    if (oldpoint[0] <= point_x){
      print('num 1');
      storer = ball_speed_y;
      ball_speed_y = -1 * ball_speed_x;
      ball_speed_x = storer;
    } else {
      print('num 2');
      storer = ball_speed_y;
      ball_speed_y = ball_speed_x;
      ball_speed_x = storer;
    }
  } else {
    if (oldpoint[0] <= point_x){
      print('num 3');
      storer = ball_speed_y;
      ball_speed_y = -1 * ball_speed_x;
      ball_speed_x = storer;
    } else {
      print('num 4');
      storer = ball_speed_y;
      ball_speed_y = ball_speed_x;
      ball_speed_x = storer;
    }
  }
  ball_direction = 'speed control';
        
}

function bounceball2(point_x,point_y){
  if (oldpoint[1] <= point_y){
    if (oldpoint[0] <= point_x){
      print('num 1');
      storer = ball2_speed_y;
      ball2_speed_y = -1 * ball2_speed_x;
      ball2_speed_x = storer;
    } else {
      print('num 2');
      storer = ball2_speed_y;
      ball2_speed_y = ball2_speed_x;
      ball2_speed_x = storer;
    }
  } else {
    if (oldpoint[0] <= point_x){
      print('num 3');
      storer = ball2_speed_y;
      ball2_speed_y = -1 * ball2_speed_x;
      ball2_speed_x = storer;
    } else {
      print('num 4');
      storer = ball2_speed_y;
      ball2_speed_y = ball2_speed_x;
      ball2_speed_x = storer;
    }
  }
  ball_direction = 'speed control';
        
}

function draw() {
  frameRate(50000);
  print(linedraw);
  
  oldpoint = [mouseX,mouseY];
  
  fill(0,0,0);
  rect(0,0,2000,850);
  fill(255,255,255);
  rect(50,50,1800,750);
  fill(200,200,0);
  rect(1870,100,100,100);
  strokeWeight(2);
  textSize(20);
  fill(0,0,200);
  text('Pause',1890,150);
  fill(200,100,0);
  rect(1870,300,100,100);
  fill(0,0,200);
  text('Restart',1890,350);
  
  fill(200,0,0);
  rect(50,50,100,100);
  fill(200,200,200);
  ellipse(100,100,75,75);
  
  fill(0,0,200);
  rect(1750,700,100,100);
  fill(200,200,200);
  ellipse(1800,750,75,75);
  
  fill(0,0,200);
  ellipse(ball_x,ball_y,50,50);
  fill(200,0,0);
  ellipse(ball2_x,ball2_y,50,50);
  
  requestAnimationFrame(animate_ball, 700);
  
  fill(0,0,0);
  stroke(0,0,0);
  
  oldpoint = [0,0];
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line1[i];
      point_y = line1[i+1];
      strokeWeight(25); 
      if (oldpoint[0] != 0 && oldpoint[1] != 0){
        line(oldpoint[0],oldpoint[1],point_x,point_y);
      }
      oldpoint = [point_x,point_y];
      let directdistance = Math.sqrt(((ball_x - point_x)*(ball_x - point_x))+((ball_y - point_y)*(ball_y - point_y)));
      if (directdistance <= 50){
        bounceball(point_x,point_y);
        line1 = [];
      }
      
      let directdistance2 = Math.sqrt(((ball2_x - point_x)*(ball2_x - point_x))+((ball2_y - point_y)*(ball2_y - point_y)));
      if (directdistance2 <= 50){
        bounceball2(point_x,point_y);
        line1 = [];
      }
    }
  } catch(error){
    let blank = '';
  } 
  
    
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line2[i];
      point_y = line2[i+1];
      strokeWeight(25);
      
      if (oldpoint[0] != 0 && oldpoint[1] != 0){
        line(oldpoint[0],oldpoint[1],point_x,point_y);
      }
      
      oldpoint = [point_x,point_y];
      
      let directdistance = Math.sqrt(((ball_x - point_x)*(ball_x - point_x))+((ball_y - point_y)*(ball_y - point_y)));
      
      if (directdistance <= 50){
        bounceball(point_x,point_y);
        ball_direction = 'speed control';
        line2 = [];
      }
      
      let directdistance2 = Math.sqrt(((ball2_x - point_x)*(ball2_x - point_x))+((ball2_y - point_y)*(ball2_y - point_y)));
      if (directdistance2 <= 50){
        bounceball2(point_x,point_y);
        line2 = [];
      }
  }
  } catch(error){
    let blank = '';
  } 
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line3[i];
      point_y = line3[i+1];
      strokeWeight(25);
      
      if (oldpoint[0] != 0 && oldpoint[1] != 0){
        line(oldpoint[0],oldpoint[1],point_x,point_y);
      }
      
      oldpoint = [point_x,point_y];
      
      let directdistance = Math.sqrt(((ball_x - point_x)*(ball_x - point_x))+((ball_y - point_y)*(ball_y - point_y)));
      
      if (directdistance <= 50){
        bounceball(point_x,point_y);
        ball_direction = 'speed control';
        line3 = [];
      }
      let directdistance2 = Math.sqrt(((ball2_x - point_x)*(ball2_x - point_x))+((ball2_y - point_y)*(ball2_y - point_y)));
      if (directdistance2 <= 50){
        bounceball2(point_x,point_y);
        line3 = [];
      }
  }
  } catch(error){
    let blank = '';
  } 
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line4[i];
      point_y = line4[i+1];
      strokeWeight(25);
      
      if (oldpoint[0] != 0 && oldpoint[1] != 0){
        line(oldpoint[0],oldpoint[1],point_x,point_y);
      }
      
      oldpoint = [point_x,point_y];
      
      let directdistance = Math.sqrt(((ball_x - point_x)*(ball_x - point_x))+((ball_y - point_y)*(ball_y - point_y)));
      
      if (directdistance <= 50){
        bounceball(point_x,point_y);
        ball_direction = 'speed control';
        line4 = [];
      }
      
      let directdistance2 = Math.sqrt(((ball2_x - point_x)*(ball2_x - point_x))+((ball2_y - point_y)*(ball2_y - point_y)));
      if (directdistance2 <= 50){
        bounceball2(point_x,point_y);
        line4 = [];
      }
  }
  } catch(error){
    let blank = '';
  }  
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line5[i];
      point_y = line5[i+1];
      strokeWeight(25);
      
      if (oldpoint[0] != 0 && oldpoint[1] != 0){
        line(oldpoint[0],oldpoint[1],point_x,point_y);
      }
      
      oldpoint = [point_x,point_y];
      
      let directdistance = Math.sqrt(((ball_x - point_x)*(ball_x - point_x))+((ball_y - point_y)*(ball_y - point_y)));
      
      if (directdistance <= 50){
        bounceball(point_x,point_y);
        ball_direction = 'speed control';
        line5 = [];
      }
      
      let directdistance2 = Math.sqrt(((ball2_x - point_x)*(ball2_x - point_x))+((ball2_y - point_y)*(ball2_y - point_y)));
      if (directdistance2 <= 50){
        bounceball2(point_x,point_y);
        line5 = [];
      }
  }
  } catch(error){
    let blank = '';
  }

  if (ball_speed_x > 7){
      ball_speed_x = 7;
  } else if (ball_speed_x < -7){
    ball_speed_y = -7;
  } else if (ball_speed_y > 7){
    ball_speed_y = 7;
  } else if (ball_speed_y < -7){
    ball_speed_y = -7;
  }
  
  if (ball_speed_x == 0 && ball_speed_y == 0 && pausex1 == 0 && pausey1 == 0 && pausex2 == 0 && pausey2 == 0){
    //ball_speed_x = 7;
  }
  
  strokeWeight(2);
  
  drawing = false;
  
  let balldistance = Math.sqrt(((ball_x - ball2_x)*(ball_x - ball2_x))+((ball_y - ball2_y)*(ball_y - ball2_y)));
  
  if (balldistance <= 50 && ballhit >= 10){
    storer = ball2_speed_y;
    ball2_speed_y = ball2_speed_x;
    ball2_speed_x = storer;
    storer = ball_speed_y;
    ball_speed_y = ball_speed_x;
    ball_speed_x = storer;
    ballhit = 0;
  }

  if (ball_x >= 1770 && ball_x <= 1830 && ball_y >= 720 && ball_y <= 780){
    ball_x = 1800;
    ball_y = 750;
    ball_speed_x = 0;
    ball_speed_y = 0;
  }
  if (ball_x >= 1800 && ball_y == 750){
    textSize(60);
    text('YOU WIN',900,325);   
  }
  if (ball2_x >= 50 && ball2_x <= 180 && ball2_y >= 50 && ball2_y <= 180){
    ball2_x = 100;
    ball2_y = 100;
    ball2_speed_x = 0;
    ball2_speed_y = 0;
  }
  if (ball2_x >= 100 && ball2_y == 100){
    textSize(60);
    text('YOU WIN',900,325);   
  }
  if (ball_x >= 50 && ball_x <= 180 && ball_y >= 50 && ball_y <= 180){
    ball_x = 100;
    ball_y = 100;
    ball_speed_x = 0;
    ball_speed_y = 0;
    ball2_speed_x = 0;
    ball2_speed_y = 0;
  }
  if (ball_x >= 100 && ball_y == 100){
    textSize(60);
    text('YOU LOSE: Ball entered hole of WRONG color',600,325);   
  }
  if (ball2_x >= 1770 && ball2_x <= 1830 && ball2_y >= 720 && ball2_y <= 780){
    ball2_x = 1800;
    ball2_y = 750;
    ball2_speed_x = 0;
    ball2_speed_y = 0;
    ball_speed_x = 0;
    ball_speed_y = 0;
  }
  if (ball2_x >= 1800 && ball2_y == 750){
    textSize(60);
    text('YOU LOSE: Ball entered hole of WRONG color',600,325);   
  }
  
  ballhit += 1;
  }

function mouseDragged(){
  
  drawing = true;
  
  ellipse(mouseX,mouseY,100,100);
  
  oldpoint = [mouseX,mouseY];
  
  if (line1 == []){
    linedraw = 1;
  } else if (line2 == []){
    linedraw = 2;
  } else if (line3 == []){
    linedraw = 3;
  } else if (line4 == []){
    linedraw = 4;
  } else if (line5 == []){
    linedraw = 5;
  }
  
  
  
  
  if (linedraw == 1){
    lastwrittento = 1;
    line1.push(mouseX);
    line1.push(mouseY);
  } else if(linedraw == 2){
    lastwrittento = 2;
    line2.push(mouseX);
    line2.push(mouseY);
  } else if(linedraw == 3){
    lastwrittento = 3;
    line3.push(mouseX);
    line3.push(mouseY);
  } else if(linedraw == 4){
    lastwrittento = 4;
    line4.push(mouseX);
    line4.push(mouseY);
  } else if(linedraw == 5){
    lastwrittento = 5;
    line5.push(mouseX);
    line5.push(mouseY);
  }
}
function mouseReleased(){
  if (linedraw == 1){
    line2 = [];
  }
  if (linedraw == 2){
    line3 = [];
  }
  if (linedraw == 3){
    line4 = [];
  }
  if (linedraw == 4){
    line5 = [];
  }
  if (linedraw == 5){
    line1 = [];
    linedraw = 0;
  }
  
  linedraw += 1;
  oldpoint = [];
  print(pausex1);
}

function mouseClicked(){
  if (mouseX >= 1870 && mouseX <= 1970 && mouseY >= 100 && mouseY <= 200 && pausex1 == 0){
    pausex1 = ball_speed_x;
    pausey1 = ball_speed_y;
    pausex2 = ball2_speed_x;
    pausey2 = ball2_speed_y;
    
    ball_speed_x = 0;
    ball_speed_y = 0;
    ball2_speed_x = 0;
    ball2_speed_y = 0; 
    
    print('in pause');
  }
  if (mouseX >= 1870 && mouseX <= 1970 && mouseY >= 100 && mouseY <= 200 && pausex1 != 0){
    ball_speed_x = pausex1;
    ball_speed_y = pausey1;
    ball2_speed_x = pausex2;
    ball2_speed_y = pausey2;
    
    pausex1 = 0;
    pausey1 = 0;
    pausex2 = 0;
    pausey2 = 0;
    
    print('in play');
  }
  print('clicked in');
}
