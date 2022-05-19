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
    for (let i=0;i<=this.laneCount;i++){
      // Interpolation lineaire
      const x=lerp(
        this.left,
        this.right,
        i/this.laneCount
        );
      
      // Pointilles sauf si 1ere et derniere voie
      if(i > 0 && i <this.laneCount) {
        ctx.setLineDash([20,20]);
      }
      else {
        ctx.setLineDash([]);
      }
        
      ctx.beginPath();
      ctx.moveTo(x,this.top);
      ctx.lineTo(x,this.bottom);
      ctx.stroke();      
    }
  }
}
  
// lerp = linear interpolation
function lerp(A,B,t){
  return A+(B-A)*t;
}
