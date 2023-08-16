/* eslint-disable react/prop-types */
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatPage = (props) => {
	return (
		<div className="background">
			<PrettyChatWindow
				projectId={import.meta.env.VITE_PROJECT_ID}
				username={props.user.username}
				secret={props.user.secret}
			/>
		</div>
	);
};

export default ChatPage;
