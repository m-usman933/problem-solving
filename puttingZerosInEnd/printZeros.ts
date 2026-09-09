function printZerosInEnd(numbers : number[])
{
    let write : number =0;
    let arrayOriginalSize : number = numbers.length;

    for(let i=0; i<numbers.length ; i++)
    {
        if(numbers[i] != 0)
        {
            numbers[write] = numbers[i]
            write++;
        }
    }

    for (let i= (numbers.length-1); i<arrayOriginalSize;i++)
    {
        numbers[i] = 0;
    }
}