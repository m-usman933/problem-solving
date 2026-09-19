function printZerosInEnd(numbers : number[])
{
    let write : number =0;

    for(let i=0; i<numbers.length ; i++)
    {
        if(numbers[i] != 0)
        {
            numbers[write] = numbers[i]
            write++;
        }
    }

    while (write < numbers.length)
    {
        numbers[write] = 0;
        write++;
    }
}