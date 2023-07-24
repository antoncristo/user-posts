import { type ChangeEventHandler, useState } from 'react';
import { Loader } from '@antoncristo/react-ev';
import { useParams } from 'react-router';

import { useGetUserPosts } from '../../api';
import { ClearIcon } from '../../assets';
import { Post } from './post';

import { PostsBlock, SearchBlock, SearchInput } from './posts.styled';

export const Posts = () => {
	const { id } = useParams();
	const [searchedPost, setSearchedPost] = useState('');

	if (!id) {
		// Will never reach this code since the navigation occurs programmatically and passes an id
		return <div>Application error</div>;
	}

	const { posts, isError, isLoading } = useGetUserPosts({ userId: parseInt(id, 10) });

	if (isError) {
		// Should be fallback component
		return <div>Error, could now load users posts</div>;
	}

	const onChangeSearchHandler: ChangeEventHandler<HTMLInputElement> = event => {
		const { value } = event.currentTarget;
		setSearchedPost(value);
	};

	const clearSearchHandler = () => {
		setSearchedPost('');
	};

	const filteredPosts = posts?.filter(
		post =>
			// eslint-disable-next-line operator-linebreak
			post.title.toLowerCase().includes(searchedPost.toLowerCase()) ||
			post.body.toLowerCase().includes(searchedPost.toLowerCase())
	);

	return (
		<>
			<SearchBlock>
				<SearchInput
					value={searchedPost}
					onChange={onChangeSearchHandler}
					type='text'
					placeholder='search a post...'
				/>
				<button onClick={clearSearchHandler}>
					<ClearIcon width={32} height={32} />
				</button>
			</SearchBlock>
			<PostsBlock>
				{isLoading ? (
					<Loader />
				) : (
					filteredPosts?.map(post => (
						<Post key={`${post.id},${post.userId}`} post={post} />
					))
				)}
			</PostsBlock>
		</>
	);
};
