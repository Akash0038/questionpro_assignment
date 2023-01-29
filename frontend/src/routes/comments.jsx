import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Message, Segment } from "semantic-ui-react";
import { CommentCardGroup } from "../components/comments";


export function Comments() {
    const navigate = useNavigate()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState(false)

    const ErrorMessage = () => (
        <Message negative>
            <Message.Header>Error in loading comments</Message.Header>
            <p>please try again later</p>
        </Message>
    )

    let { storyId } = useParams()

    const fetchComments = (sId) => {
        setLoading(true)
        fetch(import.meta.env.VITE_API_URL + `/comments/${sId}`, {
            method: "GET"
        }).then(res => {
            return res.json()
        }).then(jsonRes => {
            if (jsonRes.success === "false") {
                setShowError(true)
                setLoading(false)
            }
            else {
                setComments(jsonRes)
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        if (storyId) {
            fetchComments(storyId)
        }
    }, [storyId])

    return (
        <>
            <Container>
                <Segment basic>
                    <Button floated="right" color="orange"
                        onClick={() => navigate("/")}
                    >
                        Back
                    </Button>
                </Segment>
                <Segment basic>
                    {showError && <ErrorMessage />}
                    <CommentCardGroup
                        loading={loading}
                        commentList={comments}
                    />
                </Segment>
            </Container>
        </>
    )
}
