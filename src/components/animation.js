export const displayClick = {
    hidden:{display:'none',
top:-100,
transition: {
    duration: 0.5
  }
},
    show:{
        display:'flex',
        top:0,
        transition: {
            type: "spring",
            ease:"easeIn",
            duration: 0.5
          }
    },
    exit:{display:'none',
    top:-100
    },
}

export const displayMenuClick = {
    hidden:{display:'none',
top:-100,
transition: {
    type: "tween",
    ease:"easeIn",
    duration: 0.5
  }
},
    show:{
        display:'initial',
        top:0,
        transition: {
            type: "spring",
            ease:"easeIn",
            duration: 0.5
          }
    }
}


export const inputDisplayClick = {
    hidden:{width:0},
    show:{
        width:"180px",
        transition: {
            type: "spring",
            ease:"easeIn",
            duration: 0.5
          }
    }
}

export const pageTransition = {
    hidden: { opacity: 0,
    x:100},
    show:{
        opacity:1,
        x:0,
        transition:{
            type: "spring",
            ease:"easeIn",
            duration:.3
        }
    },
    exit:{
        opacity: 0,
    x:100
    }
}

export const pageTransitionRegister = {
    hidden: { opacity: 0,
    x:-100},
    show:{
        opacity:1,
        x:0,
        transition:{
            type: "spring",
            ease:"easeIn",
            duration:.3
        }
    },
    exit:{
        opacity: 0,
    x:-100
    }
}

export const homePageTransition = {
    hidden: { opacity: 0,
    y:100},
    show:{
        opacity:1,
        y:0,
        transition:{
            type: "spring",
            ease:"easeIn",
            duration:.6,
            staggerChildren: 0.2,
            when: "beforeChildren",
        }
    },
    exit:{
        opacity: 0,
    y:-100
    }
}

export const miniSectionReveal = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: .4,
      },
    },
}