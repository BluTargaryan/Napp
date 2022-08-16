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
            duration: 0.5
          }
    }
}

export const displayMenuClick = {
    hidden:{display:'none',
top:-100,
transition: {
    duration: 0.5
  }
},
    show:{
        display:'initial',
        top:0,
        transition: {
            duration: 0.5
          }
    }
}


export const inputDisplayClick = {
    hidden:{width:0},
    show:{
        width:"180px",
        transition: {
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
            ease:"easeIn",
            duration:.3
        }
    },
    exit:{
        opacity: 0,
    x:-100
    }
}