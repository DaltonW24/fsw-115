let data1 = {
    "response_code": 0,
    "results": [
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What was Manfred von Richthofen&#039;s nickname?",
            "correct_answer": "The Red Baron",
            "incorrect_answers": [
                "The High Flying Ace",
                "The Blue Serpent ",
                "The Germany Gunner"
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which Apollo mission was the last one in NASA&#039;s Apollo program?",
            "correct_answer": "Apollo 17",
            "incorrect_answers": [
                "Apollo 13",
                "Apollo 11",
                "Apollo 15"
            ]
        },
        {
            "category": "Sports",
            "type": "boolean",
            "difficulty": "medium",
            "question": "Tennis was once known as Racquetball.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Japanese Anime & Manga",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the last line muttered in the anime film &quot;The End of Evangelion&quot;?",
            "correct_answer": "&quot;How disgusting.&quot;",
            "incorrect_answers": [
                "&quot;Idiot, I won&#039;t let you kill me!&quot;",
                "&quot;Nothing.&quot;",
                "&quot;Goddammit, Shinji.&quot;"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Rocket League is a game which features..",
            "correct_answer": "Cars",
            "incorrect_answers": [
                "Helicopters",
                "Planes",
                "Submarines"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What do the letters in the GMT time zone stand for?",
            "correct_answer": "Greenwich Mean Time",
            "incorrect_answers": [
                "Global Meridian Time",
                "General Median Time",
                "Glasgow Man Time"
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What was the first sport to have been played on the moon?",
            "correct_answer": "Golf",
            "incorrect_answers": [
                "Football",
                "Tennis",
                "Soccer"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Who designed the album cover for True Romance, an album by Estelle?",
            "correct_answer": "Rebecca Sugar",
            "incorrect_answers": [
                "Matt Burnett",
                "Ian Jones Quartey",
                "Ben Leven"
            ]
        },
        {
            "category": "Entertainment: Japanese Anime & Manga",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In &quot;To Love-Ru&quot;, Ren and Run are from what planet?",
            "correct_answer": "Memorze",
            "incorrect_answers": [
                "Deviluke",
                "Mistletoe",
                "Okiwana"
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the capital city of Bermuda?",
            "correct_answer": "Hamilton",
            "incorrect_answers": [
                "Santo Dominigo",
                "San Juan",
                "Havana"
            ]
        }
    ]
}
JSON.stringify(data1)
for(i = 0; i < data1.results.length; i++){
    document.write(data1.results[i])
    console.log(data1.results[0])
    Div2 = document.createElement('div')
    Div2.textContent = data1.results[i]
    document.getElementById('Div1').appendChild(Div2)

}

console.log(data1)
