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
                <NumberInput min={0} max={6} defaultValue={0} value={props.cubesScoredLow} onChange={props.setCubesScoredLow}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
              <Td>
              <NumberInput min={0} max={6} defaultValue={0} value={props.cubesScoredMiddle} onChange={props.setCubesScoredMiddle}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </Td>
              <Td>
              <NumberInput min={0} max={9} defaultValue={0} value={props.cubesScoredHigh} onChange={props.setCubesScoredHigh}>
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
              <NumberInput min={0} max={9} defaultValue={0} value={props.conesScoredLow} onChange={props.setConesScoredLow}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </Td>
              <Td>
              <NumberInput min={0} max={3} defaultValue={0} value={props.conesScoredMiddle} onChange={props.setConesScoredMiddle}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>  
              </Td>
              <Td>
              <NumberInput min={0} max={6} defaultValue={0} value={props.conesScoredHigh} onChange={props.setConesScoredHigh}>
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
      <Text>Dropped:</Text>
      <NumberInput min={0} defaultValue={0} value={props.dropped} onChange={props.setDropped}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <br />
      <Text>Failed:</Text>
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