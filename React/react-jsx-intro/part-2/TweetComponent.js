const TweetComponent = (props) => {
return (
    <div className="tweet">
        <div className="tweet-header">
            {props.profileImage}
            <div>
                <h3>{props.name} <span className="tweet-date">@{props.username} - <b> Created at :</b> {props.date} </span></h3>
            </div>
        </div>

        <div className="tweet-content">
            <p className="tweet-message">{props.message}</p>
            <div className="tweet-image">{props.image}</div>
        </div>

    </div>
)
}