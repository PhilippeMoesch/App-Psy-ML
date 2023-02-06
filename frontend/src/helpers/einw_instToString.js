export default function einw_instToString(einw_inst) {
    switch (einw_inst){
        case 1:
          return "His/herself / relatives"
        case 2:
          return "Rescue services"
        case 3: 
          return "Doctor"
        case 4:
          return "Non-medical therapist"
        case 5:
          return "Social/medical service"
        case 6:
          return "Justice authorities"
        case 8:
          return "Other"
        case 9:
          return "Unknown"
        default:
          throw new Error("Unknown einw_inst value: " + einw_inst)
     }
}