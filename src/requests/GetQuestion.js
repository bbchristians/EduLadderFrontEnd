

class GetQuestionRequest {
  
  constructor(sessionId, gradeLevel, answeredQuestions) {
    this.sessionId = sessionId;
    this.gradeLevel = gradeLevel;
    this.answeredQuestions = answeredQuestions;
  }
  
  send = async () => {
    const response = await fetch(
        'http://localhost:4567/getQuestion', 
        {
          method: 'POST',
          body: JSON.stringify({
            sessionId: this.sessionId,
            gradeLevel: this.gradeLevel,
            answeredQuestions: this.answeredQuestions
          })
        }
      );
    const json = await response.json()
    return json.question
  }
}


export default GetQuestionRequest