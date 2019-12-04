  

class SubmitRankingRequest {
  
  constructor(isRelated, complexityScore, leftCardId, rightCardId) {
    this.isRelated = isRelated;
    this.complexityScore = complexityScore;
    this.leftCardId = leftCardId;
    this.rightCardId = rightCardId;
  }
  
  send = async () => {
    const response = await fetch(
        'http://localhost:4567/submitRankings', 
        {
          method: 'POST',
          body: JSON.stringify({
            isRelated: this.isRelated,
            complexityScore: this.complexityScore,
            leftCardId: this.leftCardId,
            rightCardId: this.rightCardId
          })
        }
      );
    const json = await response.json()
    return json
  }
  
}


export default SubmitRankingRequest