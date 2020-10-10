const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) =>{
    //inserir dados
    proffyValue = {
        name : "Acrisio de Jesus",
        avatar: "https://scontent.fmpm1-1.fna.fbcdn.net/v/t1.0-1/p160x160/103490606_1949027238561304_7177176646847771143_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=S7w4BB-SANQAX_kM2G2&_nc_pt=5&_nc_ht=scontent.fmpm1-1.fna&_nc_tp=6&oh=cf443b1cce14b2a9930eab88dea06766&oe=5F54E815",
        whatsapp: "847424654",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        
    }
    
    classValue = {
            subject: 1,
            cost: "4000",
    }

    classScheduleValues = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 1, 
            time_from: 520, 
            time_to: 1220
        }
    ]
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    // Consultar dados inseridos

    //todos os proffs
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)


    //consultar as classes de um determinado professor 
    // e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    //O horario que a pessoa trabalha, por exemplo, é das 8h - 10h
    //o Horario do time_from (8h) precisa ser menor ou igual ao horario solicitado
    //o time_to precisa ser acima 
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)
})