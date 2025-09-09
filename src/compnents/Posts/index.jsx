import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchPosts} from '../../features/posts/postsSlice.js';

const Posts = () => {
    const dispatch = useDispatch();
    const {data, status, error} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    if (status === 'loading') return <p>Загрузка</p>
    if (status === 'failed') return <p>Ошибка: {error}</p>


    return (
        <div>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {data.map(post => (
                    <li key={post.id}

                    >
                      <h3>{post.title}</h3>
                      <div>{post.body}</div>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Posts;