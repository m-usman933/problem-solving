function setOfAnagrams(s : string []) : string[][]
{
    let finalMap = new Map<string,string[]>();
    for(let i=0; i<s.length; i++)
    {
        let Map1 = new Map<string,number>();
        let mapArray : number[] = [];
        for(let j=0; j<s[i].length; j++)
        {
            if(Map1.has(s[i][j]))
            {
                Map1.set(s[i][j], Map1.get(s[i][j])! + 1);
            }
            else
                Map1.set(s[i][j]!,1)
        }

        for(let code=97; code<=122; code++)
        {
            const character = String.fromCharCode(code);
            if(Map1.has(character))
            {
                mapArray[code-97] = Map1.get(character)!; 
            }
            else
                mapArray[code-97] =0;
        }

        const key = mapArray.join("#");

        if (finalMap.has(key))
        {
            finalMap.get(key)!.push(s[i]);
        }
        else
        {
            finalMap.set(key, [s[i]]);
        }
    }
    return Array.from(finalMap.values());
}