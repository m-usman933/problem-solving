function isAnagram(string1 : string, string2 : string) :  boolean
{
    let Map1 = new Map<string, number>();
    let Map2 = new Map<string, number>();

    for (let i=0; i<string1.length;i++)
    {
        const character = string1[i];
        if (Map1.has(character))
        {
            Map1.set(character,Map1.get(character)! +1);
        }
        else
            Map1.set(character,1);
    }

    for (let i=0; i<string2.length;i++)
    {
        const character = string2[i];
        if (Map2.has(character))
        {
            Map2.set(character,Map2.get(character)! +1);
        }
        else
            Map2.set(character,1);
    }

    if (Map1.size !== Map2.size)
    {
        return false;
    }
    
    for (const [key,value] of Map1)
    {
        if(!Map2.has(key)){
            return false
        }
            if (value !== Map2.get(key))
            {
                return false;
            }
    }
    return true;
}