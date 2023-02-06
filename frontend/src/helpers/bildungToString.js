export default function BildungToString(bildung) {
    switch (bildung){
        case 1:
          return "No school education"
        case 2:
          return "Obligatory school"
        case 3: 
          return "Apprenticeship"
        case 4:
          return "Matura"
        case 5:
          return "Higher professional/specialized school"
        case 6:
          return "University"
        case 9:
          return "Unknown"
        default:
          throw new Error("Unknown bildung value: " + bildung)
     }
}