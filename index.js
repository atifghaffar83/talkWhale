/* Following myFunction function get the string from 
HTML page and translate into Whale language */

function myFunction(){
    
    let input = document.getElementById('textValue').value;
    input = input.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let resultArray = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (input[i] === vowels[j]) {
                resultArray.push(vowels[j]);

            }
        }
        if (input[i] === 'e' || input[i] === 'u') {
            resultArray.push(input[i]);
        }


    }
    resultArray = resultArray.join("").toUpperCase();
    document.getElementById('result').innerText = resultArray;   
    console.log(resultArray);
}

/* Following function is for reset button */

function reset(){
    document.getElementById('result').innerText = "";
    document.getElementById('textValue').value = "";

}