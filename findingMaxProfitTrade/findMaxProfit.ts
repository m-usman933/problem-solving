function findMaxProfit(numbers : number[]) : number
{
    let minPrice : number = numbers[0];
    let maxProfit : number =0;

    for(let i=1; i<numbers.length; i++)
    {
        if(minPrice > numbers[i])
        {
            minPrice = numbers[i];
        }

        else
        {
            const profit = numbers[i] - minPrice;
            if(profit > maxProfit)
            {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}