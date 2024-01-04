document.addEventListener('DOMContentLoaded', function () {
    examples = [{ question: "20 - 1 = ?", answer: 19 },
    { question: "20 - 2 = ?", answer: 18 },
    { question: "20 - 3 = ?", answer: 17 },
    { question: "20 - 4 = ?", answer: 16 },
    { question: "20 - 5 = ?", answer: 15 },
    { question: "20 - 6 = ?", answer: 14 },
    { question: "20 - 7 = ?", answer: 13 },
    { question: "20 - 8 = ?", answer: 12 },
    { question: "20 - 9 = ?", answer: 11 },
    { question: "20 - 10 = ?", answer: 10 },
    { question: "20 - 11 = ?", answer: 9 },
    { question: "20 - 12 = ?", answer: 8 },
    { question: "20 - 13 = ?", answer: 7 },
    { question: "20 - 14 = ?", answer: 6 },
    { question: "20 - 15 = ?", answer: 5 },
    { question: "20 - 16 = ?", answer: 4 },
    { question: "20 - 17 = ?", answer: 3 },
    { question: "20 - 18 = ?", answer: 2 },
    { question: "20 - 19 = ?", answer: 1 },
    { question: "19 - 1 = ?", answer: 18 },
    { question: "19 - 2 = ?", answer: 17 },
    { question: "19 - 3 = ?", answer: 16 },
    { question: "19 - 4 = ?", answer: 15 },
    { question: "19 - 5 = ?", answer: 14 },
    { question: "19 - 6 = ?", answer: 13 },
    { question: "19 - 7 = ?", answer: 12 },
    { question: "19 - 8 = ?", answer: 11 },
    { question: "19 - 9 = ?", answer: 10 },
    { question: "19 - 10 = ?", answer: 9 },
    { question: "19 - 11 = ?", answer: 8 },
    { question: "19 - 12 = ?", answer: 7 },
    { question: "19 - 13 = ?", answer: 6 },
    { question: "19 - 14 = ?", answer: 5 },
    { question: "19 - 15 = ?", answer: 4 },
    { question: "19 - 16 = ?", answer: 3 },
    { question: "19 - 17 = ?", answer: 2 },
    { question: "19 - 18 = ?", answer: 1 },
    { question: "18 - 1 = ?", answer: 17 },
    { question: "18 - 2 = ?", answer: 16 },
    { question: "18 - 3 = ?", answer: 15 },
    { question: "18 - 4 = ?", answer: 14 },
    { question: "18 - 5 = ?", answer: 13 },
    { question: "18 - 6 = ?", answer: 12 },
    { question: "18 - 7 = ?", answer: 11 },
    { question: "18 - 8 = ?", answer: 10 },
    { question: "18 - 9 = ?", answer: 9 },
    { question: "18 - 10 = ?", answer: 8 },
    { question: "18 - 11 = ?", answer: 7 },
    { question: "18 - 12 = ?", answer: 6 },
    { question: "18 - 13 = ?", answer: 5 },
    { question: "18 - 14 = ?", answer: 4 },
    { question: "18 - 15 = ?", answer: 3 },
    { question: "18 - 16 = ?", answer: 2 },
    { question: "18 - 17 = ?", answer: 1 },
    { question: "17 - 1 = ?", answer: 16 },
    { question: "17 - 2 = ?", answer: 15 },
    { question: "17 - 3 = ?", answer: 14 },
    { question: "17 - 4 = ?", answer: 13 },
    { question: "17 - 5 = ?", answer: 12 },
    { question: "17 - 6 = ?", answer: 11 },
    { question: "17 - 7 = ?", answer: 10 },
    { question: "17 - 8 = ?", answer: 9 },
    { question: "17 - 9 = ?", answer: 8 },
    { question: "17 - 10 = ?", answer: 7 },
    { question: "17 - 11 = ?", answer: 6 },
    { question: "17 - 12 = ?", answer: 5 },
    { question: "17 - 13 = ?", answer: 4 },
    { question: "17 - 14 = ?", answer: 3 },
    { question: "17 - 15 = ?", answer: 2 },
    { question: "17 - 16 = ?", answer: 1 },
    { question: "16 - 1 = ?", answer: 15 },
    { question: "16 - 2 = ?", answer: 14 },
    { question: "16 - 3 = ?", answer: 13 },
    { question: "16 - 4 = ?", answer: 12 },
    { question: "16 - 5 = ?", answer: 11 },
    { question: "16 - 6 = ?", answer: 10 },
    { question: "16 - 7 = ?", answer: 9 },
    { question: "16 - 8 = ?", answer: 8 },
    { question: "16 - 9 = ?", answer: 7 },
    { question: "16 - 10 = ?", answer: 6 },
    { question: "16 - 11 = ?", answer: 5 },
    { question: "16 - 12 = ?", answer: 4 },
    { question: "16 - 13 = ?", answer: 3 },
    { question: "16 - 14 = ?", answer: 2 },
    { question: "16 - 15 = ?", answer: 1 },
    { question: "15 - 1 = ?", answer: 14 },
    { question: "15 - 2 = ?", answer: 13 },
    { question: "15 - 3 = ?", answer: 12 },
    { question: "15 - 4 = ?", answer: 11 },
    { question: "15 - 5 = ?", answer: 10 },
    { question: "15 - 6 = ?", answer: 9 },
    { question: "15 - 7 = ?", answer: 8 },
    { question: "15 - 8 = ?", answer: 7 },
    { question: "15 - 9 = ?", answer: 6 },
    { question: "15 - 10 = ?", answer: 5 },
    { question: "15 - 11 = ?", answer: 4 },
    { question: "15 - 12 = ?", answer: 3 },
    { question: "15 - 13 = ?", answer: 2 },
    { question: "15 - 14 = ?", answer: 1 },
    { question: "14 - 1 = ?", answer: 13 },
    { question: "14 - 2 = ?", answer: 12 },
    { question: "14 - 3 = ?", answer: 11 },
    { question: "14 - 4 = ?", answer: 10 },
    { question: "14 - 5 = ?", answer: 9 },
    { question: "14 - 6 = ?", answer: 8 },
    { question: "14 - 7 = ?", answer: 7 },
    { question: "14 - 8 = ?", answer: 6 },
    { question: "14 - 9 = ?", answer: 5 },
    { question: "14 - 10 = ?", answer: 4 },
    { question: "14 - 11 = ?", answer: 3 },
    { question: "14 - 12 = ?", answer: 2 },
    { question: "14 - 13 = ?", answer: 1 },
    { question: "13 - 1 = ?", answer: 12 },
    { question: "13 - 2 = ?", answer: 11 },
    { question: "13 - 3 = ?", answer: 10 },
    { question: "13 - 4 = ?", answer: 9 },
    { question: "13 - 5 = ?", answer: 8 },
    { question: "13 - 6 = ?", answer: 7 },
    { question: "13 - 7 = ?", answer: 6 },
    { question: "13 - 8 = ?", answer: 5 },
    { question: "13 - 9 = ?", answer: 4 },
    { question: "13 - 10 = ?", answer: 3 },
    { question: "13 - 11 = ?", answer: 2 },
    { question: "13 - 12 = ?", answer: 1 },
    { question: "12 - 1 = ?", answer: 11 },
    { question: "12 - 2 = ?", answer: 10 },
    { question: "12 - 3 = ?", answer: 9 },
    { question: "12 - 4 = ?", answer: 8 },
    { question: "12 - 5 = ?", answer: 7 },
    { question: "12 - 6 = ?", answer: 6 },
    { question: "12 - 7 = ?", answer: 5 },
    { question: "12 - 8 = ?", answer: 4 },
    { question: "12 - 9 = ?", answer: 3 },
    { question: "12 - 10 = ?", answer: 2 },
    { question: "12 - 11 = ?", answer: 1 },
    { question: "11 - 1 = ?", answer: 10 },
    { question: "11 - 2 = ?", answer: 9 },
    { question: "11 - 3 = ?", answer: 8 },
    { question: "11 - 4 = ?", answer: 7 },
    { question: "11 - 5 = ?", answer: 6 },
    { question: "11 - 6 = ?", answer: 5 },
    { question: "11 - 7 = ?", answer: 4 },
    { question: "11 - 8 = ?", answer: 3 },
    { question: "11 - 9 = ?", answer: 2 },
    { question: "11 - 10 = ?", answer: 1 },
    { question: "10 - 1 = ?", answer: 9 },
    { question: "10 - 2 = ?", answer: 8 },
    { question: "10 - 3 = ?", answer: 7 },
    { question: "10 - 4 = ?", answer: 6 },
    { question: "10 - 5 = ?", answer: 5 },
    { question: "10 - 6 = ?", answer: 4 },
    { question: "10 - 7 = ?", answer: 3 },
    { question: "10 - 8 = ?", answer: 2 },
    { question: "10 - 9 = ?", answer: 1 },
    { question: "9 - 1 = ?", answer: 8 },
    { question: "9 - 2 = ?", answer: 7 },
    { question: "9 - 3 = ?", answer: 6 },
    { question: "9 - 4 = ?", answer: 5 },
    { question: "9 - 5 = ?", answer: 4 },
    { question: "9 - 6 = ?", answer: 3 },
    { question: "9 - 7 = ?", answer: 2 },
    { question: "9 - 8 = ?", answer: 1 },
    { question: "8 - 1 = ?", answer: 7 },
    { question: "8 - 2 = ?", answer: 6 },
    { question: "8 - 3 = ?", answer: 5 },
    { question: "8 - 4 = ?", answer: 4 },
    { question: "8 - 5 = ?", answer: 3 },
    { question: "8 - 6 = ?", answer: 2 },
    { question: "8 - 7 = ?", answer: 1 },
    { question: "7 - 1 = ?", answer: 6 },
    { question: "7 - 2 = ?", answer: 5 },
    { question: "7 - 3 = ?", answer: 4 },
    { question: "7 - 4 = ?", answer: 3 },
    { question: "7 - 5 = ?", answer: 2 },
    { question: "7 - 6 = ?", answer: 1 },
    { question: "6 - 1 = ?", answer: 5 },
    { question: "6 - 2 = ?", answer: 4 },
    { question: "6 - 3 = ?", answer: 3 },
    { question: "6 - 4 = ?", answer: 2 },
    { question: "6 - 5 = ?", answer: 1 },
    { question: "5 - 1 = ?", answer: 4 },
    { question: "5 - 2 = ?", answer: 3 },
    { question: "5 - 3 = ?", answer: 2 },
    { question: "5 - 4 = ?", answer: 1 },
    { question: "4 - 1 = ?", answer: 3 },
    { question: "4 - 2 = ?", answer: 2 },
    { question: "4 - 3 = ?", answer: 1 },
    { question: "3 - 1 = ?", answer: 2 },
    { question: "3 - 2 = ?", answer: 1 },
    { question: "2 - 1 = ?", answer: 1 },
    { question: "1 + 1 = ?", answer: 2 },
    { question: "2 + 1 = ?", answer: 3 },
    { question: "3 + 1 = ?", answer: 4 },
    { question: "4 + 1 = ?", answer: 5 },
    { question: "5 + 1 = ?", answer: 6 },
    { question: "6 + 1 = ?", answer: 7 },
    { question: "7 + 1 = ?", answer: 8 },
    { question: "8 + 1 = ?", answer: 9 },
    { question: "9 + 1 = ?", answer: 10 },
    { question: "10 + 1 = ?", answer: 11 },
    { question: "11 + 1 = ?", answer: 12 },
    { question: "12 + 1 = ?", answer: 13 },
    { question: "13 + 1 = ?", answer: 14 },
    { question: "14 + 1 = ?", answer: 15 },
    { question: "15 + 1 = ?", answer: 16 },
    { question: "16 + 1 = ?", answer: 17 },
    { question: "17 + 1 = ?", answer: 18 },
    { question: "18 + 1 = ?", answer: 19 },
    { question: "19 + 1 = ?", answer: 20 },
    { question: "1 + 2 = ?", answer: 3 },
    { question: "2 + 2 = ?", answer: 4 },
    { question: "3 + 2 = ?", answer: 5 },
    { question: "4 + 2 = ?", answer: 6 },
    { question: "5 + 2 = ?", answer: 7 },
    { question: "6 + 2 = ?", answer: 8 },
    { question: "7 + 2 = ?", answer: 9 },
    { question: "8 + 2 = ?", answer: 10 },
    { question: "9 + 2 = ?", answer: 11 },
    { question: "10 + 2 = ?", answer: 12 },
    { question: "11 + 2 = ?", answer: 13 },
    { question: "12 + 2 = ?", answer: 14 },
    { question: "13 + 2 = ?", answer: 15 },
    { question: "14 + 2 = ?", answer: 16 },
    { question: "15 + 2 = ?", answer: 17 },
    { question: "16 + 2 = ?", answer: 18 },
    { question: "17 + 2 = ?", answer: 19 },
    { question: "18 + 2 = ?", answer: 20 },
    { question: "1 + 3 = ?", answer: 4 },
    { question: "2 + 3 = ?", answer: 5 },
    { question: "3 + 3 = ?", answer: 6 },
    { question: "4 + 3 = ?", answer: 7 },
    { question: "5 + 3 = ?", answer: 8 },
    { question: "6 + 3 = ?", answer: 9 },
    { question: "7 + 3 = ?", answer: 10 },
    { question: "8 + 3 = ?", answer: 11 },
    { question: "9 + 3 = ?", answer: 12 },
    { question: "10 + 3 = ?", answer: 13 },
    { question: "11 + 3 = ?", answer: 14 },
    { question: "12 + 3 = ?", answer: 15 },
    { question: "13 + 3 = ?", answer: 16 },
    { question: "14 + 3 = ?", answer: 17 },
    { question: "15 + 3 = ?", answer: 18 },
    { question: "16 + 3 = ?", answer: 19 },
    { question: "17 + 3 = ?", answer: 20 },
    { question: "1 + 4 = ?", answer: 5 },
    { question: "2 + 4 = ?", answer: 6 },
    { question: "3 + 4 = ?", answer: 7 },
    { question: "4 + 4 = ?", answer: 8 },
    { question: "5 + 4 = ?", answer: 9 },
    { question: "6 + 4 = ?", answer: 10 },
    { question: "7 + 4 = ?", answer: 11 },
    { question: "8 + 4 = ?", answer: 12 },
    { question: "9 + 4 = ?", answer: 13 },
    { question: "10 + 4 = ?", answer: 14 },
    { question: "11 + 4 = ?", answer: 15 },
    { question: "12 + 4 = ?", answer: 16 },
    { question: "13 + 4 = ?", answer: 17 },
    { question: "14 + 4 = ?", answer: 18 },
    { question: "15 + 4 = ?", answer: 19 },
    { question: "16 + 4 = ?", answer: 20 },
    { question: "1 + 5 = ?", answer: 6 },
    { question: "2 + 5 = ?", answer: 7 },
    { question: "3 + 5 = ?", answer: 8 },
    { question: "4 + 5 = ?", answer: 9 },
    { question: "5 + 5 = ?", answer: 10 },
    { question: "6 + 5 = ?", answer: 11 },
    { question: "7 + 5 = ?", answer: 12 },
    { question: "8 + 5 = ?", answer: 13 },
    { question: "9 + 5 = ?", answer: 14 },
    { question: "10 + 5 = ?", answer: 15 },
    { question: "11 + 5 = ?", answer: 16 },
    { question: "12 + 5 = ?", answer: 17 },
    { question: "13 + 5 = ?", answer: 18 },
    { question: "14 + 5 = ?", answer: 19 },
    { question: "15 + 5 = ?", answer: 20 },
    { question: "1 + 6 = ?", answer: 7 },
    { question: "2 + 6 = ?", answer: 8 },
    { question: "3 + 6 = ?", answer: 9 },
    { question: "4 + 6 = ?", answer: 10 },
    { question: "5 + 6 = ?", answer: 11 },
    { question: "6 + 6 = ?", answer: 12 },
    { question: "7 + 6 = ?", answer: 13 },
    { question: "8 + 6 = ?", answer: 14 },
    { question: "9 + 6 = ?", answer: 15 },
    { question: "10 + 6 = ?", answer: 16 },
    { question: "11 + 6 = ?", answer: 17 },
    { question: "12 + 6 = ?", answer: 18 },
    { question: "13 + 6 = ?", answer: 19 },
    { question: "14 + 6 = ?", answer: 20 },
    { question: "1 + 7 = ?", answer: 8 },
    { question: "2 + 7 = ?", answer: 9 },
    { question: "3 + 7 = ?", answer: 10 },
    { question: "4 + 7 = ?", answer: 11 },
    { question: "5 + 7 = ?", answer: 12 },
    { question: "6 + 7 = ?", answer: 13 },
    { question: "7 + 7 = ?", answer: 14 },
    { question: "8 + 7 = ?", answer: 15 },
    { question: "9 + 7 = ?", answer: 16 },
    { question: "10 + 7 = ?", answer: 17 },
    { question: "11 + 7 = ?", answer: 18 },
    { question: "12 + 7 = ?", answer: 19 },
    { question: "13 + 7 = ?", answer: 20 },
    { question: "1 + 8 = ?", answer: 9 },
    { question: "2 + 8 = ?", answer: 10 },
    { question: "3 + 8 = ?", answer: 11 },
    { question: "4 + 8 = ?", answer: 12 },
    { question: "5 + 8 = ?", answer: 13 },
    { question: "6 + 8 = ?", answer: 14 },
    { question: "7 + 8 = ?", answer: 15 },
    { question: "8 + 8 = ?", answer: 16 },
    { question: "9 + 8 = ?", answer: 17 },
    { question: "10 + 8 = ?", answer: 18 },
    { question: "11 + 8 = ?", answer: 19 },
    { question: "12 + 8 = ?", answer: 20 },
    { question: "1 + 9 = ?", answer: 10 },
    { question: "2 + 9 = ?", answer: 11 },
    { question: "3 + 9 = ?", answer: 12 },
    { question: "4 + 9 = ?", answer: 13 },
    { question: "5 + 9 = ?", answer: 14 },
    { question: "6 + 9 = ?", answer: 15 },
    { question: "7 + 9 = ?", answer: 16 },
    { question: "8 + 9 = ?", answer: 17 },
    { question: "9 + 9 = ?", answer: 18 },
    { question: "10 + 9 = ?", answer: 19 },
    { question: "11 + 9 = ?", answer: 20 },
    { question: "1 + 10 = ?", answer: 11 },
    { question: "2 + 10 = ?", answer: 12 },
    { question: "3 + 10 = ?", answer: 13 },
    { question: "4 + 10 = ?", answer: 14 },
    { question: "5 + 10 = ?", answer: 15 },
    { question: "6 + 10 = ?", answer: 16 },
    { question: "7 + 10 = ?", answer: 17 },
    { question: "8 + 10 = ?", answer: 18 },
    { question: "9 + 10 = ?", answer: 19 },
    { question: "10 + 10 = ?", answer: 20 },
    { question: "1 + 11 = ?", answer: 12 },
    { question: "2 + 11 = ?", answer: 13 },
    { question: "3 + 11 = ?", answer: 14 },
    { question: "4 + 11 = ?", answer: 15 },
    { question: "5 + 11 = ?", answer: 16 },
    { question: "6 + 11 = ?", answer: 17 },
    { question: "7 + 11 = ?", answer: 18 },
    { question: "8 + 11 = ?", answer: 19 },
    { question: "9 + 11 = ?", answer: 20 },
    { question: "1 + 12 = ?", answer: 13 },
    { question: "2 + 12 = ?", answer: 14 },
    { question: "3 + 12 = ?", answer: 15 },
    { question: "4 + 12 = ?", answer: 16 },
    { question: "5 + 12 = ?", answer: 17 },
    { question: "6 + 12 = ?", answer: 18 },
    { question: "7 + 12 = ?", answer: 19 },
    { question: "8 + 12 = ?", answer: 20 },
    { question: "1 + 13 = ?", answer: 14 },
    { question: "2 + 13 = ?", answer: 15 },
    { question: "3 + 13 = ?", answer: 16 },
    { question: "4 + 13 = ?", answer: 17 },
    { question: "5 + 13 = ?", answer: 18 },
    { question: "6 + 13 = ?", answer: 19 },
    { question: "7 + 13 = ?", answer: 20 },
    { question: "1 + 14 = ?", answer: 15 },
    { question: "2 + 14 = ?", answer: 16 },
    { question: "3 + 14 = ?", answer: 17 },
    { question: "4 + 14 = ?", answer: 18 },
    { question: "5 + 14 = ?", answer: 19 },
    { question: "6 + 14 = ?", answer: 20 },
    { question: "1 + 15 = ?", answer: 16 },
    { question: "2 + 15 = ?", answer: 17 },
    { question: "3 + 15 = ?", answer: 18 },
    { question: "4 + 15 = ?", answer: 19 },
    { question: "5 + 15 = ?", answer: 20 },
    { question: "1 + 16 = ?", answer: 17 },
    { question: "2 + 16 = ?", answer: 18 },
    { question: "3 + 16 = ?", answer: 19 },
    { question: "4 + 16 = ?", answer: 20 },
    { question: "1 + 17 = ?", answer: 18 },
    { question: "2 + 17 = ?", answer: 19 },
    { question: "3 + 17 = ?", answer: 20 },
    { question: "1 + 18 = ?", answer: 19 },
    { question: "2 + 18 = ?", answer: 20 },
    { question: "1 + 19 = ?", answer: 20 },
    ]

    examplesForStudent = []
    create = document.getElementById('create');
    show = document.getElementById('show');
    example1 = document.getElementById('example-1');
    example2 = document.getElementById('example-2');
    example3 = document.getElementById('example-3');
    example4 = document.getElementById('example-4');
    example5 = document.getElementById('example-5');
    question1 = document.getElementById('q1');
    question2 = document.getElementById('q2');
    question3 = document.getElementById('q3');
    question4 = document.getElementById('q4');
    question5 = document.getElementById('q5');
    submit = document.getElementById('submit');
    input1 = document.getElementById('i1');
    input2 = document.getElementById('i2');
    input3 = document.getElementById('i3');
    input4 = document.getElementById('i4');
    input5 = document.getElementById('i5');
    _point = document.getElementById('point');
    um = document.getElementById('um');
    point = 0
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function ShowScreen() {
        var raw = localStorage.getItem('examples')
        var ExamplesArray = JSON.parse(raw)
        question1.textContent = "Вопрос: " + ExamplesArray[0].question
        question2.textContent = "Вопрос: " + ExamplesArray[1].question
        question3.textContent = "Вопрос: " + ExamplesArray[2].question
        question4.textContent = "Вопрос: " + ExamplesArray[3].question
        question5.textContent = "Вопрос: " + ExamplesArray[4].question
    }

    var raw = localStorage.getItem('examples')
    var ExamplesArray = JSON.parse(raw)


    submit.addEventListener('click', function () {
        var raw = localStorage.getItem('examples')
        var ExamplesArray = JSON.parse(raw)
        if (input1.value == JSON.stringify(ExamplesArray[0].answer)) {
            example1.classList.remove('inCorrectly')
            example1.classList.add('correct');
            input1.setAttribute('disabled', 1);
            point++;
        } else {
            example1.classList.add('inCorrectly')
            input1.setAttribute('disabled', 1);
        }
        if (input2.value == JSON.stringify(ExamplesArray[1].answer)) {
            example2.classList.remove('inCorrectly')
            example2.classList.add('correct');
            input2.setAttribute('disabled', 1);
            point++;
        } else {
            example2.classList.add('inCorrectly')
            input2.setAttribute('disabled', 1);
        }
        if (input3.value == JSON.stringify(ExamplesArray[2].answer)) {
            example3.classList.remove('inCorrectly')
            example3.classList.add('correct');
            input3.setAttribute('disabled', 1);
            point++;
        } else {
            example3.classList.add('inCorrectly')
            input3.setAttribute('disabled', 1);
        }
        if (input4.value == JSON.stringify(ExamplesArray[3].answer)) {
            example4.classList.remove('inCorrectly')
            example4.classList.add('correct');
            input4.setAttribute('disabled', 1);
            point++;
        } else {
            example4.classList.add('inCorrectly')
            input4.setAttribute('disabled', 1);
        }
        if (input5.value == JSON.stringify(ExamplesArray[4].answer)) {
            example5.classList.remove('inCorrectly')
            example5.classList.add('correct');
            input5.setAttribute('disabled', 1);
            point++;
        } else {
            example5.classList.add('inCorrectly')
            input5.setAttribute('disabled', 1);
        }
        _point.textContent = point
        submit.setAttribute('disabled', 1);
        examplesClone = [];
        examplesForStudent = []
        examplesClone = examples.slice()
        shuffle(examplesClone);
        var example_1 = examplesClone.shift();
        var example_2 = examplesClone.shift();
        var example_3 = examplesClone.shift();
        var example_4 = examplesClone.shift();
        var example_5 = examplesClone.shift();
        examplesForStudent.push(example_1, example_2, example_3, example_4, example_5)
        localStorage.setItem('examples', JSON.stringify(examplesForStudent))
    })

    create.addEventListener("click", function () {
        examplesClone = [];
        examplesForStudent = []
        examplesClone = examples.slice()
        shuffle(examplesClone);
        var example_1 = examplesClone.shift();
        var example_2 = examplesClone.shift();
        var example_3 = examplesClone.shift();
        var example_4 = examplesClone.shift();
        var example_5 = examplesClone.shift();
        examplesForStudent.push(example_1, example_2, example_3, example_4, example_5)
        localStorage.setItem('examples', JSON.stringify(examplesForStudent))
        ShowScreen();
    })
    ShowScreen();
})