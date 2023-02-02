import { Text, Radio, RadioGroup, Stack, Select } from '@chakra-ui/react'

export default function Game(props) {
  return (
    <>
      <RadioGroup onChange={props.setOutcome} value={props.outcome}>
        <Stack direction="row">
          <Text>Outcome:</Text>
          <Radio value={'win'}>Win</Radio>
          <Radio value={'loss'}>Loss</Radio>
          <Radio value={'tie'}>Tie</Radio>
        </Stack>        
      </RadioGroup>
      <RadioGroup onChange={props.setSpeed} value={props.speed}>
        <Stack direction="row">
          <Text>Speed:</Text>
          <Radio value={'slow'}>Slow</Radio>
          <Radio value={'medium'}>Medium</Radio>
          <Radio value={'fast'}>Fast</Radio>
        </Stack>        
      </RadioGroup>
      <RadioGroup onChange={props.setDefenseRating} value={props.defenseRating}>
        <Stack direction="row">
          <Text>Rate the Defense:</Text>
          <Radio value={'1'}>1</Radio>
          <Radio value={'2'}>2</Radio>
          <Radio value={'3'}>3</Radio>
          <Radio value={'4'}>4</Radio>
        </Stack>
      </RadioGroup>
      <Select placeholder="Endgame" value={props.endgame} onClick={props.setEndgame}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
      </Select>
    </>
  )
}