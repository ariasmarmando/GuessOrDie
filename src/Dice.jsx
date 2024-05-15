import './App.css'
export default function Dice(props){

    return (
        <div className={'diceDisplay'}>
            <div className={'answerEncasing'}>
                <p id={"num"}>{props.prevDice}</p>
            </div>
        </div>
    );
}