## 🧠 Merge Sort Algorithm (Cheat Sheet Format)

### 🔁 MERGE_SORT(arr)
1. If `arr.length ≤ 1` → return `arr`
2. Split `arr` into `left` and `right` halves:
   - `mid = Math.floor(arr.length / 2)`
   - `left = arr.slice(0, mid)`
   - `right = arr.slice(mid)`
3. Recursively sort both halves:
   - `leftSorted = MERGE_SORT(left)`
   - `rightSorted = MERGE_SORT(right)`
4. Merge the sorted halves:
   - `return MERGE(leftSorted, rightSorted)`

---

### 🔀 MERGE(left, right)
1. Create empty array `result`
2. Set pointers: `i = 0`, `j = 0`
3. While both arrays have elements:
   - If `left[i] < right[j]` → `result.push(left[i]); i++`
   - Else → `result.push(right[j]); j++`
4. Append remaining items:
   - `result.push(...left.slice(i))`
   - `result.push(...right.slice(j))`
5. Return `result`

---

### 📊 Time & Space Complexity
- Time: `O(n log n)`
- Space: `O(n)` (due to additional arrays in recursion and merging)
