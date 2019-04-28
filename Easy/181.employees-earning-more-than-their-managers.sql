--
-- @lc app=leetcode id=181 lang=mysql
--
-- [181] Employees Earning More Than Their Managers
--
# Write your MySQL query statement below
 
SELECT a.Name as Employee   from Employee a left JOIN Employee b on 1=1 WHERE a.ManagerId = b.id and a.Salary >b.Salary;
