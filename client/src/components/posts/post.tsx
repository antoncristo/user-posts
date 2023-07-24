import { useParams } from 'react-router';
import { type IPost } from '../../types';
import { useDeleteUserPost } from '../../api/posts';

import { DeleteIcon } from '../../assets';

import * as S from './posts.styled';

export const Post = ({ post }: { post: IPost }) => {
	const { id } = useParams();
	const { deletePost } = useDeleteUserPost();

	if (!id) {
		// Will never reach this code since the navigation occurs programmatically and passes an id
		return <div>Application error</div>;
	}

	const deletePostHandler = () => {
		deletePost({ userId: parseInt(id, 10), postId: post.id });
	};

	return (
		<S.PostContainer>
			<S.Header>
				<S.Title maxWidth='80%' fontSize='20px' fontWeight='bold'>
					{post.title}
				</S.Title>
				<S.DeleteButton
					icon={<DeleteIcon width='24px' height='24px' />}
					onClick={deletePostHandler}
				/>
			</S.Header>
			<div>{post.body}</div>
		</S.PostContainer>
	);
};
