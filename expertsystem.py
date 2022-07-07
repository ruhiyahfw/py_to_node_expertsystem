from math import sqrt


question = {
    1: 'Demam?',
    2: 'Gag?',
    3: 'Pusing?',
    4: 'Diare?',
    5: 'Bagian Putih mata menguning?',
    6: 'Rongga mulut menguning?',
    7: 'Mata Memerah (Konjungtivis)?',
    8: 'Badan Kurus?',
    9: 'Lemah Lesu?',
    10: 'Tidak Tenang/ Gelisah?',
    11: 'Agresif?',
    12: 'Hyperactive?',
    13: 'Air liur keluar secara berlebihan?',
    14: 'Mata melebar?',
    15: 'Suka di tempat yang gelap?',
    16: 'Reaksi berlebihan terhadap cahaya dan suara?',
    17: 'Bulu Rontok?',
    18: 'Bulu Patah-patah?',
    19: 'Terdapat sisa kulit kering yang terlihat seperti ketombe?',
    20: 'Bulu terlihat bersisik/kasar?',
    21: 'Inflamasi pada kulit (Kulit terlihat merah)?',
    22: 'Luka atau kebotakan pada beberapa bagian tubuh seperti, telinga kepala, kaki ,dan tangan?',
    23: 'Gatal-gatal/ kucing suka menggaruk tubuh?',
    24: 'Kulit Kering?',
    25: 'Luka bernanah?',
    26: 'Kerak kuning (Yellow Crust) pada wajah, leher, atau telinga?',
    27: 'Pembengkakan pada dagu?',
    28: 'Pembengkakan atau Ruam (rash) atau bintil merah pada kulit?',
    29: 'Bisul pada hidung, kaki, atau mulut (terlihat seperti sariawan)?',
    30: 'Luka basah pada leher atau paha?',
    31: 'Komedo (Blackheads)?',
    32: 'Jerawat di sekitar dagu?',
    33: 'Tercium Bau Busuk?',
    34: 'Luka berbentuk Benjolan?',
    35: 'Bulu ekor rontok?',
    36: 'Bulu tipis di sekitar ekor?',
    37: 'Ekor berminyak dan berbau?',
    38: 'Terdapat Cairan Hitam Kecoklatan Ekor?',
    39: 'Terlihat Ada Serangga Kecil Di Bulu Kucing?',
    40: 'Terlihat butir telur dalam bulu kucing?',
    41: 'Menggigit ekor,lengan,paha,dan bokong terus menerus?',
    42: 'Bersin Terus menerus?',
    43: 'Pilek?',
    44: 'Sariawan?',
    45: 'Peradangan pada hidung?',
    46: 'Terdapat luka  pada rongga mulut?',
    47: 'Peradangan selaput bening mata?',
    48: 'Terlihat ada kotoran yang menempel pada bulu dan tidak bisa hilang?',
    49: 'Terlihat luka atau infeksi pada wajah, hidung, kaki, atau ekor?',
    50: 'Kebotakan pada area benjolan?',
    51: 'Kehilangan nafsu makan?'

    
}

diseases = {
    'Leptospirosis': {
        1:1, 
        2:1, 
        3:1, 
        4:1, 
        5:1, 
        6:1, 
        7:1, 
        8:1, 
        9:1
        },  
        
    'Rabies': {
        10:1,
        11:1,
        12:1,
        13:1,
        14:1,
        15:1,
        16:1
        },
        
    'Ringworm/ Skin Fungus':  {
        17:1,
        18:1,
        19:1,
        20:1,
        21:1,
        22:1,
        23:1
    },
    
    'Scabies':{
        17:1,
        21:1,
        23:1,
        24:1,
        25:1,
        26:1,
        27:1
    },

    'Yeast': {
        9:1,
        17:1,
        23:1,
        24:1,
        28:1},
    
    'Eosinophilic Granuloma':  {
        21:1,
        23:1,
        29:1,
        30:1},

    'Feline Acne': {
        31:1,
        32:1,
        33:1,
        34:1
        },
    
     'Stud Tail': {
        35:1,
        36:1,
        37:1,
        38:1
    },
    
    'Lice /Pediculosis ': {
        9:1,
        10:1,
        23:1,
        24:1,
        39:1,
        40:1,
        41:1
    },
    
    'Allergic Dermatitis ': {
        10:1,
        21:1,
        23:1,
        24:1,
        36:1,
        41:1,
        42:1
    },

    'Flu Kucing': {
        43:1,
        44:1,
        45:1,
        46:1,
        47:1
    },

    'Kutu Kucing': {
        10:1,
        17:1,
        21:1,
        23:1,
        41:1,
        48:1
    },

    'Sporotrichosis': {
        1:1,
        9:1,
        17:1,
        23:1,
        27:1,
        49:1,
        51:1
    },
    
    'Abscesses': {
        1:1,
        33:1,
        34:1,
        50:1
    },
    
    'Pemphigus': {
        17:1, 
        21:1,
        23:1
    }
}


def getOrderedQuestion():
    q_count = {}
    s_count = []
    for d,s_dict in diseases.items():
        for s in s_dict.keys():
            if s not in s_count:
                s_count.append(s)
                q_count[s] = 1
            else:
                q_count[s] = q_count[s] + 1
    return sorted(q_count,key=lambda k: q_count[k], reverse=True)

