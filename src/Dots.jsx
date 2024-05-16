import React from "react";
import {useEffect, useState} from "react";
import './App.css';

import MainCharIdle1 from './gameResources/mainChar/mainCharIddle1.svg';
import MainCharIdle2 from './gameResources/mainChar/mainCharIddle2.svg';
import MainCharIdle3 from './gameResources/mainChar/mainCharIddle3.svg';
import MainCharIdle4 from './gameResources/mainChar/mainCharIddle4.svg';
import MainCharIdle5 from './gameResources/mainChar/mainCharIddle5.svg';
import MainCharIdle6 from './gameResources/mainChar/mainCharIddle6.svg';
import MainCharAtt1 from './gameResources/mainChar/mainCharAtt1.svg';
import MainCharAtt2 from './gameResources/mainChar/mainCharAtt2.svg';
import MainCharAtt3 from './gameResources/mainChar/mainCharAtt3.svg';
import MainCharAtt4 from './gameResources/mainChar/mainCharAtt4.svg';
import MainCharAtt5 from './gameResources/mainChar/mainCharAtt5.svg';
import MainCharAtt6 from './gameResources/mainChar/mainCharAtt6.svg';
import MainCharDmg1 from './gameResources/mainChar/mainCharDmg1.svg';
import MainCharDmg2 from './gameResources/mainChar/mainCharDmg2.svg';
import MainCharDmg3 from './gameResources/mainChar/mainCharDmg3.svg';
import MainCharDmg4 from './gameResources/mainChar/mainCharDmg4.svg';
import MainCharDmg5 from './gameResources/mainChar/mainCharDmg5.svg';
import MainCharDmg6 from './gameResources/mainChar/mainCharDmg6.svg';

import EnemyOneIdle1 from './gameResources/enemyOne/enemy1Iddle1.svg';
import EnemyOneIdle2 from './gameResources/enemyOne/enemy1Iddle2.svg';
import EnemyOneIdle3 from './gameResources/enemyOne/enemy1Iddle3.svg';
import EnemyOneIdle4 from './gameResources/enemyOne/enemy1Iddle4.svg';
import EnemyOneIdle5 from './gameResources/enemyOne/enemy1Iddle5.svg';
import EnemyOneIdle6 from './gameResources/enemyOne/enemy1Iddle6.svg';
import EnemyOneDmg1 from './gameResources/enemyOne/enemyOneDmg1.svg';
import EnemyOneDmg2 from './gameResources/enemyOne/enemyOneDmg2.svg';
import EnemyOneDmg3 from './gameResources/enemyOne/enemyOneDmg3.svg';
import EnemyOneDmg4 from './gameResources/enemyOne/enemyOneDmg4.svg';
import EnemyOneDmg5 from './gameResources/enemyOne/enemyOneDmg5.svg';
import EnemyOneDmg6 from './gameResources/enemyOne/enemyOneDmg6.svg';
import EnemyOneAtt1 from './gameResources/enemyOne/enemyOneAtt1.svg';
import EnemyOneAtt2 from './gameResources/enemyOne/enemyOneAtt2.svg';
import EnemyOneAtt3 from './gameResources/enemyOne/enemyOneAtt3.svg';
import EnemyOneAtt4 from './gameResources/enemyOne/enemyOneAtt4.svg';
import EnemyOneAtt5 from './gameResources/enemyOne/enemyOneAtt5.svg';
import EnemyOneAtt6 from './gameResources/enemyOne/enemyOneAtt6.svg';

