def solution(new_id):
    answer = ''
    new_id = level1(new_id)
    new_id = level2(new_id)
    new_id = level3(new_id)
    new_id = level4(new_id)
    new_id = level5(new_id)
    new_id = level6(new_id)
    new_id = level4(new_id)
    new_id = level7(new_id)
    answer = new_id
    return answer

def level1(new_id):
    tmp = list(new_id)
    for i in range(0, len(tmp)):
        if(ord(tmp[i])>=65 and ord(tmp[i])<=90):
            tmp[i] = chr(ord(tmp[i]) + 32)
    new_id=''.join(tmp)
    return new_id

def level2(new_id):
    tmp = list(new_id)
    for i in range(0, len(tmp)):
        if((tmp[i] != '-' and tmp[i] != '_' and tmp[i] != '.')and(ord(tmp[i]) < 97 or ord(tmp[i]) > 122)and(ord(tmp[i]) < 48 or ord(tmp[i]) > 57)):
            tmp[i] = ''
    new_id = ''.join(tmp)
    return new_id

def level3(new_id):
    tmp = list(new_id)
    tmp_n = list()
    j = 2
    for i in range(0, len(tmp)):
        if(tmp[i] == '.'):
            try:
                if(tmp[i+1]=='.'):
                    # .이 2개이상존재
                    while(True):
                        try:
                            if(tmp[i+j]!='.'):
                                i = j
                                break
                            j = j + 1
                        except:
                            break
                else:
                    # .이 1개만 존재(수정 X)
                    tmp_n.append(tmp[i])
                    #print(tmp[i], end="")
                    j = 0
            except:
                tmp_n.append(tmp[i])
                #print(tmp[i], end="")
        else:
            tmp_n.append(tmp[i])
            #print(tmp[i], end="")

    new_id = ''.join(tmp_n)
    #print(new_id)
    return new_id

def level4(new_id):
    tmp = list(new_id)
    try:
        if(tmp[0] == '.'):
            tmp[0] = ''
        if(tmp[-1] == '.'):
            tmp[-1] = ''
    except:
        pass
    new_id = ''.join(tmp)
    return new_id

def level5(new_id):
    tmp = list(new_id)
    if(len(tmp)==0):
        tmp.append('a')
    new_id = ''.join(tmp)
    return new_id

def level6(new_id):
    if(len(new_id)>=16):
        new_id = new_id[0:15]
    return new_id

def level7(new_id):
    tmp = list(new_id)
    while(len(tmp)<=2):
        tmp.append(tmp[-1])
    new_id = ''.join(tmp)
    return new_id

k = solution("abcdefghijklmn.p")
print(k)
