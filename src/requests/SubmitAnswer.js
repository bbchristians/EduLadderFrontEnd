

class SubmitAnswerRequest {
  
  constructor(questionId, answer) {
    this.questionId = questionId;
    this.answer = answer;
  }
  
  send = () => {
    // TODO request logic
    alert('request sent: question=' + this.questionId + ' , answer=' + this.answer);
  }
  
}


export default SubmitAnswerRequest