import EnemyTwoIdle1 from './gameResources/enemyTwo/enemyTwoIddle1.svg';
import EnemyTwoIdle2 from './gameResources/enemyTwo/enemyTwoIddle2.svg';
import EnemyTwoIdle3 from './gameResources/enemyTwo/enemyTwoIddle3.svg';
import EnemyTwoIdle4 from './gameResources/enemyTwo/enemyTwoIddle4.svg';
import EnemyTwoIdle5 from './gameResources/enemyTwo/enemyTwoIddle5.svg';
import EnemyTwoIdle6 from './gameResources/enemyTwo/enemyTwoIddle6.svg';
import EnemyTwoAtt1 from './gameResources/enemyTwo/enemyTwoAtt1.svg';
import EnemyTwoAtt2 from './gameResources/enemyTwo/enemyTwoAtt2.svg';
import EnemyTwoAtt3 from './gameResources/enemyTwo/enemyTwoAtt3.svg';
import EnemyTwoAtt4 from './gameResources/enemyTwo/enemyTwoAtt4.svg';
import EnemyTwoAtt5 from './gameResources/enemyTwo/enemyTwoAtt5.svg';
import EnemyTwoAtt6 from './gameResources/enemyTwo/enemyTwoAtt6.svg';
import EnemyTwoDmg1 from './gameResources/enemyTwo/enemyTwoDmg1.svg';
import EnemyTwoDmg2 from './gameResources/enemyTwo/enemyTwoDmg2.svg';
import EnemyTwoDmg3 from './gameResources/enemyTwo/enemyTwoDmg3.svg';
import EnemyTwoDmg4 from './gameResources/enemyTwo/enemyTwoDmg4.svg';
import EnemyTwoDmg5 from './gameResources/enemyTwo/enemyTwoDmg5.svg';
import EnemyTwoDmg6 from './gameResources/enemyTwo/enemyTwoDmg6.svg';

