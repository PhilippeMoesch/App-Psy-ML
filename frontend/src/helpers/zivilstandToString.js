export default function ZivilstandToString(zivilstand) {
    switch (zivilstand){
        case 1:
          return "Single"
        case 2:
          return "Married, living together"
        case 3: 
          return "Married, living separated"
        case 4:
          return "Widowed"
        case 5:
          return "Divorced"
        case 9:
          return "Unknown"
        default:
          throw new Error("Unknown zivilstand value: " + zivilstand)
     }
}