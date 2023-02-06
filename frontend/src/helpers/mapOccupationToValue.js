export default function mapOccupationToValue(original) {
    let ret = "";

    if (original['besch_voll']) {
        ret = concatStringIfEmpty(ret, "In full-time employement");
      }
      if (original['besch_teil']) {
        ret = concatStringIfEmpty(ret, "In part-time employement")
      }
      if (original['besch_haus']) {
        ret = concatStringIfEmpty(ret, "Works at home")
      }
      if (original['besch_ausb']) {
        ret = concatStringIfEmpty(ret, "Following an education")
      }
      if (original['besch_reha']) {
        ret = concatStringIfEmpty(ret, "In rehabilitation")
      }
      if (original['besch_gesch']) {
        ret = concatStringIfEmpty(ret, "Protected workplace")
      }
      if (original['besch_iv_ahv']) {
        ret = concatStringIfEmpty(ret, "On disability")
      }
      if (original['besch_nicht']) {
        ret = concatStringIfEmpty(ret, "Does not have an occupation")
      }
      if (original['besch_unbek']) {
        ret = concatStringIfEmpty(ret, "Unknown")
      }

      return ret;
}


function concatStringIfEmpty(ret, string) {
    /*if(a8) {
        string.toLowerCase();
        a8 = a8 + ", " + string;
    }*/
    return (ret && ret.concat(", ")).concat(string);
}


