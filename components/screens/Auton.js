import { 
  Text, 
  Radio, 
  RadioGroup, 
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'
import Image from 'next/image'
import redPlaceholder from '../../public/red-placeholder.jpeg'
import bluePlaceholder from '../../public/blue-placeholder.jpeg'
import greyPlaceholder from '../../public/grey-placeholder.jpeg'
import locations from '../../public/locations.png'


export default function Auton(props) {
  return (
    <>
      <Stack>
        <Image 
          src={locations} 
          alt={props.alliance == 'blue' ? "Blue Alliance" : props.alliance == 'red' ? "Red Alliance" : "Choose an Alliance"} 
        />

        <RadioGroup onChange={props.setZone} value={props.zone}>
          <Stack direction="row">
            <Text>Zone:</Text>
            <Radio 
              value={'1'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >1</Radio>
            <Radio 
              value={'2'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >2</Radio>
            <Radio 
              value={'3'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >3</Radio>
            <Radio 
              value={'4'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >4</Radio>
          </Stack>
        </RadioGroup>
        <RadioGroup onChange={props.setLtc} value={props.ltc}>
          <Stack direction="row">
            <Text>Leave the Community?</Text>
            <Radio
              value={'yes'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >
              Yes
            </Radio>
            <Radio
              value={'no'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >
              No
            </Radio>
          </Stack>
        </RadioGroup>
        <RadioGroup onChange={props.setAutonParking} value={props.autonParking}>
          <Stack direction="row">
            <Text>Parking:</Text>
            <Radio
              value={'Parked With Balancing'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >
              Balanced
            </Radio>
            <Radio
              value={'Parked Without Balancing'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >
              Unbalanced
            </Radio>
            <Radio
              value={'Failed'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >
              Failed
            </Radio>
            <Radio
              value={'Not Attempted'} 
              isDisabled={props.alliance == 'blue' ? false : !(props.alliance == 'red')}
              colorScheme={props.alliance == 'red' ? 'red' : 'blue'}
            >
              Not Attempted
            </Radio>
          </Stack>
        </RadioGroup>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th>Low</Th>
                <Th>Medium</Th>
                <Th>High</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Cube</Td>
                <Td>
                  <NumberInput min={0} max={10} defaultValue={0} value={props.autonCubesScoredLow} onChange={props.setAutonCubesScoredLow}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td>
                <NumberInput min={0} max={10} defaultValue={0} value={props.autonCubesScoredMiddle} onChange={props.setAutonCubesScoredMiddle}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                </Td>
                <Td>
                <NumberInput min={0} max={10} defaultValue={0} value={props.autonCubesScoredHigh} onChange={props.setAutonCubesScoredHigh}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>  
                </Td>
              </Tr>
              <Tr>
                <Td>Cone</Td>
                <Td>
                <NumberInput min={0} max={10} defaultValue={0} value={props.autonConesScoredLow} onChange={props.setAutonConesScoredLow}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                </Td>
                <Td>
                <NumberInput min={0} max={10} defaultValue={0} value={props.autonConesScoredMiddle} onChange={props.setAutonConesScoredMiddle}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>  
                </Td>
                <Td>
                <NumberInput min={0} max={10} defaultValue={0} value={props.autonConesScoredHigh} onChange={props.setAutonConesScoredHigh}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  )
}