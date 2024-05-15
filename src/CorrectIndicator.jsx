import './App.css'
export default function CorrectIndicator(props){

    return (
        <div className={'correctInd'}>
            <div  style={{background: `${props.correct == false ? "#c55b63" : "#4d8b71"}`}}>
                <h2 style={{display: `${props.correct == true ? "" : "none"}`}}>Nice! Enemy lost 10hp</h2>
                <h2 style={{display: `${props.correct == false ? "" : "none"}`}}>Wrong! You lost 10hp</h2>
            </div>
        </div>
    );
}