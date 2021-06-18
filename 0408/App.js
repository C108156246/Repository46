function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

export default function App(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Commet-text">{props.text}</div>
            <div className="Comment-data">
                {formatData(props.data)}
            </div>
        </div>
    );
}