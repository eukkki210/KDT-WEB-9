import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from './User'; // users 배열 가져오기
import Comment from './Comment';

export default function UserDetail() {
    // Route에 /user/:userId
    const { userId } = useParams();
    // console.log(params); // 객체형태로 출력

    return (
        <>
            <div>
                사용자 {userId}는 {users[Number(userId) - 1].name}입니다.
            </div>
            <Link to={Comment}>comment</Link>
            <Outlet />
        </>
    );
}