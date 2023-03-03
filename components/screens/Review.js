import { Text, Button } from '@chakra-ui/react'
// const jsonexport = require('jsonexport/dist');
let converter = require('json-2-csv');
const download = require('in-browser-download');

export default function Review(props) {


  return (
    <>
      <Text>Team: {props.team}</Text>
      <Text>Match: {props.match}</Text>
      <Text>Alliance: {props.alliance != undefined ?'\'':''}{props.alliance}{props.alliance != undefined ?'\'':''}</Text>
      <Text>Zone: {props.zone}</Text>
      <Text>Leave The Community? {props.ltc != undefined ?'\'':''}{props.ltc}{props.ltc != undefined ?'\'':''}</Text>
      <Text>Auton Parking: {props.autonParking != undefined ?'\'':''}{props.autonParking}{props.autonParking != undefined ?'\'':''} </Text>
      <Text>Auton Cubes Scored Low: {props.autonCubesScoredLow}</Text>
      <Text>Auton Cubes Scored Middle: {props.autonCubesScoredMiddle}</Text>
      <Text>Auton Cubes Scored High: {props.autonCubesScoredHigh}</Text>
      <Text>Auton Cones Scored Low: {props.autonConesScoredLow}</Text>
      <Text>Auton Cones Scored Middle: {props.autonConesScoredMiddle}</Text>
      <Text>Auton Cones Scored High: {props.autonConesScoredHigh}</Text>
      <Text>Teleop Cubes Scored Low: {props.teleopCubesScoredLow}</Text>
      <Text>Teleop Cubes Scored Middle: {props.teleopCubesScoredMiddle}</Text>
      <Text>Teleop Cubes Scored High: {props.teleopCubesScoredHigh}</Text>
      <Text>Teleop Cones Scored Low: {props.teleopConesScoredLow}</Text>
      <Text>Teleop Cones Scored Middle: {props.teleopConesScoredMiddle}</Text>
      <Text>Teleop Cones Scored High: {props.teleopConesScoredHigh}</Text>
      <Text>Number Dropped: {props.dropped}</Text>
      <Text>Number Failed: {props.failed}</Text>
      <Text>Outcome: {props.outcome != undefined ?'\'':''}{props.outcome}{props.outcome != undefined ?'\'':''}</Text>
      <Text>Speed: {props.speed != undefined ?'\'':''}{props.speed}{props.speed != undefined ?'\'':''}</Text>
      <Text>Defense Rating: {props.defenseRating}</Text>
      <Text>Endgame Parking: {props.endgameParking != undefined ?'\'':''}{props.endgameParking}{props.endgameParking != undefined ?'\'':''} </Text>
      <br />
      <Button onClick={() => {
        converter.json2csv(props, (err, csv) => {
          download( csv, 'Match' + props.match + '_Team' + props.team + '.csv' )
        })
      }
      }>Download as CSV</Button>
    </>
  )
}