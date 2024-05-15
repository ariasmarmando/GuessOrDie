import './App.css'
import Dots from './Dots.jsx'
import InputDisplay from "./InputDisplay.jsx";
import StatusBar from "./StatusBar.jsx";
import React, {useRef, useState} from "react";
import Dice from "./Dice.jsx";
import CorrectIndicator from "./CorrectIndicator.jsx";
import bgAudio from "./gameResources/threshold-michael-grubb-main-version-25748-02-03.mp3"
import swordEffect from "./gameResources/swing-whoosh-5-198498.mp3"
import {faCircleQuestion} from "@fortawesome/free-solid-svg-icons/faCircleQuestion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PlayButton from "./PlayButton.jsx";

function App() {
    const [level, setLevel] = useState(1)
    const [guess, setGuess] = useState();
    const [playerHealth, setPlayerHealth] = useState(100)
    const [consoleHealth, setConsoleHealth] = useState(100)
    const [prevDice, setPrevDice] = useState(<FontAwesomeIcon icon={faCircleQuestion} />);
    const [prevGuess, setPrevGuess] = useState();
    const [correct, setCorrect] = useState();
    const [tempCorrect, setTempCorrect] = useState();
    const [lostScreen, setLostScreen] = useState();
    const [gameStarter, setGameStarter] = useState(false);
    {/*Sound*/}
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const handleTogglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        togglePlay(); // Call the togglePlay function from props
    };
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    {/*sound end=-----------------------------*/}
    function movementAnimator(){
        setTimeout(function() { //Start the timer
            setTempCorrect("") //After 1 second, set render to true
        }.bind(this), 1000)
    }
    function gameStart(){
        handleTogglePlay()
        setGameStarter(true)

    }
    function nextLevel(){
        level === 1? setLevel(2) : level === 2? setLevel(3) :level === 3? setLevel(4) : null;
        setConsoleHealth(100);
        setPlayerHealth(100);
        setGuess("");
        setPrevGuess("");
    }
const levels = [Math.floor(Math.random() * 2) + 1,Math.floor(Math.random() * 3) + 1,Math.floor(Math.random() * 4) + 1,Math.floor(Math.random() * 5) + 1]
    function handleSubmit(e){
        let dice = levels[level-1];
        setPrevDice(dice);
        setPrevGuess(guess);
        e.preventDefault();
        if(dice == guess) { {/*Do not use === here*/}
            setConsoleHealth(consoleHealth - 10)
            setCorrect(true)
            setTempCorrect(true);
            movementAnimator();
        } else {
            if(playerHealth===10){
                setLostScreen(true);
            }
            setPlayerHealth(playerHealth - 10)
            setCorrect(false)
            setTempCorrect(false);
            movementAnimator();
        }
        setGuess("")
    }
    const onChange = (e) =>{
        let value = e.target.value;
        if(isNaN(guess)){
            setGuess(0)
        }
        if(guess > 10){
            setGuess(0)
        }
        setGuess(value)

    }
function pageRefresh(){
    window.location.href = window.location.href;
}

    return (
        <>
            <div className={"entireGame"}>
                <div className={'lostScreen'} style={{display: `${lostScreen === true ? 'block' : 'none'}`}}>
                    <div className={'lostScreenInner'}>
                        <h1>You Lost</h1>
                        <button onClick={pageRefresh}>RESTART</button>
                    </div>
                </div>
                <div className={'gameStarter'} style={{display: `${gameStarter === false ? 'block' : 'none'}`}}>
                    <div className={'gameStarterInner'}>
                        <p>START GAME</p>
                        <button onClick={gameStart}>START</button>
                    </div>
                </div>
                <div className={'gameStarter'} style={{display: `${consoleHealth === 0 ? 'block' : 'none'}`}}>
                    <div className={'gameStarterInner'}>
                        <p>Great Job!</p>
                        <button onClick={nextLevel}>NEXT LEVEL</button>
                    </div>
                </div>
                <div className={'gameStarter'} style={{display: `${(level === 4) && (consoleHealth === 0) ? 'block' : 'none'}`}}>
                    <div className={'gameStarterInner'}>
                        <p>You Won!</p>
                        <button onClick={pageRefresh}>PLAY AGAIN</button>
                    </div>
                </div>
                <CorrectIndicator
                    correct={correct}
                />
                <Dice prevDice={prevDice}
                />
                <StatusBar
                    playerHealth={playerHealth}
                    consoleHealth={consoleHealth}
                    level={level}
                />
                <Dots
                    answerCheck={tempCorrect}
                    guess={prevGuess}
                    level={level}
                />
                <InputDisplay
                    guess={guess}
                    handleSubmit={handleSubmit}
                    onChange={onChange}
                />
                <PlayButton
                    mp3Url={bgAudio}
                    handleTogglePlay={handleTogglePlay}
                    isPlaying={isPlaying}
                    togglePlay={togglePlay}
                    audioRef={audioRef}
                />
            </div>
        </>
    );
}

export default App;
