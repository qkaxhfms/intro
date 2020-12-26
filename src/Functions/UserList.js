import React from 'react';

function User({user}){
    return (
        <div>
            <p>{user.username}</p>
            <span>{user.email}</span>
        </div>
    );
}

function UserList(){
  const users = [
      {
          id: 1,
          username: "minsang",
          email: "minsang@gmail.com",
      },
      {
          id: 2,
          username: "tester",
          email: "tester@example.com",
      },
      {
          id: 3,
          username: "peter",
          email: "peter@example.com",
      },
  ];
    return (
        <>
            <h2>UserList</h2>
            {users.map(user => (
                <User user={user} key={users.id}/>
            ))}
        </>
    );
}

export default UserList;