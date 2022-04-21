from array import array
from ctypes import sizeof
import math


# a = int (input())
# x = input()
# b = [int(i) for i in x.split()]
# c = []
# for i in range(len(b)):
#     if i%2==0:
#         c.append(b[i])
# print(*c)

# ggggggggggggggggggggg

# a = int (input())
# x = input()
# b = [int(i) for i in x.split()]
# for i in range(int(len(b)/2)):
#     c = b[i]
#     b[i] = b[len(b)-1-i]
#     b[len(b)-1-i] = c
# print(*b)

#  fffffffffffffffffff

# a = int (input())
# x = input()
# ans  = 0
# b = [int(i) for i in x.split()]
# for i in range(1,len(b)-1):
#     if b[i-1]<b[i] and b[i]>b[i+1]:
#         ans +=1
# print(ans)


# eeeeeeeeeeeeeeeee


a = int (input())
x = input()
ans  = 0
b = [int(i) for i in x.split()]
for i in range(len(b)-1):
    if b[i]*b[i+1]>0:
        ans +=1
if ans !=0 :
    print('YES')
else:
    print('NO')
