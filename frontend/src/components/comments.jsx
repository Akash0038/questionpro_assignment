import { Card, Container, Segment } from "semantic-ui-react";

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

function CommentCard({ user, text }) {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>
                    { user }
                </Card.Header>
                <Card.Description>
                    { htmlDecode(text) }
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export function CommentCardGroup({ commentList, loading }) {
    return (
        <Segment loading={loading} basic>
            <Card.Group>
                {
                    commentList !== undefined && commentList.length > 0 && (
                        commentList.map((comment, commentIndex) => {
                            return (
                                <CommentCard
                                    {...comment}
                                    key={`comment_${commentIndex}`}
                                />
                            )
                        })
                    )
                }
            </Card.Group>
        </Segment>
    )
}