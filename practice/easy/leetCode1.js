/*
 * 1. 两数之和
 */

/**
 * 暴力法 两层遍历 时间复杂度 O(n²)
 * @param nums
 * @param target
 */
export function violence(nums, target) {
  if (nums instanceof Array && typeof target === "number") {
    // 两层遍历
    for (let i = 0; i < nums.length-1; i++) {
      for (let j = i+1 ; j < nums.length ; j++) {
        const a = parseInt(nums[i],10)
        const b = parseInt(nums[j],10)
        if (target === a + b) {
          return [i, j]
        }
      }
    }
  }
  return false
}

export function array(nums, target) {
  if (nums instanceof Array && typeof target === "number") {
    const t = []
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i]
      if (t[diff] !== undefined) {
        return [t[diff], i]
      }
      t[nums[i]] = i
    }
  }
}

