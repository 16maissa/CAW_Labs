//exercise2
function mean (scores){
    if (!Array.isArray(scores) || scores.length === 0) {
        return 0; 
    }
    let s=0;
for(let i=0;i<scores.length;i++){
    s+=scores[i];
}
    return s/scores.length


}
module.exports = { mean };
