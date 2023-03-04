import { 
  Text,
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
  NumberDecrementStepper,
} from '@chakra-ui/react'
import NumImp from '../NumImp'

export default function Score(props) {
  return (
    <>
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
                <NumberInput min={0} max={10} defaultValue={0} value={props.teleopCubesScoredLow} onChange={props.setTeleopCubesScoredLow} style={{}}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
              <Td>
              <NumberInput min={0} max={10} defaultValue={0} value={props.teleopCubesScoredMiddle} onChange={props.setTeleopCubesScoredMiddle}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </Td>
              <Td>
              <NumberInput min={0} max={10} defaultValue={0} value={props.teleopCubesScoredHigh} onChange={props.setTeleopCubesScoredHigh}>
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
              <NumberInput min={0} max={10} defaultValue={0} value={props.teleopConesScoredLow} onChange={props.setTeleopConesScoredLow}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </Td>
              <Td>
              <NumberInput min={0} max={10} defaultValue={0} value={props.teleopConesScoredMiddle} onChange={props.setTeleopConesScoredMiddle}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>  
              </Td>
              <Td>
              <NumberInput min={0} max={10} defaultValue={0} value={props.teleopConesScoredHigh} onChange={props.setTeleopConesScoredHigh}>
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
      <br />
      <Text>Dropped on way to Score:</Text>
      <NumberInput min={0} defaultValue={0} value={props.dropped} onChange={props.setDropped}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <br />
      <Text>Failed while Placing:</Text>
      <NumberInput min={0} defaultValue={0} value={props.failed} onChange={props.setFailed}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  )
}