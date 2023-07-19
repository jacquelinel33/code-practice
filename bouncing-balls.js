function bouncingBall(h,  bounce,  window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
     let count = 1
       while (h * bounce > window) {
       count += 2
       h*= bounce
       }
      return count
     }
     return -1
   }
   
   bouncingBall(30, .66, 1.5)
