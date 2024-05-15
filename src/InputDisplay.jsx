import nextIcon from './gameResources/nextIcon.svg'
export default function InputDisplay(props){
    return (
        <div className={"guessDisplay"}>
            <form onSubmit={props.handleSubmit} className={"formFields"}>
                <div className={"guessAnumBg"}><p>GUESS A NUMBER:</p></div>
                <input autoFocus={true} type={"text"} value={props.guess} onChange={props.onChange}  min="0" max="10"/>
                <button type={"submit"}>
                    <p
                        style={{
                            fontSize:"2rem",
                            display:"flex",
                            margin:"0 auto"
                    }}>
                        GO
                    </p>
                    <img
                        style={{
                            display:"flex",
                            width:'70%',
                            margin:"-5px 30px"
                        }}
                        src={nextIcon}
                        alt={'nextarrow'} />
                </button>
            </form>
        </div>
    );
}