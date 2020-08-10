const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "75981084914", 
        bio: "<p>Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>",
    }

    classValue = {
        subject: "Química", 
        cost: "20",
        // o proffy id vem do banco de dados
    }

    classScheduleValues = [
        //class id vem do bd
        {
        weekday: [
            0
        ], 
        time_from: [720], 
        time_to: [2720]
        },
        {
            weekday: [
                1
            ], 
            time_from: [520], 
            time_to: [2720]
            }
    ]

   // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados
    const selectedProffys = await db.all("SELECT * FROM proffys")


    // consultar as classes de um professor

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE classes.proffy_id = 1;
    `)

    // o horario que a pessoa trabalha é um intervalo time_from ao time_to
    // ou seja, time_to > time_from

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "820"
        AND class_schedule.time_to > "820"
    `)

})