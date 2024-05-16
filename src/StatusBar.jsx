import './App.css'
import mainCharVsIcon from './assets/gameResources/mainChar/mainCharVsImg.svg'
import enemyOneVsIcon from './assets/gameResources/enemyOne/enemyOneVsImg.svg'
import enemyTwoVsIcon from './assets/gameResources/enemyTwo/enemyTwoVsImg.svg'
import enemyThreeVsIcon from './assets/gameResources/enemyThree/enemyThreeVsImg.svg'
import enemyFourVsIcon from './assets/gameResources/enemyFour/enemyFourVsImg.svg'
import VsIcon from './assets/gameResources/vsIcon2.svg'

export default function StatusBar(props){

    return (
        <div className={'statusBar'}>
            <div className={'leftHpSec'}>
                <img src={mainCharVsIcon} alt='vsImage'/>
                {/*<p>{props.playerHealth}%</p>*/}
                <div className={"healthEmpty"}>
                    <div className={'playerHealthBar'} style={{width: `${props.playerHealth}%`}}>
                    </div>
                </div>
            </div>
            <div id={'vs'}><img src={VsIcon} alt='vsImage'/></div>
            <div className={'rightHpSec'}>
                <div className={"healthEmpty"}>
                    <div className={'consoleHealthBar'} style={{width: `${props.consoleHealth}%`}}>
                    </div>
                </div>
                {/*<p>{props.consoleHealth}%</p>*/}
                <img src={enemyOneVsIcon} alt='vsImage' style={{display: `${props.level === 1 ? "" : "none"}`}}/>
                <img src={enemyTwoVsIcon} alt='vsImage' style={{display: `${props.level === 2 ? "" : "none"}`}}/>
                <img src={enemyThreeVsIcon} alt='vsImage' style={{display: `${props.level === 3 ? "" : "none"}`}}/>
                <img src={enemyFourVsIcon} alt='vsImage' style={{display: `${props.level === 4 ? "" : "none"}`}}/>
            </div>

        </div>
    );
}