import EnemyThreeIdle1 from './gameResources/enemyThree/enemyThreeIdle1.svg';
import EnemyThreeIdle2 from './gameResources/enemyThree/enemyThreeIdle2.svg';
import EnemyThreeIdle3 from './gameResources/enemyThree/enemyThreeIdle3.svg';
import EnemyThreeIdle4 from './gameResources/enemyThree/enemyThreeIdle4.svg';
import EnemyThreeIdle5 from './gameResources/enemyThree/enemyThreeIdle5.svg';
import EnemyThreeIdle6 from './gameResources/enemyThree/enemyThreeIdle6.svg';
import EnemyThreeAtt1 from './gameResources/enemyThree/enemyThreeAtt1.svg';
import EnemyThreeAtt2 from './gameResources/enemyThree/enemyThreeAtt2.svg';
import EnemyThreeAtt3 from './gameResources/enemyThree/enemyThreeAtt3.svg';
import EnemyThreeAtt4 from './gameResources/enemyThree/enemyThreeAtt4.svg';
import EnemyThreeAtt5 from './gameResources/enemyThree/enemyThreeAtt5.svg';
import EnemyThreeAtt6 from './gameResources/enemyThree/enemyThreeAtt6.svg';
import EnemyThreeDmg1 from './gameResources/enemyThree/enemyThreeDmg1.svg';
import EnemyThreeDmg2 from './gameResources/enemyThree/enemyThreeDmg2.svg';
import EnemyThreeDmg3 from './gameResources/enemyThree/enemyThreeDmg3.svg';
import EnemyThreeDmg4 from './gameResources/enemyThree/enemyThreeDmg4.svg';
import EnemyThreeDmg5 from './gameResources/enemyThree/enemyThreeDmg5.svg';
import EnemyThreeDmg6 from './gameResources/enemyThree/enemyThreeDmg6.svg';
import EnemyFourIdle1 from './gameResources/enemyFour/enemyFourIdle1.svg';
import EnemyFourIdle2 from './gameResources/enemyFour/enemyFourIdle2.svg';
import EnemyFourIdle3 from './gameResources/enemyFour/enemyFourIdle3.svg';
import EnemyFourIdle4 from './gameResources/enemyFour/enemyFourIdle4.svg';
import EnemyFourIdle5 from './gameResources/enemyFour/enemyFourIdle5.svg';
import EnemyFourIdle6 from './gameResources/enemyFour/enemyFourIdle6.svg';
import EnemyFourAtt1 from './gameResources/enemyFour/enemyFourIAtt1.svg';
import EnemyFourAtt2 from './gameResources/enemyFour/enemyFourIAtt2.svg';
import EnemyFourAtt3 from './gameResources/enemyFour/enemyFourIAtt3.svg';
import EnemyFourAtt4 from './gameResources/enemyFour/enemyFourIAtt4.svg';
import EnemyFourAtt5 from './gameResources/enemyFour/enemyFourIAtt5.svg';
import EnemyFourAtt6 from './gameResources/enemyFour/enemyFourIAtt6.svg';
import EnemyFourDmg1 from './gameResources/enemyFour/enemyFourDmg1.svg';
import EnemyFourDmg2 from './gameResources/enemyFour/enemyFourDmg2.svg';
import EnemyFourDmg3 from './gameResources/enemyFour/enemyFourDmg3.svg';
import EnemyFourDmg4 from './gameResources/enemyFour/enemyFourDmg4.svg';
import EnemyFourDmg5 from './gameResources/enemyFour/enemyFourDmg5.svg';
import EnemyFourDmg6 from './gameResources/enemyFour/enemyFourDmg6.svg';
export default function Dots(props){

    const [index, setIndex] = useState(0);
    const mainCharacterIdle = [MainCharIdle1,MainCharIdle2,MainCharIdle3,MainCharIdle4,MainCharIdle5,MainCharIdle6];
    const mainCharacterAtt = [MainCharAtt1,MainCharAtt2,MainCharAtt3,MainCharAtt4,MainCharAtt5,MainCharAtt6];
    const MainCharDmg = [MainCharDmg1,MainCharDmg2,MainCharDmg3,MainCharDmg4,MainCharDmg5,MainCharDmg6];

    const EnemyOneIdle = [EnemyOneIdle1,EnemyOneIdle2,EnemyOneIdle3,EnemyOneIdle4,EnemyOneIdle5,EnemyOneIdle6];
    const EnemyOneAtt = [EnemyOneAtt1,EnemyOneAtt2,EnemyOneAtt3,EnemyOneAtt4,EnemyOneAtt5,EnemyOneAtt6];
    const enemyOneDmg = [EnemyOneDmg1,EnemyOneDmg2,EnemyOneDmg3,EnemyOneDmg4,EnemyOneDmg5,EnemyOneDmg6];

    const EnemyTwoIdle = [EnemyTwoIdle1,EnemyTwoIdle2,EnemyTwoIdle3,EnemyTwoIdle4,EnemyTwoIdle5,EnemyTwoIdle6];
    const EnemyTwoAtt = [EnemyTwoAtt1,EnemyTwoAtt2,EnemyTwoAtt3,EnemyTwoAtt4,EnemyTwoAtt5,EnemyTwoAtt6];
    const EnemyTwoDmg = [EnemyTwoDmg1,EnemyTwoDmg2,EnemyTwoDmg3,EnemyTwoDmg4,EnemyTwoDmg5,EnemyTwoDmg6];

    const EnemyThreeIdle = [EnemyThreeIdle1,EnemyThreeIdle2,EnemyThreeIdle3,EnemyThreeIdle4,EnemyThreeIdle5,EnemyThreeIdle6];
    const EnemyThreeAtt = [EnemyThreeAtt1,EnemyThreeAtt2,EnemyThreeAtt3,EnemyThreeAtt4,EnemyThreeAtt5,EnemyThreeAtt6];
    const EnemyThreeDmg = [EnemyThreeDmg1,EnemyThreeDmg2,EnemyThreeDmg3,EnemyThreeDmg4,EnemyThreeDmg5,EnemyThreeDmg6];

    const EnemyFourIdle = [EnemyFourIdle1,EnemyFourIdle2,EnemyFourIdle3,EnemyFourIdle4,EnemyFourIdle5,EnemyFourIdle6];
    const EnemyFourAtt = [EnemyFourAtt1,EnemyFourAtt2,EnemyFourAtt3,EnemyFourAtt4,EnemyFourAtt5,EnemyFourAtt6];
    const EnemyFourDmg = [EnemyFourDmg1,EnemyFourDmg2,EnemyFourDmg3,EnemyFourDmg4,EnemyFourDmg5,EnemyFourDmg6];

    let t;
    useEffect(() => {
        clearTimeout(t);
        t =setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === mainCharacterIdle.length - 1 ? 0 : prevIndex + 1
                ),
            150

        );
        return () => {};
    }, [index]);

    const mainCharState = {
        idle: mainCharacterIdle,
        attack: mainCharacterAtt,
        dmg: MainCharDmg,
    }
    const enemyOneCharState = {
        idle: EnemyOneIdle,
        attack: EnemyOneAtt,
        dmg: enemyOneDmg,
    }
    const enemyTwoCharState = {
        idle: EnemyTwoIdle,
        attack: EnemyTwoAtt,
        dmg: EnemyTwoDmg,
    }
    const enemyThreeCharState = {
        idle: EnemyThreeIdle,
        attack: EnemyThreeAtt,
        dmg: EnemyThreeDmg,
    }
    const enemyFourCharState = {
        idle: EnemyFourIdle,
        attack: EnemyFourAtt,
        dmg: EnemyFourDmg,
    }


    const floors = [
        "src/gameResources/floorOption1.svg",
        'src/gameResources/floorOption2.svg',
        'src/gameResources/floorOption3.svg',
        'src/gameResources/floorOption4.svg'
    ];
    const backgrounds = [
        "src/gameResources/scene1.svg",
        "src/gameResources/scene2.svg",
        "src/gameResources/scene3.svg",
        "src/gameResources/scene4.svg"
    ]

    const difficulty=["1 or 2", "1 - 3", "1 -4", "1-5"];
    return (
        <div>
            <div className={'gridContainer'}>
                <div className={"sceneBackground"}
                     style={{
                         backgroundImage: `url(${backgrounds[props.level - 1]})`
                     }}
                ></div>
                <div className={"guessedNumber"}><p id={"guessedP"}>Guessed: {props.guess}</p></div>
                <img className={'userPlayer'}
                     style={{gridColumn: `${props.answerCheck === true ? 3 : props.answerCheck === false ? 2 : 2}`}}
                     alt="Iddle"
                     src={props.answerCheck === true ? mainCharState.attack[index] : props.answerCheck === false ? mainCharState.dmg[index] : mainCharState.idle[index]}/>
                <img className={'machinePlayer'} alt="Iddle"
                     style={{
                         gridColumn: `${props.answerCheck === false ? 2 : props.answerCheck === true ? 3 : 3}`,
                         zIndex: `${props.answerCheck === false ? 3 : props.answerCheck === true ? 2 : 2}`,
                         display: `${props.level === 1 ? "" : "none"}`,
                     }}
                     src={props.answerCheck === false ? enemyOneCharState.attack[index] : props.answerCheck === true ? enemyOneCharState.dmg[index] : enemyOneCharState.idle[index]}
                />
                <img className={'machinePlayer'} alt="Iddle"
                     style={{
                         gridColumn: `${props.answerCheck === false ? 2 : props.answerCheck === true ? 3 : 3}`,
                         zIndex: `${props.answerCheck === false ? 3 : props.answerCheck === true ? 2 : 2}`,
                         display: `${props.level === 2 ? "" : "none"}`,
                     }}
                     src={props.answerCheck === false ? enemyTwoCharState.attack[index] : props.answerCheck === true ? enemyTwoCharState.dmg[index] : enemyTwoCharState.idle[index]}
                />
                <img className={'machinePlayer'} alt="Iddle"
                     style={{
                         gridColumn: `${props.answerCheck === false ? 2 : props.answerCheck === true ? 3 : 3}`,
                         zIndex: `${props.answerCheck === false ? 3 : props.answerCheck === true ? 2 : 2}`,
                         display: `${props.level === 3 ? "" : "none"}`,
                     }}
                     src={props.answerCheck === false ? enemyThreeCharState.attack[index] : props.answerCheck === true ? enemyThreeCharState.dmg[index] : enemyThreeCharState.idle[index]}
                />
                <img className={'machinePlayer'} alt="Iddle"
                     style={{
                         gridColumn: `${props.answerCheck === false ? 2 : props.answerCheck === true ? 3 : 3}`,
                         zIndex: `${props.answerCheck === false ? 3 : props.answerCheck === true ? 2 : 2}`,
                         display: `${props.level === 4 ? "" : "none"}`,
                     }}
                     src={props.answerCheck === false ? enemyFourCharState.attack[index] : props.answerCheck === true ? enemyFourCharState.dmg[index] : enemyFourCharState.idle[index]}
                />

                <div className={'map'}
                     style={{backgroundImage: `url(${floors[props.level - 1]})`}}
                ></div>
                <p> {props.level === 4 ? "Final Level" : `Level ${props.level}`} - Please guess a
                    number {difficulty[props.level - 1]}. Every correct guess
                    damages your opponent.</p>
            </div>

        </div>
    );
}