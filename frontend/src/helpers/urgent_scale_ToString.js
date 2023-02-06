export default function urgent_scale_ToString(urgent) {
    switch (urgent){
        case 0:
          return "Less than 25%"
        case 1:
          return "Between 25% and 50%"
        case 2: 
          return "More than 50%"
        default:
          throw new Error("Unknown urgent value: " + urgent)
     }
}