def fibonacci(n):
  arr = [0, 1]

  if n == 0:
    return arr[0]
  elif n == 1:
    return arr[1]
  else:
    for i in range(0, n - 1):
      arr.append(arr[i] + arr[i + 1])
    return arr[len(arr) - 1]