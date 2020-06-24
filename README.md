This is a project to play around with GraphQL using Typescript. 

You can get events or a event by its id. For this you should use the query *events* or *event(id)*. You can see examples below.


```graphql
query {
  events {
    eventId
    sportId
    startTime
    raceName
    going
    length
  }
}
```

```json
{
  "data": {
    "events": [
      {
        "eventId": 1000,
        "sportId": 100,
        "startTime": "2020-05-29T07:25:13.000Z",
        "raceName": "Newcastle",
        "going": "Soft",
        "length": "1m 3f"
      },
    ...
  }
}
```


```graphql
query ($eventId: Int!) {
  event(eventId: $eventId) {
    eventId
    sportId
    startTime
    raceName
    going
    length
  }
}
```

```json
{
  "data": {
    "event": {
      "eventId": 1000,
      "sportId": 100,
      "startTime": "2020-05-29T07:25:13.000Z",
      "raceName": "Newcastle",
      "going": "Soft",
      "length": "1m 3f"
    }
  }
}
```