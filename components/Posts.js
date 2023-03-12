import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from "../firebase";
import Post from "./Post";

// const posts = [
//     {
//         id:"123",
//         username: "heyyyyy",
//         userImg: "https://links.papareact.com/3ke",
//         img: "https://links.papareact.com/3ke",
//         caption: "This is the first post on my insta clone",
//     },

//     {
//         id:"123",
//         username: "heyyyyy",
//         userImg: "https://links.papareact.com/3ke",
//         img: "https://links.papareact.com/3ke",
//         caption: "This is the first post on my insta clone",
//     },
// ];

function Posts () {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => 
        onSnapshot(
            query(collection(db, 'posts'), orderBy('timestamp', 'desc')), 
            (snapshot) =>{
            setPosts(snapshot.docs);
         } 
        ), 
        [db ]);



  return (
    <div>
        {posts.map((post) =>(
            <Post 
                key={post.id}
                id={post.id}
                username={post.data().username}
                userImg={post.data().profileImg} //userImg
                img={post.data().image}
                caption={post.data().caption}
            />
        )
        )}

    </div>
  );
}

export default Posts;
