import { IconButton } from '@antoncristo/react-ev';
import { type IPost } from '../../types';

import { DeleteIcon } from '../../assets';

import * as S from './posts.styled';

export const Post = ({ post }: { post: IPost }) => (
	<S.PostContainer>
		<S.Header>
			<S.Title maxWidth='80%' fontSize='20px' fontWeight='bold'>
				{post.title}
			</S.Title>
			<S.DeleteButton
				icon={<DeleteIcon width='24px' height='24px' />}
				onClick={() => null}
			/>
		</S.Header>
		<div>{post.body}</div>
	</S.PostContainer>
);
