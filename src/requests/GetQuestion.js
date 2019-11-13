

class GetQuestionRequest {
  
  constructor(sessionId, gradeLevel) {
    this.sessionId = sessionId;
    this.gradeLevel = gradeLevel
  }
  
  send = () => {
    // TODO request logic
    return {
      questionId: "123",
      questionText: "5 + 5 = ?",
      answerSet: [
        "10",
        "ten"
      ],
      units: ""
    }
  }
  
}


export default GetQuestionRequest