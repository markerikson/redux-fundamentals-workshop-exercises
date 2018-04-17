# Exercise 05: Side Effects and Thunks

Yep, more counters!  This time, we're going to handle writing logic as thunks.

This counter app has three requirements:

- One button should dispatch `"INCREMENT"` three times in a row
- A second button should only dispatch `"INCREMENT"` if the current counter value is even
- A third button should fetch an amount from a "server API" that returns a random value.  Assuming the API call
  succeeds, it should dispatch `"AMOUNT_REQUEST_SUCCEEDED"` with the amount.  However, the API is flaky, and will
  fail 30% of the time.  If the API call fails, you should dispatch `"AMOUNT_REQUEST_FAILED"`, and include the
  error message.

  There's a reducer already set up that will show whether the last API call succeeded or failed, and if it failed,
  what the error was.
