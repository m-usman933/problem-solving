function findDuplicates(duplicates : string[]) : any
{
    const seenElements = new Set<string>();
    const duplicateElements = new Set<string>();
    for (let i=0; i<duplicates.length; i++)
    {
        if(seenElements.has(duplicates[i]))
        {
            duplicateElements.add(duplicates[i])
        }
        else
        {
            seenElements.add(duplicates[i]);
        }
    }
    return duplicateElements;
}