/* eslint-disable react/prop-types */
import axios from 'axios';

const AuthPage = (props) => {
	const onSubmit = (x) => {
		x.preventDefault();
		const { value } = x.target[0];
		axios
			.post('http://localhost:3001/authenticate', { username: value })
			.then((res) => props.onAuth({ ...res.data, secret: value }))
			.catch((err) => console.log('Auth Error', err));
	};

	return (
		<div className="auth-background">
			<form onSubmit={onSubmit} className="form-card">
				<div className="form-title">SEEN´T</div>

				<div className="form-subtitle">Serverless Entertainment</div>

				<div className="auth">
					<div className="auth-label">username</div>
					<input className="auth-input" name="username" />
					<button className="auth-button" type="submit">
						Enter
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthPage;
