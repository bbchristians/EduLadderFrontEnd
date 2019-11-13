

class SubmitAnswerRequest {
  
  constructor(sessionId, questionId, answer) {
    this.sessionId = sessionId;
    this.questionId = questionId;
    this.answer = answer;
  }
  
  send = () => {
    // TODO request logic
    alert('request sent: sessionId= ' + this.sessionId + ' , question=' + this.questionId + ' , answer=' + this.answer);
    return 0;
  }
  
}


export default SubmitAnswerRequest