# 2715. Timeout Cancellation

### Difficulty: Easy

---

## Problem Description

Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.

- After a delay of `cancelTimeMs`, the returned cancel function `cancelFn` will be invoked:
  ```javascript
  setTimeout(cancelFn, cancelTimeMs);
