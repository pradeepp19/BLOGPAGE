import { useEffect, useState } from "react";
import { API_URL } from "../config";

export default function Accountpage() {
    const [user,setUser] = useState({});
    const [blogs,setBlogs] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newContet,setNewContent] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUser = async () => {
            try{
                const res = await fetch(`${API_URL}/api/v1/users/me`, {
                headers: { Authorization: `Bearer ${token}` },
            });
                const data = await res.json();
                setUser(data);

            }catch(err){
                console.error("Error fetching user info:", err);
            }
        };
        fetchUser();
    }, [token]);



    
}