/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let min;
  let widthLeft = 0;
  let widthRight = height.length - 1;
  let result = 0;
  while (widthLeft < widthRight) {
    min = Math.min(height[widthLeft], height[widthRight]);
    difference = widthRight - widthLeft;
    area = (difference > 0) ? (min * difference) : min * difference * (-1);
    result = Math.max(area, result);
    if (min === height[widthLeft]) {
      widthLeft++;
    }
    else {
      widthRight--;
    }
  }
  return result;
};