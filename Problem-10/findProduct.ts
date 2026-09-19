function findProduct(numbers : number[]) : number[]
{
    let resultsArray : number[] = [];
    let left_product = 1;
    let right_product = 1;

    for (let i=0; i<numbers.length; i++)
    {
        resultsArray[i] = left_product;
        left_product = numbers[i] * left_product;
    }

    for (let i = numbers.length-1; i>=0; i--)
    {
        resultsArray[i] = resultsArray[i] * right_product;
        right_product = right_product * numbers[i]; 
    }

    return resultsArray;
}