export default function F2_scale_ToString(F2_scale) {
    switch (F2_scale){
        case 0:
          return "Less than 20%"
        case 1:
          return "More than 20%"
        default:
          throw new Error("Unknown F2_scale value: " + F2_scale)
     }
}