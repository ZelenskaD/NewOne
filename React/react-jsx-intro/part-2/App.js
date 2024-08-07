const App = () => {
    return (
        <div>
            <TweetComponent
                username="Antonio"
                name="Tosha"
                date="07.05.2024"
                message="I am not alone. I have my friends"
                image={
                    <img
                        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/05/7-Tanjiro-Protects-Nezuko-From-Zenitsu---s-Creepy-Behavior.jpg"
                        alt="Tosha"
                     />
                }
                profileImage={
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuK2yF9SqI7kmpz-lEct85j_mNWw68SjkMQ&s"
                        alt={`${name}'s profile`}
                    />
                }
            />

            <TweetComponent
                username="Natrix"
                name="Daria"
                date="08.07.2024"
                message="I LOVE TO SPEND MY HUSBAND'S MONEY "
                image={
                    <img
                        src="https://preview.redd.it/wuff5lpx7bk31.jpg?width=640&crop=smart&auto=webp&s=d6ef29d2adac823b76de5ea7190cb476544fc89d"
                        alt="Daria"
                       />

                }

                  profileImage={
                    <img
                        src="https://preview.redd.it/j2ink51mnxz51.jpg?width=1080&crop=smart&auto=webp&s=8115aefc128c3793db6f41b1f2c85988e841b3eb"
                        alt={`${name}'s profile`}
                    />
                }
            />

            <TweetComponent
                username ="BlueberryChick"
                name ="Chicken"
                date ="07.09.2023"
                message ="I AM BLUEBERRY CHICKEN!"
                image={
                    <img
                        src="https://i.pinimg.com/736x/21/a1/0e/21a10e534ca5c1208f89abc84eed7e7f.jpg"
                        alt="Chicken"
                    />

                }
                  profileImage={
                    <img
                        src="https://img.freepik.com/premium-photo/cute-anime-chicken_783884-4945.jpg"
                        alt={`${name}'s profile`}
                    />
                }
            />

        </div>

    )
}

ReactDOM.render(<App/>, document.getElementById('root'))