const App = () => {
    return (
        <div>
            <PersonComponent name="Alexander" age={25} hobbies={['Reading', 'Gaming', 'Hiking']}/>
            <PersonComponent name="Bob" age={17} hobbies={['Skating', 'Drawing']}/>
            <PersonComponent name="Christina" age={20} hobbies={['Cooking', 'Dancing', 'Swimming']}/>
        </div>

    )
}

ReactDOM.render(<App/>, document.getElementById('root'))