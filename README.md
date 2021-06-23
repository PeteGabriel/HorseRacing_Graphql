[horseracing-graphql.herokuapp.com](horseracing-graphql.herokuapp.com)

This is a project to play around with GraphQL using Typescript. 

You can get events or a event by its id. For this you should use the query *events* or *event(id)*. Some examples can be found below:


```graph
query {
  events {
    eventId
    sportId
    startTime
    description
    raceName
    course
    length
  }
}
```


```json
{
  "eventId": 204633
}

```

```graph
query RaceById($eventId: Int!) {
  race(eventId: $eventId) {
    eventId
    sportId
    startTime
    description
    raceName
    going
    course
    length
    horses {
      id
      name
      jockey
      trainer
      age
      weight
      number
      lastRanDaysAgo
      form
      startingPrice
      odd
    }
  }
}
```

