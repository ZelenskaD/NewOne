const App=()=>{
    return(
        <div>
            <Alert>
                <h1>HELLO!!!</h1>
                <RandomNumRange min={20} max={30} />
                <RandomNumRange  />
                <RandomChoice choices ={["red", "green", "yellow"]} />
             </Alert >
            <Animal name="Stevie Chicks" species="Silkie Chicken" emoji="🐔" isCute={true}/>
            <Animal name="Patrick" species="Red Fox" emoji="🦊" isCute={false}/>
            <Bouncer age={10} />
            <Bouncer age={18} />
            <Bouncer age={29} />
            <TodoList todos={["walk chickens", "feed chickens", "eat chickens"]}/>
            {/*<RandomNum />*/}
            {/*<RandomNum />*/}
            {/*<RandomNum />*/}


        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))