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

var oldpoint = [0,0];

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
        line1 = [];
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
        line1 = [];
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
        line1 = [];
      }
  }
  } catch(error){
    let blank = '';
  } 
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line5[i];
      point_y = line5[i+1];
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
        line1 = [];
      }
  }
  } catch(error){
    let blank = '';
  } 
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line6[i];
      point_y = line6[i+1];
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
        line1 = [];
      }
  }
  } catch(error){
    let blank = '';
  } 
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line7[i];
      point_y = line7[i+1];
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
        line1 = [];
      }
  }
  } catch(error){
    let blank = '';
  } 
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line8[i];
      point_y = line8[i+1];
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
        line1 = [];
      }
  }
  } catch(error){
    let blank = '';
  } 
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line9[i];
      point_y = line9[i+1];
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
        line1 = [];
      }
  }
  } catch(error){
    let blank = '';
  } 
  
  try{
    for(i = 0;i<=5000;i+=2){
      point_x = line10[i];
      point_y = line10[i+1];
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
        line1 = [];
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
  
  if (linedraw == 1){
    line1.push(mouseX);
    line1.push(mouseY);
  } else if(linedraw == 2){
    line2.push(mouseX);
    line2.push(mouseY);
  } else if(linedraw == 3){
    line3.push(mouseX);
    line3.push(mouseY);
  } else if(linedraw == 4){
    line4.push(mouseX);
    line4.push(mouseY);
  } else if(linedraw == 5){
    line5.push(mouseX);
    line5.push(mouseY);
  } else if(linedraw == 6){
    line6.push(mouseX);
    line6.push(mouseY);
  } else if(linedraw == 7){
    line7.push(mouseX);
    line7.push(mouseY);
  } else if(linedraw == 8){
    line8.push(mouseX);
    line8.push(mouseY);
  } else if(linedraw == 9){
    line9.push(mouseX);
    line9.push(mouseY);
  } else if(linedraw == 10){
    line10.push(mouseX);
    line10.push(mouseY);
  }
}

function mouseReleased(){
  linedraw += 1;
  oldpoint = [];
}
