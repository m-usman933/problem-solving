function findIndices( numbers : number[] , target : number) : number[]
{
    let seenNumber = new Map<number, number>();

    for (let i=0; i< numbers.length;i++)
    {
        const difference = target-numbers[i];

        if(seenNumber.has(difference))
        {
            return [i, (seenNumber.get(difference)!)];
        }
        
        seenNumber.set(numbers[i],i);
    }

    return [];
}