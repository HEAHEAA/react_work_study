import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import {useState} from "react";
import Counter from "../feature/counter/Counter.jsx";

const GoogleLoginBtn = () => {
    const [loginResponse,setLoginResponse] = useState(null);
    const clientID = 'key'
    const loginHandler = (response) => {
        const decode_token = jwtDecode(response.credential);
        console.log(decode_token);
        setLoginResponse(decode_token);
    }

    return(
        <div>
            <div className="login-box">
                <GoogleOAuthProvider clientId={clientID}>
                    <GoogleLogin
                        onSuccess={loginHandler}
                        onFailure={(err) => {
                            console.log(err);
                        }}
                    />
                </GoogleOAuthProvider>
            </div>


            <br/>

            {
                loginResponse &&<div className="login-success-box">
                <h3 style={{color: '#1c63c2'}}>로그인 성공 !</h3>
                <img src={loginResponse.picture} alt="profile-img" width={50} height={50} />
                    <p><strong>{loginResponse.name}</strong> 님 안녕하세요.</p>
                </div>
            }



        </div>
    )
}
export default GoogleLoginBtn;
