function isInArray(numbers : number[],k : number): boolean
{
    let Map1 = new Map<number, number>();

    for(let i=0; i<numbers.length; i++)
    {
        if (Map1.has(numbers[i]))
        {
            let indices_difference = i - (Map1.get(numbers[i])!);
            if (indices_difference <=k)
                return true;
        }

        else
        {
            Map1.set(numbers[i],i);
        }
    }
    return false;
}