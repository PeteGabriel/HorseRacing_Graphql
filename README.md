This is a project to play around with GraphQL using Typescript. 

You can get events or a event by its id. For this you should use the query *events* or *event(id)*. You can see examples below.


```graphql
query {
  events{
    eventId
    sportId
    startTime
    raceName
    course
    description
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
        "eventId": 198884,
        "sportId": 100,
        "startTime": "2021-01-25T08:51:22.000Z",
        "raceName": "tote PLACEPOT YOUR FIRST BET HANDICAP (6)",
        "course": "Chelmsford City",
        "description": "Chelmsford City - tote PLACEPOT YOUR FIRST BET HANDICAP (6) - 1/25/2021, 9:51:22 AM",
        "going": "Standard",
        "length": "6f"
      }
    ]
  }
}
```


```graphql
query {
  event(eventId: 198884){
    eventId
    sportId
    startTime
    raceName
    course
    description
    going
    length
  }
}
```

```json
{
  "data": {
    "event": {
      "eventId": 198884,
      "sportId": 100,
      "startTime": "2021-01-25T08:51:22.000Z",
      "raceName": "tote PLACEPOT YOUR FIRST BET HANDICAP (6)",
      "course": "Chelmsford City",
      "description": "Chelmsford City - tote PLACEPOT YOUR FIRST BET HANDICAP (6) - 1/25/2021, 9:51:22 AM",
      "going": "Standard",
      "length": "6f"
    }
  }
}
```