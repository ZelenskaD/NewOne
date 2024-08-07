const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Daria"/>
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))