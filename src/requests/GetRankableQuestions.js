

class GetRankableQuestionsRequest {
  
  constructor() { }
  
  send = () => {
    // TODO request logic
    return {
      card1: {
        questionId: "123",
        questionText: "5 + 5 = ?",
        answerSet: [
          "10",
          "ten"
        ],
        units: ""
      },
      card2: {
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
  
}


export default GetRankableQuestionsRequest