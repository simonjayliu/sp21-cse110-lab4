1. The bug was that the data type of result was a string, so then javascript was treating the line of code `let result = num1 + num2` as string concatenation rather than numeric addition, so then num2 was being appended to num1 instead of being added
2. I would fix it by applying type conversion to the parameters of num1 and num2 by doing `Number(num1)` and `Number(num2)`. Thus, this would work because now the + operator is being treated as addition since both the values are numbers, not strings.
![](screenshots/Screen%20Shot%202021-04-25%20at%208.04.43%20PM.png)
3. citylots.json is the new file name
4. part2.js initiated the download of the new file
5. file size is 11.7 mb
6. It took 863 ms to download
7. User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36
8. Server: Apache
9. Last-Modified: Tue, 26 Jan 2021 22:14:13 GMT
10. Content-Type: application/json
11. fetchData()

