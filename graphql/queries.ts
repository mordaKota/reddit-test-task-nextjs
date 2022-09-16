import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
    query GetAllPosts {
        getPostList {
            body
            created_at
            id
            image
            title
            subreddit_id
            username
            subreddit {
                created_at
                id
                topic
            }
            comments {
                created_at
                id
                post_id
                text
                username
            }
            votes {
                created_at
                id
                post_id
                upvote
                username
            }
        }
    }
`

export const GET_ALL_POSTS_BY_TOPIC = gql`
    query GetAllPostsByTopic($topic: String!) {
        getPostListByTopic(topic: $topic) {
            body
            created_at
            id
            image
            title
            subreddit_id
            username
            subreddit {
                created_at
                id
                topic
            }
            comments {
                created_at
                id
                post_id
                text
                username
            }
            votes {
                created_at
                id
                post_id
                upvote
                username
            }
        }
    }
`

export const GET_POST_BY_POST_ID = gql`
    query GetPostByPostId($post_id: ID!) {
        getPostListByPostId(post_id: $post_id) {
            body
            created_at
            id
            image
            title
            subreddit_id
            username
            subreddit {
                created_at
                id
                topic
            }
            comments {
                created_at
                id
                post_id
                text
                username
            }
            votes {
                created_at
                id
                post_id
                upvote
                username
            }
        }
    }
`

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query GetSubredditByTopic($topic: String!) {
        getSubredditListByTopic(topic: $topic) {
            id
            topic
            created_at
        }
    }
`


