import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Message, Segment } from "semantic-ui-react";
import { StoryCardGroup } from "../components/stories";

const ErrorMessage = () => (
    <Message negative>
        <Message.Header>Error in loading stories</Message.Header>
        <p>please try again later</p>
    </Message>
)


export function TopStories() {
    const navigate = useNavigate()
    const [stories, setStories] = useState([])
    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState(false)

    const fetchStories = () => {
        setLoading(true)
        fetch(import.meta.env.VITE_API_URL + "/top-stories", {
            method: "GET"
        }).then(res => {
            return res.json()
        }).then(jsonRes => {
            if (jsonRes.success === "false") {
                setShowError(true)
                setLoading(false)
            } else {
                setStories(jsonRes)
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        fetchStories()
    }, [])

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
                    <StoryCardGroup
                        loading={loading}
                        storyList={stories}
                    />
                </Segment>
            </Container>
        </>
    )
}