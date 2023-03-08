1. Write a Java program to find the longest word in a string. Given String : "The quick brown fox jumped over the lazy dog"
 
public class LongestWord {
    public static void main(String[] args) {
        String input = "The quick brown fox jumped over the lazy dog";
        String[] words = input.split(" ");
        String longestWord = "";
        for (String word : words) {
            if (word.length() > longestWord.length()) {
                longestWord = word;
            }
        }
        System.out.println("The longest word is: " + longestWord);
    }
}

Explanation:

We start by declaring a string variable input which contains the given string.
We split the string into an array of words using the split method and the space delimiter " ".
We declare a string variable longestWord and initialize it to an empty string.
We iterate through the array of words using a for loop.
For each word, we compare its length to the length of the current longestWord. If the length of the word is greater than the length of the current longestWord, we update longestWord to the current word.
Finally, we print out the longest word using the println method.


2. Write a java code to repeat a string 'n' times. If "abc" and "3" are the arguments to your function, it should return"abcabcabc"

public class RepeatString {
    public static void main(String[] args) {
        String input = "abc";
        int n = 3;
        String repeatedString = repeat(input, n);
        System.out.println("The repeated string is: " + repeatedString);
    }
   
    public static String repeat(String input, int n) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append(input);
        }
        return sb.toString();
    }
}

Explanation:

We start by declaring a string variable input which contains the string we want to repeat.
We declare an integer variable n which contains the number of times we want to repeat the string.
We call the repeat function and pass in the input and n variables.
The repeat function takes in a string input and an integer n.
We declare a StringBuilder variable sb to build the repeated string.
We use a for loop to iterate n times, and for each iteration, we append the input string to the sb variable using the append method.
Finally, we return the repeated string by calling the toString method on the sb variable.

3. write a java program to remove duplicates in an array. If"[1,20,3,1,3,3]" is the input to your function, it should return"[1,20,3]"

import java.util.*;

public class RemoveDuplicates {
    public static void main(String[] args) {
        int[] input = {1, 20, 3, 1, 3, 3};
        int[] result = removeDuplicates(input);
        System.out.println("The array without duplicates is: " + Arrays.toString(result));
    }

    public static int[] removeDuplicates(int[] arr) {
        Set<Integer> set = new HashSet<>();
        for (int i : arr) {
            set.add(i);
        }
        int[] result = new int[set.size()];
        int index = 0;
        for (int i : set) {
            result[index++] = i;
        }
        return result;
    }
}

Explanation:

We start by declaring an integer array input which contains the input array.
We call the removeDuplicates function and pass in the input array.
The removeDuplicates function takes in an integer array arr.
We declare a HashSet variable set to store the unique elements of the array.
We iterate through the input array arr using a for loop and add each element to the set using the add method.
We declare an integer array result to store the non-duplicate elements of the array.
We get the size of the set using the size method and initialize the result array with the same size.
We iterate through the set using a for loop and assign each element to the result array.
Finally, we return the result array.

4. Write a java program to remove falsy values. If "[42,"everything","",2,false,"everything"]" is the input to your function, it should return "[42,"everything",2,"everything"]"

import java.util.*;

public class RemoveFalsyValues {
    public static void main(String[] args) {
        Object[] input = {42, "everything", "", 2, false, "everything"};
        Object[] result = removeFalsyValues(input);
        System.out.println("The array without falsy values is: " + Arrays.toString(result));
    }

    public static Object[] removeFalsyValues(Object[] arr) {
        List<Object> list = new ArrayList<>();
        for (Object o : arr) {
            if (o != null && !o.equals("") && !o.equals(false)) {
                list.add(o);
            }
        }
        return list.toArray();
    }
}

Explanation:

We start by declaring an object array input which contains the input array.
We call the removeFalsyValues function and pass in the input array.
The removeFalsyValues function takes in an object array arr.
We declare an ArrayList variable list to store the non-falsy elements of the array.
We iterate through the input array arr using a for loop and check if each element is not null, not an empty string, and not false.
If the element is not falsy, we add it to the list using the add method.
Finally, we convert the list to an array using the toArray method and return it.

5. Write a java program to truncate a string. If "Absolute victory" and "3" are the inputs to your function, it should return "Abs..."

public class TruncateString {
    public static void main(String[] args) {
        String input = "Absolute victory";
        int maxLength = 3;
        String truncatedString = truncate(input, maxLength);
        System.out.println("The truncated string is: " + truncatedString);
    }
   
    public static String truncate(String input, int maxLength) {
        if (input.length() <= maxLength) {
            return input;
        } else {
            return input.substring(0, maxLength) + "...";
        }
    }
}

Explanation:

We start by declaring a string variable input which contains the string we want to truncate.
We declare an integer variable maxLength which contains the maximum length of the truncated string.
We call the truncate function and pass in the input and maxLength variables.
The truncate function takes in a string input and an integer maxLength.
We check if the length of the input is less than or equal to the maxLength. If so, we return the original input.
If the length of the input is greater than the maxLength, we use the substring method to extract the first maxLength characters of the input and concatenate the ellipsis (...) to the end of the substring.
Finally, we return the truncated string.