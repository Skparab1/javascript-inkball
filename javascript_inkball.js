function setup() {
  createCanvas(1900,850);
  
  background(0,0,0);

}

var ball_x = 1000;
var ball_y = 500;

var ball_speed_x = 7;

var ball_speed_y = 0;

var ball_direction = 'right';

var random_direction = 0;

var lastwrittento = 4;

var oldpoint = [0,0];

var linedraw = 1;

var lineangle = '';

var line1 = [];
var line2 = [];
var line3 = [];
var line4 = [];

var drawing = false;

function animate_ball(){
  ball_x = ball_x + ball_speed_x;
  ball_y = ball_y + ball_speed_y;
  
  if (ball_y <= 50 || ball_y >= 750){
    ball_speed_y = -1 * ball_speed_y;
  }
  
  if (ball_x <= 50 || ball_x >= 1793){
    ball_speed_y = -1 * ball_speed_y;
    ball_speed_x = -1 * ball_speed_x;
  }  
}

function draw() {
  frameRate(60);
  print(linedraw);
  
  oldpoint = [mouseX,mouseY];
  
  fill(0,0,0);
  rect(0,0,1900,850);
  fill(255,255,255);
  rect(50,50,1800,750);
  
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
  
  setTimeout(animate_ball, 1000);
  
  fill(0,0,0);
  stroke(0,0,0);
  
  oldpoint = [0,0];
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line1[i];
      point_y = line1[i+1];
      strokeWeight(10);
      
      if (oldpoint[0] != 0 && oldpoint[1] != 0){
        line(oldpoint[0],oldpoint[1],point_x,point_y);
      }
      
      oldpoint = [point_x,point_y];
      
      let directdistance = Math.sqrt(((ball_x - point_x)*(ball_x - point_x))+((ball_y - point_y)*(ball_y - point_y)));
      
      if (directdistance <= 50){
        if (oldpoint[1] <= point_y){
          if (oldpoint[0] <= point_x){
            storer = ball_speed_y;
            ball_speed_y = -1 * ball_speed_x;
            ball_speed_x = storer;
          } else {
            storer = ball_speed_y;
            ball_speed_y = ball_speed_x;
            ball_speed_x = -1 * storer;
          }
        } else {
          if (oldpoint[0] <= point_x){
            storer = ball_speed_y;
            ball_speed_y = -1 * ball_speed_x;
            ball_speed_x = -1 * storer;
          } else {
            storer = ball_speed_y;
            ball_speed_y = ball_speed_x;
            ball_speed_x = storer;
          }
        }
        
        ball_direction = 'speed control';
        ball_speed_x = -1 * ball_speed_x;
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
      strokeWeight(10);
      
      if (oldpoint[0] != 0 && oldpoint[1] != 0){
        line(oldpoint[0],oldpoint[1],point_x,point_y);
      }
      
      oldpoint = [point_x,point_y];
      
      let directdistance = Math.sqrt(((ball_x - point_x)*(ball_x - point_x))+((ball_y - point_y)*(ball_y - point_y)));
      
      if (directdistance <= 50){
        if (oldpoint[1] <= point_y){
          if (oldpoint[0] <= point_x){
            storer = ball_speed_y;
            ball_speed_y = -1 * ball_speed_x;
            ball_speed_x = storer;
          } else {
            storer = ball_speed_y;
            ball_speed_y = ball_speed_x;
            ball_speed_x = -1 * storer;
          }
        } else {
          if (oldpoint[0] <= point_x){
            storer = ball_speed_y;
            ball_speed_y = -1 * ball_speed_x;
            ball_speed_x = -1 * storer;
          } else {
            storer = ball_speed_y;
            ball_speed_y = ball_speed_x;
            ball_speed_x = storer;
          }
        }
        
        ball_direction = 'speed control';
        ball_speed_x = -1 * ball_speed_x;
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
      strokeWeight(10);
      
      if (oldpoint[0] != 0 && oldpoint[1] != 0){
        line(oldpoint[0],oldpoint[1],point_x,point_y);
      }
      
      oldpoint = [point_x,point_y];
      
      let directdistance = Math.sqrt(((ball_x - point_x)*(ball_x - point_x))+((ball_y - point_y)*(ball_y - point_y)));
      
      if (directdistance <= 50){
        if (oldpoint[1] <= point_y){
          if (oldpoint[0] <= point_x){
            storer = ball_speed_y;
            ball_speed_y = -1 * ball_speed_x;
            ball_speed_x = storer;
          } else {
            storer = ball_speed_y;
            ball_speed_y = ball_speed_x;
            ball_speed_x = -1 * storer;
          }
        } else {
          if (oldpoint[0] <= point_x){
            storer = ball_speed_y;
            ball_speed_y = -1 * ball_speed_x;
            ball_speed_x = -1 * storer;
          } else {
            storer = ball_speed_y;
            ball_speed_y = ball_speed_x;
            ball_speed_x = storer;
          }
        }
        
        ball_direction = 'speed control';
        ball_speed_x = -1 * ball_speed_x;
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
      strokeWeight(10);
      
      if (oldpoint[0] != 0 && oldpoint[1] != 0){
        line(oldpoint[0],oldpoint[1],point_x,point_y);
      }
      
      oldpoint = [point_x,point_y];
      
      let directdistance = Math.sqrt(((ball_x - point_x)*(ball_x - point_x))+((ball_y - point_y)*(ball_y - point_y)));
      
      if (directdistance <= 25+15){
        if (ball_speed_y <= point_y){
          ball_speed_y = -1 * (ball_speed_y + 7);
          print('sped up');
        } else {
          ball_speed_y = -1 * (ball_speed_y + 7);
          print('sped down');
        }
        
        ball_direction = 'speed control';
        ball_speed_x = -1 * ball_speed_x;
        line4 = [];
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
  
  strokeWeight(2);
  
  
  drawing = false;
  
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
    line1 = [];
    linedraw = 0;
  }
  
  linedraw += 1;
  oldpoint = [];
}
