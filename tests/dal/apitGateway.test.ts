import "reflect-metadata"
import { ApiGateway } from "../../src/dal/ApiGateway";

const gateway = new ApiGateway()

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules() // Most important - it clears the cache
  process.env = { ...OLD_ENV }; // Make a copy
});

afterAll(() => {
  process.env = OLD_ENV; // Restore old environment
});

test('Make a call to get all events for today', async () => {
  const events = JSON.parse(await gateway.getEvents())
  expect(events instanceof Array)
  expect(events.length).toBeGreaterThan(0);
  expect(events[0].date.startsWith(new Date()))
});


test('Make a call to get all events for yesterday', async () => {
  var date = new Date();
  date.setDate(date.getDate() - 1);
  const events = JSON.parse(await gateway.getEvents({date}))
  expect(events instanceof Array)
  expect(events[0].date.startsWith(date))
  expect(events.length).toBeGreaterThan(0);
});


test('Make a call to get all events for tomorrow', async () => {
  var date = new Date();
  date.setDate(date.getDate() + 1);
  const events = JSON.parse(await gateway.getEvents({date}))
  expect(events instanceof Array)
  expect(events[0].date.startsWith(date))
  expect(events.length).toBeGreaterThan(0);
});