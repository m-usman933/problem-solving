function findIndices( numbers : number[] , target : number) : number[]
{
    let index1 =0;
    let index2 =0;

    let indices : number[] =[]

    for (let i=0; i< numbers.length;i++)
    {
        const difference = target-numbers[i];
        index1 = i;

        for(let j=i+1; j<numbers.length; j++)
        {
            if(numbers[j] == difference)
            {
                index2 = j;
                indices = [index1, index2];
                return indices;
            }        
        }
    }
}