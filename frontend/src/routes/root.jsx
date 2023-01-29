import { useNavigate } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";

export function Home() {
    const navigate = useNavigate()

    return (
        <Container fluid textAlign="center">
            <Segment basic>
                <Button color="orange"
                    onClick={() => navigate("/top-stories")}
                >
                    Top Stories
                </Button>
                <Button color="orange"
                    onClick={() => navigate("/past-stories")}
                >
                    Past Stories
                </Button>
            </Segment>
        </Container>
    )
}