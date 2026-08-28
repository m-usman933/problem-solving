function isCorrectSequence(String1 : string) : boolean
{
    const openingBrackets : string [] = [];
    for (let i=0; i<String1.length;i++)
    {
        if (String1[i] === '(' || String1[i] === '{' ||  String1[i] === '[')
        {
            openingBrackets.push(String1[i]);
        }
    }
    return true;
}