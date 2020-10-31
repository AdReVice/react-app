import React from 'react';
import axios from 'axios';

export default class EmployeeList extends React.Component {
  
  constructor(){
    this.state = {
      questions : {
        "responseCode": "200",
        "responseMessage": "OK",
        "responseType": "object",
        "data": {
            "result": true,
            "message": "OK",
            "questionMstRespDtlList": [
                {
                    "questionCode": "Question1",
                    "questionIndex": 1,
                    "questionLabel": "Were you satisfied with the overall sales (Buying) experience?",
                    "answerType": "20",
                    "answerCount": 5,
                    "possibleAnswerValues": [
                        {
                            "key": "010",
                            "value": "Excellent - (Beyond Expectations)"
                        },
                        {
                            "key": "020",
                            "value": "V.Good - (Somewhat Above Expectation)"
                        },
                        {
                            "key": "030",
                            "value": "Good - (Just Meets Expectation)"
                        },
                        {
                            "key": "040",
                            "value": "Average - (Somewhat Below Expectation)"
                        },
                        {
                            "key": "050",
                            "value": "Poor - (Far Below Expectation)"
                        }
                    ],
                    "questionMandatoryFlag": "1"
                },
                {
                    "questionCode": "Question2",
                    "questionIndex": 2,
                    "questionLabel": "How was overall staff attitude and behavior? Please rate:",
                    "answerType": "20",
                    "answerCount": 5,
                    "possibleAnswerValues": [
                        {
                            "key": "010",
                            "value": "Excellent - (Beyond Expectations)"
                        },
                        {
                            "key": "020",
                            "value": "V.Good - (Somewhat Above Expectation)"
                        },
                        {
                            "key": "030",
                            "value": "Good - (Just Meets Expectation)"
                        },
                        {
                            "key": "040",
                            "value": "Average - (Somewhat Below Expectation)"
                        },
                        {
                            "key": "050",
                            "value": "Poor - (Far Below Expectation)"
                        }
                    ],
                    "questionMandatoryFlag": "0"
                },
                {
                    "questionCode": "Question3",
                    "questionIndex": 3,
                    "questionLabel": "Were you offered test ride proactively?",
                    "answerType": "30",
                    "answerCount": 2,
                    "possibleAnswerValues": [
                        {
                            "key": "010",
                            "value": "Yes"
                        },
                        {
                            "key": "020",
                            "value": "No"
                        }
                    ],
                    "questionMandatoryFlag": "1"
                },
                {
                    "questionCode": "Question4",
                    "questionIndex": 4,
                    "questionLabel": "Will you recommend this dealership to your family and friends for purchase?",
                    "answerType": "30",
                    "answerCount": 2,
                    "possibleAnswerValues": [
                        {
                            "key": "010",
                            "value": "Yes"
                        },
                        {
                            "key": "020",
                            "value": "No"
                        }
                    ],
                    "questionMandatoryFlag": "0"
                },
                {
                    "questionCode": "Question5",
                    "questionIndex": 5,
                    "questionLabel": "Enter mandatory sales remarks",
                    "answerType": "10",
                    "answerCount": 1,
                    "possibleAnswerValues": [],
                    "questionMandatoryFlag": "1"
                },
                {
                    "questionCode": "Question6",
                    "questionIndex": 6,
                    "questionLabel": "Enter sales remarks",
                    "answerType": "10",
                    "answerCount": 1,
                    "possibleAnswerValues": [],
                    "questionMandatoryFlag": "0"
                }
            ]
        }
    }
  }
  }
}