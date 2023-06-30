import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";
import db from "./firebase";
import { useNavigate } from "react-router-dom";

function SidebarChat({id,name,addNewChat,pass}){
    const [seed, setSeed] = useState("");
    const [messages,setMessages] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        if(id){
            db.collection('rooms').doc(id).collection('messages')
            .orderBy('timestamp','desc').onSnapshot((snapshot)=>(
                setMessages(snapshot.docs.map((doc)=>
                doc.data()
                ))
            ))
        }
    },[])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);


    const enterChat = () => {
        const enteredPass = prompt("Please enter the password");
        if (enteredPass === pass) {
          // Redirect to the chat room if the password is correct
          navigate(`/rooms/${id}`);
        } else {
          alert("Incorrect password");
        }
      };

    const createChat = () =>{
        const roomName = prompt("Please enter name for chat");
        const roomPass = prompt("Please Create your password?");
        if(roomName){
            //do something
            db.collection("rooms").add({
                name:roomName,
                pass:roomPass
            })
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat" onClick={enterChat}>
            <Avatar  src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new ChatRoom</h2>
        </div>
    )



}

export default SidebarChat