const question = {
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

const diseases = {
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
        28:1
    },
    'Eosinophilic Granuloma':  {
        21:1,
        23:1,
        29:1,
        30:1
    },
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

const getOrderedQuestion = () => {
    s_count = []
    q_count = {}
    for (let [d, s_dict] of Object.entries(diseases)){
        for (let s in s_dict){
            if (!(s_count.includes(s))){
                s_count.push(s)
                q_count[s] = 1
            }
            else{
                q_count[s]+=1
            }
        }
    }
    // sort by value
    sorted_q = Object.entries(q_count).sort((a,b)=>{
        return (b[1] - a[1])
    })
    result = []
    for (let i=0; i<sorted_q.length; i++){
        result.push(sorted_q[i][0])
    }

    return(result)
    
}

const sorted_symptom = getOrderedQuestion();

const treshold = 0.2

const init_vars = () => {
    let is_checked = {}
    let symptom_questioned_per_disease = {}
    for (let a in diseases){
        let question_per_disease = {}
        for (let b in diseases[a]){
            question_per_disease[b] = false
        }
        is_checked[a] = false
        symptom_questioned_per_disease[a] = question_per_disease
    }

    return({
        is_checked: is_checked,
        symptom_questioned_per_disease: symptom_questioned_per_disease,
        check : 0,
        qa_so_far: {},
        next_question : sorted_symptom[0],
        probabilities_sofar: {},
        is_disease_question_completed:{}
    })
}

const getUserInput= (question_no) => { // icak2
    console.log(question[question_no])
    console.log("Jawaban = 1\n")
    return 1
}

const calculateCFProbability = (symptom_questioned, qa_so_far , disease_questioned)=> {
    let cf_comb = 0
    let cf_list = []
    // calculate CF(H,E)
    for (let i=0; i<symptom_questioned.length; i++){
        const sq = symptom_questioned[i]
        let cf_he = 0
        switch (qa_so_far[sq]){
            case 1: 
                cf_he = 0.9;
                break;
            case 2:
                cf_he = 0;
                break;
            case 3:
                cf_he = 0.4;
                break;
            case 4:
                cf_he = 0.6;
                break;
            case 5:
                cf_he = 0.2;
                break;
        }
        cf_he *= disease_questioned[sq]
        cf_list.push(cf_he)
    }

    // calculate probability
    cf_comb = cf_list[0]
    for (j=0; j< cf_list.length - 1; j++){
        cf_comb += (cf_list[j+1]*(1-cf_comb))
    }
    return cf_comb
}

const run_es = (qa_so_far, next_question, symptom_questioned_per_disease, probabilities_sofar, is_disease_question_completed) => {
    let x = getUserInput(next_question)

    // store user input
    qa_so_far[next_question] = x
    
    for (let d in diseases){
        s = diseases[d]
        cf_comb = 0
        symptom_questioned = []

        // get symptomp that has been questioned
        for (qa in qa_so_far){
            if (s[qa]){
                symptom_questioned.push(qa)
            }
        }

        // calculate CF probability
        if (symptom_questioned.length > 1){
            cf_comb = calculateCFProbability(symptom_questioned, qa_so_far, s)
        }

        //store disease probability
        probabilities_sofar[d] = cf_comb

        // update symptom questioned per disease status
        for (let i=0; i<symptom_questioned.length; i++){
            sq = symptom_questioned[i]
            symptom_questioned_per_disease[d][sq] = true
        }

        // check if all symptom in disease has been questioned
        for (k in symptom_questioned_per_disease){
            v = symptom_questioned_per_disease[k]
            let question_completed = true
            for (symptom in v){
                if (v[symptom] == false){
                    question_completed = false
                    break
                }
            }
            is_disease_question_completed[k] = question_completed
        }  
    } 

    // return computation result
    return({
        qa_so_far: qa_so_far,
        symptom_questioned_per_disease: symptom_questioned_per_disease,
        probabilities_sofar : probabilities_sofar,
        is_disease_question_completed: is_disease_question_completed
    })
}

const checkSymptomQuestioned= (is_disease_question_completed, probabilities_sofar, is_checked)=> {
    let ask_user = false
    for (let k in is_disease_question_completed){
        if (is_disease_question_completed[k] && probabilities_sofar[k] > treshold && (!(is_checked[k]))){
            check = 1
            if (check === 1){
                ask_user = true
                break
            }
            is_checked[k] = true
        }
    }
    return({
        ask_user: ask_user,
        is_checked: is_checked
    })
}

const getDiseaseSortByProb = (prob_questioned_dict) => {
    let disease_sorted_by_probability = Object.entries(prob_questioned_dict).sort((a,b)=>{
        return (a[1][1] - b[1][1])
    })

    let disease_sorted_by_probability_and_symptom_left = []
    for (let i=0; i<disease_sorted_by_probability.length; i++){
        disease_sorted_by_probability_and_symptom_left.push(disease_sorted_by_probability[i][0])
    }
    return disease_sorted_by_probability_and_symptom_left
}

const getQuestionList= (disease_sorted_by_probability_and_symptom_left, symptom_questioned_per_disease)=> {
    let question_list = []
    for (let i=0; i<disease_sorted_by_probability_and_symptom_left.length; i++){
        let disease = disease_sorted_by_probability_and_symptom_left[i]
        for (let symptom in symptom_questioned_per_disease[disease]){
            stat = symptom_questioned_per_disease[disease][symptom]
            if (!(question_list.includes(symptom)) && stat === false ){
                question_list.push(symptom)
            }
        }
    }
    return (question_list)
}

const getNextQuestion = (probabilities_sofar, symptom_questioned_per_disease) => {
    let prob_questioned_dict = {}
    for (d in probabilities_sofar){
        prob_questioned_dict[d] = []
        prob_questioned_dict[d].push(probabilities_sofar[d])
        let q_count = 0
        symp_disease = symptom_questioned_per_disease[d]
        for (s in symp_disease){
            let stat = symp_disease[s]
            if (!stat){
                q_count +=1
            }
        }

        prob_questioned_dict[d].push(q_count)
    }

    // get disease sort by probability
    let disease_sorted_by_probability_and_symptom_left = getDiseaseSortByProb(prob_questioned_dict);

    // get question list
    let question_list = getQuestionList(disease_sorted_by_probability_and_symptom_left, symptom_questioned_per_disease)
    
    return question_list

}

const runInference = () => {
    // init variables
    const init_var = init_vars()
    let is_checked = init_var.is_checked
    let symptom_questioned_per_disease = init_var.symptom_questioned_per_disease
    let check = init_var.check
    let qa_so_far = init_var.qa_so_far
    let next_question = init_var.next_question
    let probabilities_sofar = init_var.probabilities_sofar
    let is_disease_question_completed = init_var.is_disease_question_completed

    let i=1
    // loop
    while (check !== 1){
        console.log(`question ${i}`)
        let after_comp = run_es(qa_so_far, next_question, symptom_questioned_per_disease, probabilities_sofar, is_disease_question_completed)
        qa_so_far = after_comp.qa_so_far;
        symptom_questioned_per_disease = after_comp.symptom_questioned_per_disease;
        probabilities_sofar = after_comp.probabilities_sofar;
        is_disease_question_completed = after_comp.is_disease_question_completed;

        // Check if all symptom in disease has been questioned
        let final_quest = checkSymptomQuestioned(is_disease_question_completed, probabilities_sofar, is_checked)
        let is_ask_user = final_quest.ask_user
        if (is_ask_user){
            console.log("final question")
            break
        }
        is_checked = final_quest.is_checked

        // Get next question
        next_question = getNextQuestion(probabilities_sofar, symptom_questioned_per_disease)

        // heeeeee
        if (next_question.length === 0 || check === 1){
            break
        }
        next_question = next_question[0]

        i+=1;

        if (i===5){
            break
        }
    }
    
}

runInference()
