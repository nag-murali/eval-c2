import { useNavigate } from "react-router-dom";

export const Home = () => {
const navigate = useNavigate();
    return (
        <div>
            <img style={{width: "400px"}} src="https://pluspng.com/img-png/google-logo-png-google-logo-png-3478.png" alt="" />
            <br></br>
            <input placeholder="Search" type="text" className="search-box" onKeyPress={
                (e) => {
                   if(e.key == "Enter"){
                       navigate(`/search/:${e.target.value}`)
                   }
                }
            }/>
        </div>
    );
}