function findPalindrome(s : string) : boolean
{
    let right= s.length - 1;
    let left =0;

    while(left < right)
    {
        if (!/[a-z0-9]/i.test(s[left]))
        {
            left++;
            continue;
        }

        if (!/[a-z0-9]/i.test(s[right]))
        {
            right--;
            continue;
        }

        else if (s[left].toLowerCase() === s[right].toLowerCase())
        {
            left++;
            right--;
        }

        else
        {
            return false;
        }
    }
    return true;
}