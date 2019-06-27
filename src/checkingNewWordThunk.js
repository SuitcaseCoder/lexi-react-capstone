function _addNewWord(){
    return fetch(`https://evening-sierra-54551.herokuapp.com/words`).then(res => 
        res.json()
    ).then(data => data.results.map(words => words.word));
}

export function addNewWord(){

}