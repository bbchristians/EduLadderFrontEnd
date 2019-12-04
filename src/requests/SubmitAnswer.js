

class SubmitAnswerRequest {
  
  constructor(sessionId, questionId, answer) {
    this.sessionId = sessionId;
    this.questionId = questionId;
    this.answer = answer;
  }
  
  send = async () => {
    const response = await fetch(
        'http://localhost:4567/submitAnswer', 
        {
          method: 'POST',
          body: JSON.stringify({
            sessionId: this.sessionId,
            questionId: this.questionId,
            answer: this.answer
          })
        }
      );
    const json = await response.json()
    return json
  }
  
}


export default SubmitAnswerRequest