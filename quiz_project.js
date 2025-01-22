const form = document.getElementById('quiz_container')

const original_ans={
    '1': 'a',
    '2': 'd',
    '3': 'b',
    '4': 'a',
    '5': 'a',
    '6': 'c',
    '7': 'd',
    '8': 'b'
}
form.addEventListener('submit', (event)=>{


    event.preventDefault()

    const data = new FormData(form)

    let result=0;
    for(let [key, val] of data.entries())
    {
        if(val===original_ans[key])
        {
            result++;
        }
    }

    // console.log(result)
    const output=document.querySelector('.result')
    output.innerText=  `${result} out of 8 is correct` 

})