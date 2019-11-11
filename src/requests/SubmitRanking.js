

class SubmitRankingRequest {
  
  constructor(isRelated, relatednessScore, leftCardId, rightCardId) {
    this.isRelated = isRelated;
    this.relatednessScore = relatednessScore;
    this.leftCardId = leftCardId;
    this.rightCardId = rightCardId;
  }
  
  send = () => {
    // TODO request logic
    alert('request sent: related=' + this.isRelated + ' , score=' + this.relatednessScore + ' , leftId: ' + this.leftCardId + ' , rightId: ' + this.rightCardId);
  }
  
}


export default SubmitRankingRequest