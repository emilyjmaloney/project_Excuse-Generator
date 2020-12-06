window.onload = () => {
    // declare variables who, what and when 
    // and assign at least 4 values for each
    var intro = "OMG! You would not believe me but..."
    let who = ["I ", "He ", "The Majesty ", "She "]
    let what = ["couldn't ", "didn't ", "forgot to ", "wasn't allowed to "]
    let when = ["go.", "sleep.", "drive.", "find it."]

    // select a random who, what and when
    var randomWho = who[Math.floor(Math.random() * who.length)]
    var randomWhat = what[Math.floor(Math.random() * what.length)]
    var randomWhen = when[Math.floor(Math.random() * when.length)]

    // concatenate who + what + when
    var excuse = intro + randomWho + randomWhat + randomWhen

    
    // print on webpage
    document.getElementById('title').innerHTML = excuse;
    document.getElementById('title').style.backgroundColor="magenta";
}