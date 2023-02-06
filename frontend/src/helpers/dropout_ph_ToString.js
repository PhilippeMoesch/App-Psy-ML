export default function dropout_ph_ToString(dropout_ph_ein) {
    switch (dropout_ph_ein){
        case 0:
          return "No dropout"
        case 1:
          return "Discharged within 7 days"
        case 2: 
          return "Other"
        case 9:
          return "Unknown"
        default:
          throw new Error("Unknown dropout_ph_ein value: " + dropout_ph_ein)
    }
}