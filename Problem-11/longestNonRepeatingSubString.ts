function findLongestSubstring(s : string) : number
{
    let seenCharacter = new Map<string , number>();
    let start =0;
    let lengthofSubString = 0;
    let maxLength =0;


    for (let i=0; i<s.length; i++)
    {
        if (seenCharacter.has(s[i]))
        {
            if(seenCharacter.get(s[i])! +1 > start)
            {
                start = seenCharacter.get(s[i])! +1;
            }
        }

        seenCharacter.set(s[i],i);

        lengthofSubString = i-start+1;
        if (lengthofSubString > maxLength)
        {
            maxLength = lengthofSubString;
        }
    }
    return maxLength;
}