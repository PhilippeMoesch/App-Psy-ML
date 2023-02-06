export default function ein_artToString(ein_art) {
    switch (ein_art){
        case 1:
          return "Emergency"
        case 2:
          return "Announced/planned"
        case 3: 
          return "Child birth"
        case 4:
          return "Internal transfer"
        case 5:
          return "Transfered within 24h"
        case 8:
          return "Other"
        case 9:
          return "Unknown"
        default:
          throw new Error("Unknown ein_art value: " + ein_art)
     }
}