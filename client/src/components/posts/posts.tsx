import { Loader } from '@antoncristo/react-ev';
import { useParams } from 'react-router';

import { useGetUserPosts } from '../../api';

import { PostsBlock } from './posts.styled';
import { Post } from './post';

export const Posts = () => {
	const { id } = useParams();

	if (!id) {
		// Will never reach this code since the navigation occurs programmatically and passes an id
		return <div>Application error</div>;
	}

	const { posts, isError, isLoading } = useGetUserPosts({ userId: parseInt(id, 10) });

	if (isError) {
		// Should be fallback component
		return <div>Error, could now load users posts</div>;
	}

	return (
		<PostsBlock>
			{isLoading ? (
				<Loader />
			) : (
				posts?.map(post => <Post key={`${post.id},${post.userId}`} post={post} />)
			)}
		</PostsBlock>
	);
};
