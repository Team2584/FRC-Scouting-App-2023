import { Text, Button } from '@chakra-ui/react'
// const jsonexport = require('jsonexport/dist');
let converter = require('json-2-csv');
const download = require('in-browser-download');

export default function Review(props) {


  return (
    <>
      <Text>Team: {props.team}</Text>
      <Text>Match: {props.match}</Text>
      <Text>Alliance: '{props.alliance}'</Text>
      <Text>Zone: {props.zone}</Text>
      <Text>Leave The Community? '{props.ltc}'</Text>
      <Text>Cubes Scored Low: {props.cubesScoredLow}</Text>
      <Text>Cubes Scored Middle: {props.cubesScoredMiddle}</Text>
      <Text>Cubes Scored High: {props.cubesScoredHigh}</Text>
      <Text>Cones Scored Low: {props.conesScoredLow}</Text>
      <Text>Cones Scored Middle: {props.conesScoredMiddle}</Text>
      <Text>Cones Scored High: {props.conesScoredHigh}</Text>
      <Text>Number Dropped: {props.dropped}</Text>
      <Text>Number Failed: {props.failed}</Text>
      <Text>Outcome: '{props.outcome}'</Text>
      <Text>Speed: '{props.speed}'</Text>
      <Text>Defense Rating: {props.defenseRating}</Text>
      <br />
      <Button onClick={() => {
        converter.json2csv(props, (err, csv) => {
          download(csv,'data.csv')
        })
      }
      }>Download as CSV</Button>
    </>
  )
}