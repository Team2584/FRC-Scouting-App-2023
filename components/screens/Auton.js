import { Text, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import redPlaceholder from '../../public/red-placeholder.jpeg'
import bluePlaceholder from '../../public/blue-placeholder.jpeg'
import greyPlaceholder from '../../public/grey-placeholder.jpeg'


export default function Auton(props) {
  return (
    <>
      <Stack>
        <Image 
          src={props.alliance == 'blue' ? bluePlaceholder : props.alliance == 'red' ? redPlaceholder : greyPlaceholder} 
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
      </Stack>
    </>
  )
}