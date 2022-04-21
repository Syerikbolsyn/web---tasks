import math

# 1

print("Hello, World!")


# 2

if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a+b)
    print(a-b)
    print(a*b)

# 3

if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a//b)
    print(a/b)


# 4

if __name__ == '__main__':
    n = int(input())
    for i in range(n):
        print(i*i)

# 5

def is_leap(year):
    leap = False
    
    if year%4==0:
        if year %100!=0 or year%400 == 0:
            leap = True
        
    
    return leap

year = int(input())
print(is_leap(year))


# 6

if __name__ == '__main__':
    n = int(input())
    s = ''
    for i in range(n):
        s+=str(i+1)
        
    print(s)

# 7

if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    ans = []
    for i in range(x+1):
        for j in range(y+1):
            for k in range(z+1):
                if i+j+k != n :
                    ans.append([i,j,k])
    print(ans)

# 8

if __name__ == '__main__':
    n = int(input())
    arr = [int (i) for i in input().split()]
    ma = -100
    for i in range(len(arr)):
        if arr[i]>=ma:
            ma = arr[i]
    r = -100
    for i in range(len(arr)):
        if arr[i]>=r and ma!=arr[i] :
            r = arr[i]
    print(r)
            
# 9 find the percentage

if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    sum =0
    for i in student_marks[query_name]:
        sum +=i
    print(format(sum/3, '.2f'))

# 10 
def split_and_join(line):
    ans  = ''
    ans= ans+'-'.join(line.split())
    return ans

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)
