import string


1

def sleep_in(weekday, vacation):
  if vacation or (not vacation and  not weekday):
    return True
  return False

2

def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile  or (not a_smile and  not b_smile):
    return True
  return False

3

def sum_double(a, b):
  if a == b :
    return 2*(a+b)
  return a+b
4

def diff21(n):
  if n>21:
    return 2*(n-21)
  return abs(n-21)

5

def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))
6

def makes10(a, b):
  return (a == 10 or b == 10 or a+b == 10)
7

def near_hundred(n):
  return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

8

def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))

9

def not_string(str):
  if len(str) >= 3 and str[:3] == "not":
    return str
  return "not " + str

10

def missing_char(str, n):
  front = str[:n]   
  back = str[n+1:] 
  return front + back

11

def front_back(str):
  if len(str) <= 1:
    return str
  mid = str[1:len(str)-1]  
  return str[len(str)-1] + mid + str[0]

12 

def front3(str):
  front_end = 3
  if len(str) < front_end:
    front_end = len(str)
  front = str[:front_end]
  return front + front + front 


  Logic 2

  1

def make_bricks(small, big, goal):
    if small+5*big<goal:
        return False
    elif goal%5<=small:
        return True
    return False

2

def lone_sum(a, b, c):
  if a==b and b==c:
    return 0
  elif a==b:
    return c
  elif b==c:
    return a
  elif a== c:
    return b
  return a+b+c

3

def lucky_sum(a, b, c):
  if a == 13:
    return 0 
  elif b == 13:
    return a
  elif c == 13:
    return a+b
  return a+b+c

4

def no_teen_sum(a, b, c):
  sum=0
  if a ==15 or a==16:
    sum+=a
  elif a>12 and a<20:
    sum+=0
  else:
    sum+=a
  if b ==15 or b==16:
    sum+=b
  elif b>12 and b<20:
    sum+=0
  else :
    sum+=b
  if c==15 or c==16:
    sum+=c
  elif c>12 and c<20:
    sum+=0
  else :
    sum+=c
  return sum

String 2

1

def double_char(str):
  ans  = ''
  for i in str:
    ans+=i+i
  return ans

2

def count_hi(str):
  ans = 0
  ch = ''
  for i in str:
    if ch  == 'h' and i == 'i':
      ans +=1
    elif i =='h':
      ch  = 'h' 
    else: ch = ''
  return ans

3

def cat_dog(str):
  ans = 0
  ch = ''
  for i in str:
    if ch  == 'ca' and i == 't':
      ans +=1
    elif ch == 'c' and  i =='a':
      ch  = 'ca' 
    elif i == 'c':
      ch ='c'
    else: ch = ''
  ch = ''
  for i in str:
    if ch  == 'do' and i == 'g':
      ans -=1
    elif ch == 'd' and  i =='o':
      ch  = 'do'
    elif i == 'd':
      ch ='d'
    else: ch = ''  
  
  return ans==0



List -2

1

def count_evens(nums):
  ans = 0
  for i in nums:
    if i %2==0:
      ans+=1
  return ans

2

def big_diff(nums):
  max = 0
  min =1000
  for i in nums:
    if max<i:
      max = i
    if i<min:
      min =i
  return max-min

3

def centered_average(nums):
  nums.sort()
  if len(nums)%2==0:
    return (nums[len(nums)/2]+nums[len(nums)/2-1])/2
  else :
    return nums[len(nums)/2]


4

def sum13(nums):
  ans = 0
  bol = True
  if len(nums)==0:
    return 0
  else:
    for i in nums:
      if i!=13 and bol:
        ans+=i
      if i == 13:
        bol =False
      else:
        bol= True
  return ans
