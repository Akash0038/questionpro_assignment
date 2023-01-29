import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Message, Segment } from "semantic-ui-react";
import { StoryCardGroup } from "../components/stories";

export function PastStories() {
    const navigate = useNavigate()
    const [stories, setStories] = useState([])
    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState(false)
    const [showNoStroies, setShowNoStories] = useState(false)

    const ErrorMessage = () => (
        <Message negative>
            <Message.Header>Error in loading stories</Message.Header>
            <p>please try again later</p>
        </Message>
    )

    const NoStoriesMessage = () => (
        <Message>
            <Message.Header>No Stories Found</Message.Header>
        </Message>
    )

    const fetchPastStories = () => {
        setLoading(true)
        fetch(import.meta.env.VITE_API_URL + "/past-stories", {
            method: "GET"
        }).then(res => {
            return res.json()
        }).then(jsonRes => {
            if (jsonRes.success === "false") {
                setShowError(true)
                setLoading(false)
            } else {
                if (!jsonRes.length) {
                    setShowNoStories(true)
                    setLoading(false)
                }
                setStories(jsonRes)
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        fetchPastStories()
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
                    {showNoStroies && <NoStoriesMessage />}
                    <StoryCardGroup
                        loading={loading}
                        storyList={stories}
                    />
                </Segment>
            </Container>
        </>
    )
}