import { TrashSimple } from "phosphor-react";
import { NewCommentBox, CommentList, CommentsContainer, CommentContainer, AvatarContainer, CommentBox } from "./styles";
import { useState } from "react";

export function Comments(){

    const [newCommentText, setNewCommentText] = useState("");

    const [comments, setComments] = useState([
        "A experiência de jogar esse jogo pela primeira vez é única. Recomendo!!!",
    ])

    function handleNewCommentChange(event:React.ChangeEvent<HTMLTextAreaElement>){
        setNewCommentText(event.target.value);
    }

    function handleAddNewComment(event:React.FormEvent){
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText("");
    }

    function deleteComment(commentKey : string){
        setComments(
            comments.filter(comment => !(commentKey == comment))
        );
    }

    return (
        <CommentsContainer>
            <NewCommentBox>
                <h1>Deixe seu feedback</h1>
                <form onSubmit={handleAddNewComment}>
                    <textarea
                        placeholder="Deixe um comentário"
                        required
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                    />
                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </form>
            </NewCommentBox>
            <CommentList>
                {
                    comments.map(comment => (
                        <Comment
                            key = {comment}
                            content={comment}
                            deleteComment={deleteComment}
                        />
                    ))
                }
            </CommentList>
        </CommentsContainer>
    );
}

interface CommentProps {
    content: string,
    deleteComment: (commentKey : string) => void
}

function Comment({content, deleteComment} : CommentProps){
    return (
        <CommentContainer>
            <AvatarContainer>
                <img src="https://github.com/gabrielzinCoelho.png" />
            </AvatarContainer>
            <CommentBox>
                <header>
                    <span>Gabriel Coelho Costa</span>
                    <button 
                        onClick={()=>(deleteComment(content))}
                    >
                        <TrashSimple size={30} />
                    </button>
                </header>
                <p>{content}</p>
            </CommentBox>
        </CommentContainer>
    );
}