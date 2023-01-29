import { Link } from "react-router-dom";
import { Card, Icon, Label, Segment } from "semantic-ui-react";
import moment from 'moment';

function formatTimestamp(timestamp) {
    return moment(timestamp*1000).format('hh:mm DD/MM/YYYY');
  }

function StoryCard({
    id,
    url,
    user,
    title,
    score,
    time_of_submission
}) {
    return (
        <Card fluid style={{marginTop: "10px"}}>
            <Card.Content>
                <Card.Header>
                    <a href={url} target="_blank">
                        {title}
                    </a>
                </Card.Header>
                <Card.Meta>
                    {user}
                </Card.Meta>
                <Card.Description>
                    <Label>
                        <Icon name="arrow alternate circle up" /> {score}
                    </Label>
                    <Label>
                        <Icon name="clock" /> {formatTimestamp(time_of_submission)}
                    </Label>
                    <Link  to={`/comments/${id}`}>
                        <Label color="orange">
                            Top Comments
                        </Label>
                    </Link>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export function StoryCardGroup({ storyList, loading }) {
    return (
        <Segment loading={loading} basic>
            <Card.Group>
                {
                    storyList !== undefined && storyList.length > 0 && (
                        storyList.map((story, storyIndex) => {
                            return (
                                <StoryCard
                                    {...story}
                                    key={`story_${storyIndex}`}
                                />
                            )
                        })
                    )
                }
            </Card.Group>
        </Segment>
    )
}