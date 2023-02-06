
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import geschl_ToString from './geschl_ToString';
import ort_v_einToString from './ort_v_einToString';
import mapOccupationToValue from './mapOccupationToValue';
import ein_artToString from './ein_artToString';
import einw_instToString from './einw_instToString';
import BildungToString from './bildungToString';
import zivilstandToString from './zivilstandToString';
import dropout_pb_toString from './dropoutpbToString';
import dropout_ph_ToString from './dropout_ph_ToString';
import home_scale_ToString from './home_scale_toString';
import F2_scale_ToString from './F2_scale_toString';
import urgent_scale_ToString from './urgent_scale_ToString';



export const renderRowSubComponent = (row) => {

    let mappedValues = {
        a0: row.original['ffe'],
        a1: ort_v_einToString(row.original['ort_v_ein']),
        a2: ein_artToString(row.original['ein_art']),
        a3: einw_instToString(row.original['einw_inst']),
        a4: geschl_ToString(row.original['geschl']), 
        a5: row.original['alter'],
        a6: BildungToString(row.original['bildung']),
        a7: zivilstandToString(row.original['zivilstand']),
        a8: mapOccupationToValue(row.original),
        a9: dropout_pb_toString(row.original['dropout_pb_ein']),
        a10: dropout_ph_ToString(row.original['dropout_ph_ein']),
        a11: home_scale_ToString(row.original['home_scale']),
        a12: F2_scale_ToString(row.original['F2_scale']),
        a13: urgent_scale_ToString(row.original['urgent']),
        a14: row.original['fm_sum'],
        a15: row.original['comment']
    }
   

    return (
      <Card style={{ width: '25rem', margin: '0 auto' }}>
        <CardBody>
          <CardTitle>
            <strong>Additional data</strong>
            <hr></hr>
          </CardTitle>
          <CardText>
            <strong>Forced admission</strong>: {mappedValues.a0} <br />
            <strong>Prior location</strong>: {mappedValues.a1} <br />
            <strong>Admission detail</strong>: {mappedValues.a2} <br />
            <strong>Referral authority</strong>: {mappedValues.a3} <br />
            <hr></hr>
            <strong>Gender</strong>: {mappedValues.a4} <br />
            <strong>Age</strong>: {mappedValues.a5} <br />
            <strong>Education</strong>: {mappedValues.a6} <br />
            <strong>Civil Status</strong>: {mappedValues.a7} <br />
            <strong>Employment</strong>: {mappedValues.a8} <br />
            <hr></hr>
            <strong>Dropout BSCL</strong>: {mappedValues.a9} <br />
            <strong>Dropout HoNOS</strong>: {mappedValues.a10} <br />
            <hr></hr>
            <strong>% home transfers</strong>: {mappedValues.a11} <br />
            <strong>% F2 diagn.</strong>: {mappedValues.a12} <br />
            <strong>% urgent admissions</strong>: {mappedValues.a13} <br />
            <strong>Prior coercions</strong>: {mappedValues.a14} <br />
            <hr></hr>
            <strong>Comment</strong>: <br /> {mappedValues.a15} <br />
          </CardText>
        </CardBody>
      </Card>
    );
  };