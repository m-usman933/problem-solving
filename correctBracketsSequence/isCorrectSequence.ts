function isCorrectSequence(String1 : string) : boolean
{
    const openingBrackets : string [] = [];
    for (let i=0; i<String1.length;i++)
    {
        if (String1[i] === '(' || String1[i] === '{' ||  String1[i] === '[')
        {
            openingBrackets.push(String1[i]);
        }
        
        else if (openingBrackets.length>0)
        {
            const poppedElement = openingBrackets.pop();
            if(poppedElement == '(' && String1[i] == ')')
                continue

            else if(poppedElement == '{' && String1[i] == '}')
                continue;

            else if(poppedElement == '[' && String1[i] == ']')
                continue;

            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }

    if(openingBrackets.length === 0)
        return true

    else
        return false;
}