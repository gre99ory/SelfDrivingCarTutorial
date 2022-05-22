class Road {
  // Route centree en x
  constructor(x,width,laneCount=3) {
    this.x=x;
    this.width=width;
    this.laneCount=laneCount;

    this.left=x-width/2;
    this.right=x+width/2;

    const infinity=1000000;
    this.top=-infinity;
    this.bottom=infinity;

    // 4 points 
    const topLeft={x:this.left,y:this.top};
    const topRight={x:this.right,y:this.top};
    const bottomLeft={x:this.left,y:this.bottom};
    const bottomRight={x:this.right,y:this.bottom};
    // 2 segments
    this.borders=[
      [topLeft,bottomLeft],
      [topRight,bottomRight]
    ];
  }

  // Position centrale de la voie 
  // Pour y centrer le vehicule
  getLaneCenter(laneIndex){
    const laneWidth=this.width/this.laneCount;
    return this.left+laneWidth/2+laneWidth*laneIndex;
  }

  draw(ctx){
    ctx.lineWidth=5;
    ctx.strokeStyle="white";

    // Nombre de voies
    for (let i=1;i<=this.laneCount-1;i++){
      // Interpolation lineaire
      const x=lerp(
        this.left,
        this.right,
        i/this.laneCount
        );
      
      // Pointilles sauf si 1ere et derniere voie
      ctx.setLineDash([20,20]);
      
      ctx.beginPath();
      ctx.moveTo(x,this.top);
      ctx.lineTo(x,this.bottom);
      ctx.stroke();
    }

    ctx.setLineDash([]);
    this.borders.forEach(border=>{
      ctx.beginPath();
      ctx.moveTo(border[0].x,border[0].y);
      ctx.lineTo(border[1].x,border[1].y);
      ctx.stroke();        
    });
  }
}
  

