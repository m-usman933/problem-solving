function findUniqueElements(numbers : number []) : number
{
    let write : number =0;

    numbers[write] = numbers[0];

    for (let i=1; i<numbers.length; i++)
    {
        if (numbers[i] === numbers[write])
            continue;

        write++;
        numbers[write] = numbers[i];
    }
    return (write + 1);
}