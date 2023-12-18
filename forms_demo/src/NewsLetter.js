import {useState, useRef} from 'react';

function NewsLetter(){
	const [email, setEmail] = useState('');
	const [agreed, setAgreed] = useState(false);
	const nameRef = useRef()

	function updateEmailHandler(event){
		setEmail(event.target.value);
	}

	function updateAgreementHandler(event){
		setAgreed(event.target.checked);
	}

	function signupHandler(event){
		event.preventDefault();
		const userDetail = {name: nameRef.current.value,userEmail: email, userAgrees: agreed, };
		console.log(userDetail);
	}

	return (
		<form onSubmit={signupHandler}>
			<div>
				<label htmlFor='email'> Your Email</label>
				<input type="email" id="email" onChange={updateEmailHandler} />
			</div>
			<div>
				<label htmlFor='name'> Your Name </label>
				<input type="text" id="name" ref={nameRef}/>
			</div>
			<div>
				<input type="checkbox" id="agree" onChange={updateAgreementHandler}/>
				<label htmlFor="agree"> Agree to terms and conditions </label> 
			</div>
			<input type="submit" value="Submit Form"/>
		</form>
	);
}



export default NewsLetter;
