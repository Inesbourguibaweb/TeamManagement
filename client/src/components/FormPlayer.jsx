import React, { useState , useEffect } from 'react'
import SubNavOne from './SubNavOne'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormPlayer = (props) => {
  const {setAddplayerPage, setListPage, listPage}=props;
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [preferredPosition, setPreferredPosition] = useState("");
  const [errors, setErrors]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
    setAddplayerPage(true);
    setListPage(false);
  },[])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/players")
    .then((res)=>{
    console.log(res.data);
      setPlayers(res.data);
      }).catch((err)=>{
          console.log(err);
      })}, [navigate]);

      const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/',{ playerName, preferredPosition })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            setPlayers([...players, res.data]);
            navigate("/players/list");
          }).catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
            console.log(errors);      
          }
          );
    }

  return (
    <div>
      <SubNavOne listPage={listPage}/>
      <form onSubmit={onSubmitHandler} >
            <div >
                <label>Player Name :</label>
                <input type="text" value={playerName || ''} onChange = {(e)=>setPlayerName(e.target.value)}/>
                { errors.playerName ? 
                        <p>{errors.playerName.message}</p>
                        : null
                }
                <p>* Name must be at least 2 characters in length</p>
            </div>
            <div>
                <label>Preferred position:</label>
                <input type="text" value={preferredPosition || ''} onChange = {(e)=>setPreferredPosition(e.target.value)}/>
                
            </div>
                {
                    errors.playerName || playerName==='' || playerName.length<2 ? 
                    <input type="submit" value="ADD" disabled className='button'
                    style={{
                      background:  "#fff",
                      color: "#ccc",
                      cursor: "no-drop",
                }}
                    /> :
                    <input type="submit" value="ADD" className='button' style={{backgroundColor:'green'}}
                    />
                }
        </form>
    </div>
  )
}

export default FormPlayer