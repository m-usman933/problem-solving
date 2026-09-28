function findSequence(numbers : number[]) : number
{
    let set1 = new Set<number>();
    let max_count=0;

    for(const number of numbers)
    {
        set1.add(number);
    }

    for(const number of set1)
    {
        
        if(!set1.has(number -1))
        {
            let count =1;
            let currentNumber = number;

            while(set1.has(currentNumber + 1))
            {
                currentNumber++;
                count++;
            }

            if(count > max_count)
            {
                max_count = count;
            }
        }
        
    }
    return max_count;
}