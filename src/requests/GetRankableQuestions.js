

class GetRankableQuestionsRequest {
  
  send = async () => {
    const response = await fetch(
        'http://localhost:4567/getRankableQuestions', 
        {
          method: 'GET'
        }
      );
    const json = await response.json()
    return json
  }
  
}


export default GetRankableQuestionsRequest