// COPYRIGHT JULIAN DANS AND STUFF
import Head from 'next/head'
import { Container, Text, Tabs, Tab, TabList, TabPanels, TabPanel, Center, IconButton } from '@chakra-ui/react' 
import { Auton, Game, Score, Teams, Review } from '../components/exportScreens'
import { useState, useRef } from 'react'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { FaArrowRight } from 'react-icons/fa'
import { cowsay } from 'cowsayjs'

console.log(
  cowsay('I\'m the robotics cow!')
)

export default function Home() {
  const [team, setTeam] = useState();
  const [match, setMatch] = useState();
  const [alliance, setAlliance] = useState();
  const [zone, setZone] = useState();
  const [ltc, setLtc] = useState();
  const [conesScoredLow, setConesScoredLow] = useState(0);
  const [conesScoredMiddle, setConesScoredMiddle] = useState(0);
  const [conesScoredHigh, setConesScoredHigh] = useState(0);
  const [cubesScoredLow, setCubesScoredLow] = useState(0);
  const [cubesScoredMiddle, setCubesScoredMiddle] = useState(0);
  const [cubesScoredHigh, setCubesScoredHigh] = useState(0);
  const [dropped, setDropped] = useState(0);
  const [failed, setFailed] = useState(0);
  const [outcome, setOutcome] = useState();
  const [speed, setSpeed] = useState();
  const [defenseRating, setDefenseRating] = useState();
  const [endgame, setEndgame] = useState();

  const teamsTab = useRef();
  const toTeams = () => { teamsTab.current.click() }
  const autonTab = useRef();
  const toAuton = () => { autonTab.current.click() }
  const gameTab = useRef();
  const toGame = () => { gameTab.current.click() }
  const scoreTab = useRef();
  const toScore = () => { scoreTab.current.click() }
  const reviewTab = useRef();
  const toReview = () => { reviewTab.current.click() }

  function hotkey(event) {
    switch (event.key) {
      case 't':
        toTeams();
        break;
      case 'a':
        toAuton();
        break;
      case 'g':
        toGame();
        break;
      case 'r':
        toReview();
        break;
      case 's':
        toScore();
        break;
    }
  }

  const finalAnswer = {team, match, alliance, zone, ltc, conesScoredLow, 
    conesScoredMiddle, conesScoredHigh, cubesScoredLow, cubesScoredMiddle, 
    cubesScoredHigh, dropped, failed, outcome, speed, defenseRating}

  return (
    <>
      <Head>
        <title>FRC Scouting App 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div onKeyDown={(e) => hotkey(e)}>
        <ColorModeSwitcher justifySelf="flex-end" marginTop="2" />
        <Center>
          <Container position="fixed" top="0" zIndex={1000}>
            <Center>
              <Text
                bgGradient='linear(to-l, #db5757, #473d3d)'
                bgClip='text'
                fontSize='7xl'
                fontWeight='extrabold'
              >
                FRC Scout
              </Text>
            </Center>
            <Tabs>
              <TabList>
                <Tab ref={teamsTab}>Teams</Tab>
                <Tab ref={autonTab}>Auton</Tab>
                <Tab ref={scoreTab}>Score</Tab>
                <Tab ref={gameTab}>Game</Tab>
                <Tab ref={reviewTab}>Review</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Teams 
                    team={team} 
                    setTeam={setTeam}
                    match={match}
                    setMatch={setMatch}
                    alliance={alliance}
                    setAlliance={setAlliance}
                  />
                  <IconButton 
                    size="md"
                    fontSize="lg"
                    variant="ghost"
                    color="current"
                    icon={<FaArrowRight />}
                    onClick={toAuton}
                    marginLeft='100%'
                  />
                </TabPanel>
                <TabPanel>
                  <Auton 
                    alliance={alliance} 
                    zone={zone}
                    setZone={setZone}
                    ltc={ltc}
                    setLtc={setLtc}
                  />
                  <IconButton 
                    size="md"
                    fontSize="lg"
                    variant="ghost"
                    color="current"
                    icon={<FaArrowRight />}
                    onClick={toScore}
                    marginLeft='100%'
                  />
                </TabPanel>
                <TabPanel>
                  <Score
                    cubesScoredLow={cubesScoredLow}
                    setCubesScoredLow={setCubesScoredLow}

                    cubesScoredMiddle={cubesScoredMiddle}
                    setCubesScoredMiddle={setCubesScoredMiddle}

                    cubesScoredHigh={cubesScoredHigh}
                    setCubesScoredHigh={setCubesScoredHigh}

                    conesScoredLow={conesScoredLow}
                    setConesScoredLow={setConesScoredLow}

                    conesScoredMiddle={conesScoredMiddle}
                    setConesScoredMiddle={setConesScoredMiddle}

                    conesScoredHigh={conesScoredHigh}
                    setConesScoredHigh={setConesScoredHigh}

                    dropped={dropped}
                    setDropped={setDropped}

                    failed={failed}
                    setFailed={setFailed}

                    alliance={alliance}
                  />
                  <IconButton 
                    size="md"
                    fontSize="lg"
                    variant="ghost"
                    color="current"
                    icon={<FaArrowRight />}
                    onClick={toGame}
                    marginLeft='100%'
                  />
                </TabPanel>
                <TabPanel>
                  <Game 
                    outcome={outcome}
                    setOutcome={setOutcome}
                    speed={speed}
                    setSpeed={setSpeed}
                    defenseRating={defenseRating}
                    setDefenseRating={setDefenseRating}
                    endgame={endgame}
                    setEndgame={setEndgame}
                    alliance={alliance}
                  />
                  <IconButton 
                    size="md"
                    fontSize="lg"
                    variant="ghost"
                    color="current"
                    icon={<FaArrowRight />}
                    onClick={toReview}
                    marginLeft='100%'
                  />
                </TabPanel>
                <TabPanel>
                  <Review {...finalAnswer}/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </Center>
      </div>
    </>
  )
}
