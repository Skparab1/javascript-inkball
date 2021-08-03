function setup() {
  createCanvas(1900,850);

}

var ball_x = 1000;
var ball_y = 500;

var ball_speed_x = 7;

var ball_speed_y = 0;

var ball_direction = 'right';

var random_direction = 0;

var linedraw = 1;

var line1 = [];
var line2 = [];
var line3 = [];
var line4 = [];
var line5 = [];
var line6 = [];
var line7 = [];
var line8 = [];
var line9 = [];
var line10 = [];

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
  
  if (drawing){
    try{
      for(i = 0;i<=5000;i+=2){
        
        point_x = line1[i];
        point_y = line1[i+1];
        
        ellipse(point_x,point_y,50,50);
        
        let directdistance = Math.sqrt(((ball_x - line1[i])*(ball_x - line1[i]))+((ball_y - line1[i+1])*(ball_y - line1[i+1])));
        
        if (directdistance <= 25+15){
          if (ball_speed_y <= line1[i+1]){
            ball_speed_y = -1 * (ball_speed_y + 7);
            print('sped up');
          } else {
            ball_speed_y = -1 * (ball_speed_y + 7);
            print('sped down');
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
        ellipse(line2[i],line2[i+1],30,30);
        
        let directdistance = Math.sqrt(((ball_x - line2[i])*(ball_x - line2[i]))+((ball_y - line2[i+1])*(ball_y - line2[i+1])));
        
        if (directdistance <= 60){
          ball_speed_x = -1 * ball_speed_x;
          ball_speed_y = -1 * ball_speed_y;
        }
    }

    } catch(error){
      let blank = '';
    }  
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
  
  
  }

function mouseDragged(){
  
  drawing = true;
  
  ellipse(mouseX,mouseY,100,100);
  
  if (linedraw == 1){
    line1.push(mouseX);
    line1.push(mouseY);
  }
}
