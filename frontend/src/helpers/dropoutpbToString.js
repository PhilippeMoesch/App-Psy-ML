export default function dropout_pb_toString(dropout_pb_ein) {
    switch (dropout_pb_ein){
        case 0:
          return "No dropout"
        case 1:
          return "Patient refusal"
        case 2: 
          return "Language issues"
        case 3:
          return "Too ill"
        case 4:
          return "Deceased"
        case 6:
          return "Discharged within 7 days"
        case 7:
          return "Unplanned discharge"
        case 9:
          return "Unknown"
        default:
          throw new Error("Unknown dropout_pb_ein value: " + dropout_pb_ein)
     }
}