function maximumSum(numbers: number[]) : number
{
    let currentSum : number = numbers[0];
    let maxSum : number = numbers[0];

    for(let i=1; i<numbers.length; i++)
    {
        if((currentSum + numbers[i]) < numbers[i])
        {
            currentSum = numbers[i];
        }
        else
        {
            currentSum += numbers[i];
        }

        if (currentSum > maxSum)
        {
            maxSum = currentSum;
        }
    }
    return 0;
}