export default function ort_v_einToString(ort_v_ein) {
    switch (ort_v_ein){
        case 0:
          return "At home"
        case 1:
          return "At home with SPITEX"
        case 2: 
          return "Care/nursing home"
        case 3:
          return "Other social-medical inst."
        case 4:
          return "Psy. clinic, other inst."
        case 5:
          return "Psy. clinic, same inst."
        case 6:
          return "Other hospital"
        case 7:
          return "Acute care ward, same inst."
        case 8:
          return "Correctional facilitiy"
        case 9:
          return "other"
        case 10:
          return "rehab., other inst."
        case 11:
          return "rehab, same inst."
        case 12:
          return "Unknown"
        default:
          throw new Error("Unknown ort_v_ein value: " + ort_v_ein)
     }
}