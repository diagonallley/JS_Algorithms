//? Sliding window to find the longest subsequence in  a string

function findLongestSubString(str){
  let seen={};
  let longest=0;
  let start=0;


  for(let i=0;i<str.length;i++){

    if(seen[str[i]]){
      start=Math.max(start, seen[char]);
    }

    longest=Math.max(longest,i-start+1);

    seen[char]=i+1; //?  connected to the line start=Math.max(start, seen[char]); () if we meet a duplicate we start after that duplicate


  }

  return longest;

}