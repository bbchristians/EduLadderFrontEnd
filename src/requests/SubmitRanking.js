

class SubmitRankingRequest {
  
  constructor(isRelated, relatednessScore) {
    this.isRelated = isRelated;
    this.relatednessScore = relatednessScore;
  }
  
  send = () => {
    alert('request sent: related=' + this.isRelated + ' , score=' + this.relatednessScore);
  }
  
}


export default SubmitRankingRequest