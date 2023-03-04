import {
  Text, 
  Stack, 
  InputGroup, 
  Input, 
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup
} from '@chakra-ui/react'

export default function Teams(props) {

  return (
    <>
      <Stack>
        <InputGroup value={props.team} onChange={e => props.setTeam(e.target.value<=9999 ? e.target.value : 9999)}>  
          <InputLeftAddon>Team #</InputLeftAddon>
          <NumberInput min={0} max={9999}>
            <NumberInputField />
          </NumberInput>
        </InputGroup>
        <InputGroup value={props.match} onChange={(e) => props.setMatch(e.target.value<=5 ? e.target.value>=0 ? e.target.value : 0 : 5)}>  
          <InputLeftAddon>Match #</InputLeftAddon>
          <NumberInput min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </InputGroup>
        <RadioGroup onChange={props.setAlliance} value={props.alliance}>
          <Stack direction="row">
            <Text>Alliance:</Text>
            <Radio value="red" colorScheme="red">Red</Radio>
            <Radio value="blue" colorScheme="blue">Blue</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
    </>
  )
}