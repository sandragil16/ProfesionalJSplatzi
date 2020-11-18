class AutoPause {
    constructor () {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleIntersection.bind(this)
    }
    run(player) {
        this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

observer.observe(this.player.media);

document.addEventListener("visibilitychallenge", this.handVisibilityChange)
}

handleIntersection(entires) {
    const entry = entries[0];
 
   const isVisible = entry.intersectionRatio > this.threshold

   if (isVisible) {
       this.player.play();
   } else {
       this.player.pause();
   }
}
   
handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible"
    if (isVisible) {
        this.player.play();
    } else {
        this.player.pause();
    }
  }
}






export default AutoPause;