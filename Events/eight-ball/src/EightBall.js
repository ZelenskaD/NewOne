import React, {useState} from 'react';
import './EightBall.css'

const defaultAnswers= [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

const EightBall = ({answers = defaultAnswers}) =>{
        const [msg, setMsg] = useState("Think of a Question"); //1 ball
        const [color, setColor] = useState("black"); //1 ball

        const click = () => {
            const randAnswer = answers[Math.floor(Math.random() * answers.length)];
            setMsg(randAnswer.msg);
            setColor(randAnswer.color);
        };


    const restart = () => {
        setMsg("Think of a Question");
        setColor("black");
    }

    const ballStyle = {
        backgroundColor: color,
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        cursor: "pointer",
        margin: "20px auto",
  };

    return(
        <div>
            <div style={ballStyle} onClick= {click}>
                {msg}
            </div>
            <button onClick = {restart}> Restart</button>

        </div>

    )

}

export default EightBall;