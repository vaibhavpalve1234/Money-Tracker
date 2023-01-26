def palindrop(s):
    a = list(s)
    left = a[0]
    right = a[-1]
    return left, right




a = 'annaa'
b = palindrop(a)
print(b)