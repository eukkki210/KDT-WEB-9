import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
            });

        return () => {
            console.log("연결해제 완료");
        };
    }, []);

    useEffect(() => {
        console.log(`유저 정보 업데이트 - 현재 사용자 수: ${users.length}`);
    }, [users]);

    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
