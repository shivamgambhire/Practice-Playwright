function removeDuplicates<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
//console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]