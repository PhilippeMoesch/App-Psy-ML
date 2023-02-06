export default function home_scale_ToString(home_scale) {
    switch (home_scale){
        case 0:
          return "More than 80%"
        case 1:
          return "Between 60% and 80%"
        case 2: 
          return "Less than 60%"
        default:
          throw new Error("Unknown home_scale value: " + home_scale)
     }
}