def getNextQuestion(probabilities_sofar, symptom_questioned_per_disease):
    #print(probabilities_sofar)
    # print("symptom_questioned_per_disease")
    # print(symptom_questioned_per_disease)
    prob_questioned_dict = {}
    for d,p in probabilities_sofar.items():
        #print("\n+++++")
        #print(d)
        prob_questioned_dict[d] = []
        prob_questioned_dict[d].append(p)
        q_count = 0
        for _,status in symptom_questioned_per_disease[d].items():
            #print(status)
            if status == False:
                q_count += 1
        prob_questioned_dict[d].append(q_count)

    # print("@@@@@@@@@@@")
    # print(prob_questioned_dict)

    disease_sorted_by_probability = {key: value for key, value in sorted(prob_questioned_dict.items(), key=lambda item: item[1][0], reverse=True)}
    print("disease_sorted_by_probability")
    print(disease_sorted_by_probability)

    disease_sorted_by_probability_and_symptom_left = sorted(disease_sorted_by_probability, key=lambda k: prob_questioned_dict[k][1], reverse=False)
    # print("%%%%%%%%%%%%")
    # print(disease_sorted_by_probability_and_symptom_left)

    
    # print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`")
    # print(disease_sorted_by_probability_and_symptom_left)

    question_list = []
    for disease in disease_sorted_by_probability_and_symptom_left:
        for symptom , status in symptom_questioned_per_disease[disease].items():
            if symptom not in question_list and status == False :
                question_list.append(symptom)
    return question_list

def calculateCFProbability(symptom_questioned, qa_so_far , disease_questioned):
    cf_comb = 0
    cf_list = []

    # CALCULATE CF(H,E)
    for sq in symptom_questioned:

        cf_he = 0
        if qa_so_far[sq] == 1:
            cf_he = 0.9
        elif qa_so_far[sq] == 2:
            cf_he = 0
        elif qa_so_far[sq] == 3:
            cf_he = 0.4
        elif qa_so_far[sq] == 4:
            cf_he = 0.6
        elif qa_so_far[sq] == 5:
            cf_he = 0.2

        cf_he = cf_he * disease_questioned[sq]
        cf_list.append(cf_he)

    # CALCULATE PROBABILITY
    cf_comb = cf_list[0]
    for j in range(len(cf_list) - 1):
        cf_comb = cf_comb +  (cf_list[j+1] * (1-cf_comb))
    return cf_comb

def runInference():
    # INIT
    sorted_symptom = getOrderedQuestion()
    qa_so_far = {}
    probabilities_sofar = {}
    is_disease_question_completed = {}
    is_checked = {dis:False for dis, _ in diseases.items()}
    symptom_questioned_per_disease = {
        dis:{
            symp: False for symp in val.keys()
            } for dis,val in diseases.items()}
    i = 1
    check = 0
    threshold = 0.2
    next_question = sorted_symptom[0]
    print("next question", next_question)
    # ITERATION
    while int(check) != 1:
        # GET USER INPUT
        print("Question", i,":",question[next_question])
        x = int(input("\n1. Yes\n2. No\n3. Don't Know\n4. Probably\n5. Probably Not\n"))
        print()

        # Store user input
        qa_so_far[next_question] = int(x)

        for d,s in diseases.items():
            # print("--------------")
            # print(d)

            cf_comb = 0
            symptom_questioned = []

            # Get symptom that has been questioned
            for qa in qa_so_far.keys():
                if qa in s.keys():
                    symptom_questioned.append(qa)

            
            #print(symptom_questioned)

            # Calculate CF probability
            if len(symptom_questioned) > 1:
                cf_comb = calculateCFProbability(symptom_questioned, qa_so_far , s)

            # Store disease probability
            probabilities_sofar[d] = cf_comb 

            #print(probabilities_sofar)

            # Update symptom questioned per disease status
            for sq in symptom_questioned:
                symptom_questioned_per_disease[d][sq] = True

            # Check if all symptom in disease has been questioned
            for k,v in symptom_questioned_per_disease.items():
                question_completed = True
                for symptom , status in v.items():
                    if status == False:
                       question_completed = False
                       break
                is_disease_question_completed[k] = question_completed
        # print("qa so far : ")
        # print(qa_so_far)
        # print("-----------")
        # print("symptom_questioned_per_disease : ")
        # print(symptom_questioned_per_disease)
        # print("-----------")
        # print("probabilities_sofar : ")
        # print(probabilities_sofar)
        # print("-----------")
        # print("is_disease_question_completed : ")
        # print(is_disease_question_completed)
        # print("-----------")
        # Ask user if symptom describe disease
        print("******")
        print(probabilities_sofar)
        for k,v in is_disease_question_completed.items():
            if v and probabilities_sofar[k] > threshold and not(is_checked[k]):
                print("is disease",k,"?" )
                check = input("1.Yes \n2. No\n")
                if(int(check) == 1):
                    break
                is_checked[k] = True

        # print("is checked")
        # print(is_checked)

        # Get Next Question
        next_question = getNextQuestion(probabilities_sofar, symptom_questioned_per_disease)
        # print("next ques")
        # print(next_question)
        i = i + 1

        if len(next_question) == 0 or int(check) == 1:
            break 
        
        next_question = next_question[0]


        # print("Current I ->",i)
        # print(probabilities_sofar)
        
    print(probabilities_sofar)



if __name__ == '__main__':
    runInference()
