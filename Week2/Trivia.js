let data1 = {
    "response_code": 0,
    "results": [
        {
            "category": "Animals",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What does &quot;hippopotamus&quot; mean and in what langauge?",
            "correct_answer": "River Horse (Greek)",
            "incorrect_answers": [
                "River Horse (Latin)",
                "Fat Pig (Greek)",
                "Fat Pig (Latin)"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "hard",
            "question": "In the Gamecube Version of &quot;Resident Evil&quot; what text document is open on the monitor of the computer in the Visual Data Room?",
            "correct_answer": "A GDC Document",
            "incorrect_answers": [
                "Text Document on Herbs",
                "Nothing",
                "Document on B.O.Ws"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which Game Boy from the Game Boy series of portable video game consoles was released first?",
            "correct_answer": "Game Boy Color",
            "incorrect_answers": [
                "Game Boy Advance",
                "Game Boy Micro",
                "Game Boy Advance SP"
            ]
        },
        {
            "category": "Entertainment: Japanese Anime & Manga",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the anime Black Butler, who is betrothed to be married to Ciel Phantomhive?",
            "correct_answer": "Elizabeth Midford",
            "incorrect_answers": [
                "Rachel Phantomhive",
                "Alexis Leon Midford",
                "Angelina Dalles"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The Windows 7 operating system has six main editions.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In which year did the first Monster Hunter game get released?",
            "correct_answer": "2004",
            "incorrect_answers": [
                "2006",
                "2005",
                "2002"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "&quot;The Potato Sack&quot; was a collection of indie games released on Steam in 2011 as a promotion for which game?",
            "correct_answer": "Portal 2",
            "incorrect_answers": [
                "Left 4 Dead 2",
                "Half-Life 3",
                "Dota 2"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What household item make the characters of &quot;Steins; Gate&quot; travel through time?",
            "correct_answer": "Microwave",
            "incorrect_answers": [
                "Computer",
                "Refrigerator",
                "Televison"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What does the term MIME stand for, in regards to computing?",
            "correct_answer": "Multipurpose Internet Mail Extensions",
            "incorrect_answers": [
                "Mail Internet Mail Exchange",
                "Multipurpose Interleave Mail Exchange",
                "Mail Interleave Method Exchange"
            ]
        },
        {
            "category": "Entertainment: Cartoon & Animations",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is Dipper&#039;s real name from &quot;Gravity Falls&quot;?",
            "correct_answer": "Mason Pines",
            "incorrect_answers": [
                "Mable Pines",
                "Jason Pines",
                "Mark Pines"
            ]
        }
    ]
};
JSON.stringify(data1)
for(i = 0; i < data1.results.length; i++){
    document.write(data1.results[i])
    console.log(data1.results[0])
    Div2 = document.createElement('div')
    Div2.textContent = data1.results[i]
    document.getElementById('Div1').appendChild(Div2)

}

console.log(data1)
