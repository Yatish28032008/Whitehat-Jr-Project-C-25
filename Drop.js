function Drop() {
    this.x = random(width);
    this.y = random(0,50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);
  
    this.fall = function() {
      this.y = this.y + this.yspeed;
      var gravity = map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + gravity;
  
      if (this.y > height) {
        this.y = random(-200, -100);
        this.yspeed = map(this.z, 0, 20, 4, 10);
      }
    };
  
    this.show = function() {
      var thick = map(this.z, 0, 20, 1, 3);
      stroke(255,255,0);
      line(this.x, this.y, this.x, this.y + this.len);
    };
  }