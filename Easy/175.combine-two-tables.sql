--
-- @lc app=leetcode id=175 lang=mysql
--
-- [175] Combine Two Tables
--
# Write your MySQL query statement below

SELECT  p.FirstName,  p.LastName,a.City, a.State FROM Person  p LEFT JOIN  Address a on a.PersonId=p.PersonId;

