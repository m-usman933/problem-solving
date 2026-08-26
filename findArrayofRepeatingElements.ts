function findDuplicates(duplicates : string[]) : string[]
{
    let results : string[] = [];
    let isThere : boolean = false;
    for (let i=1; i<duplicates.length; i++)
    {
        for (let j=0; j<i; j++)
        {
            if(duplicates[i] === duplicates[j])
            {
                isThere = false;
                for (let k=0; k<results.length; k++)
                {
                    if(results[k] == duplicates[j])
                    {
                        isThere = true;
                        break;
                    }
                }

                if(!isThere)
                {
                    results.push(duplicates[i]);
                }

            }
        }
    }

    return results;
}