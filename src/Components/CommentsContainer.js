import React from 'react'
import CommentsList from './CommentsList'

const commentContent = [
    {
        name: 'Rajath',
        text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
        replies: [{
                name: 'Rajath',
                text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
                replies: [{
                    name: 'Rajath',
                    text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
                    replies: [{
                        name: 'Rajath',
                        text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
                        replies: []
                    }]
                }]
            },
            {
                name: 'Rajath',
                text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
                replies: []
            },
            {
                name: 'Rajath',
                text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
                replies: []
            }
    ] 
},{
    name: 'Rajath',
    text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
    replies: [{
            name: 'Rajath',
            text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
            replies: []
        },
        {
            name: 'Rajath',
            text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
            replies: []
        },
        {
            name: 'Rajath',
            text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
            replies: []
        }
] 
},{
    name: 'Rajath',
    text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
    replies: [{
            name: 'Rajath',
            text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
            replies: []
        },
        {
            name: 'Rajath',
            text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
            replies: []
        },
        {
            name: 'Rajath',
            text: "Jazz music flows, creating a vibrant rhythm that resonates through the night.",
            replies: []
        }
] 
}]

const CommentsContainer = () => {
  return (
    <div>
        <CommentsList comments={commentContent} />
    </div>
  )
}

export default CommentsContainer